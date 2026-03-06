import os
import base64
import json
import re

build_dir = r"c:\Users\jluis\MisProyectos\MiProyectoGemini\portfolio-app\build"
manifest_path = os.path.join(build_dir, "asset-manifest.json")
output_path = r"c:\Users\jluis\Desktop\portafolio_jose_luis.html"

with open(manifest_path, 'r') as f:
    manifest = json.load(f)["files"]

def get_content(rel_path):
    # Remove leading slash if present
    path = rel_path.lstrip('/')
    full_path = os.path.join(build_dir, path)
    with open(full_path, 'r', encoding='utf-8') as f:
        return f.read()

def get_base64_img(rel_path):
    path = rel_path.lstrip('/')
    full_path = os.path.join(build_dir, path)
    ext = os.path.splitext(full_path)[1].lower().strip('.')
    if ext == 'svg':
        mime = 'image/svg+xml'
    elif ext == 'ico':
        mime = 'image/x-icon'
    else:
        mime = f'image/{ext}'
    
    with open(full_path, 'rb') as f:
        encoded = base64.b64encode(f.read()).decode('utf-8')
        return f"data:{mime};base64,{encoded}"

# 1. Read entry points
main_css = get_content(manifest["main.css"])
main_js = get_content(manifest["main.js"])

# Static chunks
chunks_js = ""
for key, val in manifest.items():
    if key.endswith('.chunk.js'):
        chunks_js += f"\n// Chunk: {key}\n" + get_content(val)

# 1.1 Neutralize Webpack publicPath in JS
# Webpack often sets the public path dynamically: i.p = "./" or i.p = "/"
# We need to set it to "" for the base64 URLs to work correctly.
print("Neutralizando publicPath en el JS...")
original_js_len = len(main_js)
# Pattern matches something like .p="./" or .p="/" but handles any single letter before .p (common in minification)
main_js = re.sub(r'\.[a-z0-9_]\.p\s*=\s*\"[^\"]+\"', lambda x: x.group(0).split('=')[0] + '=""', main_js)
# Also handle chunks if they carry the assignment
chunks_js = re.sub(r'\.[a-z0-9_]\.p\s*=\s*\"[^\"]+\"', lambda x: x.group(0).split('=')[0] + '=""', chunks_js)

if len(main_js) != original_js_len:
    print("Se detectó y neutralizó la asignación de publicPath.")
else:
    # Secondary attempt: very common pattern n.p="/" or a.p="/"
    main_js = main_js.replace('.p="./"', '.p=""').replace('.p="/"', '.p=""')
    chunks_js = chunks_js.replace('.p="./"', '.p=""').replace('.p="/"', '.p=""')
    print("Intento secundario de neutralización de publicPath completado.")

# 2. Bundle images into JS and CSS
# We search for the relative paths (e.g. ./static/media/...) and replace with base64
print("Iniciando reemplazo de imágenes...")
for key, val in manifest.items():
    if "static/media/" in val:
        b64 = get_base64_img(val)
        # Handle all common path versions found in React bundles
        variants = [
            val,                    # ./static/media/... or /static/media/...
            val.lstrip('./'),       # static/media/...
            val.lstrip('/'),        # static/media/...
            val.replace('/', r'\/') # escaped version
        ]
        
        # Remove duplicates from variants
        variants = list(set(variants))
        
        total_js = 0
        total_css = 0
        total_chunks = 0
        
        for var in variants:
            total_js += main_js.count(var)
            total_css += main_css.count(var)
            total_chunks += chunks_js.count(var)
            
            main_js = main_js.replace(var, b64)
            main_css = main_css.replace(var, b64)
            chunks_js = chunks_js.replace(var, b64)
        
        print(f"Reemplazado {key}: JS({total_js}), CSS({total_css}), Chunks({total_chunks})")

# 3. Create the HTML
index_html = get_content("index.html")

# Handle favicon and manifest icons in index.html
for key in ["favicon.ico", "logo192.png", "logo512.png"]:
    if key in manifest:
        val = manifest[key]
        b64 = get_base64_img(val)
        index_html = index_html.replace(val, b64).replace(val.lstrip('/'), b64)

# Remove existing script and link tags that point to static files
# Use a more robust regex to find and remove the tags
index_html = re.sub(r'<link [^>]*static/css/[^>]*>', '', index_html)
index_html = re.sub(r'<script [^>]*static/js/[^>]*></script>', '', index_html)

# Inject CSS
head_end = index_html.find('</head>')
if head_end != -1:
    index_html = index_html[:head_end] + f"<style>{main_css}</style>\n" + index_html[head_end:]

# Inject JS
body_end = index_html.find('</body>')
if body_end != -1:
    index_html = index_html[:body_end] + f"<script>{main_js}\n{chunks_js}</script>\n" + index_html[body_end:]

with open(output_path, 'w', encoding='utf-8') as f:
    f.write(index_html)

print(f"Standalone HTML generated at: {output_path}")
