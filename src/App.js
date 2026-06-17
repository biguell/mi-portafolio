import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import './App.css';

import homeAssistantImg from './assets/containers/home_assistant.svg';
import plexImg from './assets/containers/plex.svg';
import raspiDashImg from './assets/containers/raspi_dashboard.png';
import specraImg from './assets/containers/specra_trace.png';
import esp32Img from './assets/containers/esp32.png';
import gastiumIaImg from './assets/containers/gastium_ia_v1250_mockup.png';
import tinkercadImg from './assets/containers/tinkercad.png';
import nextcloudLogo from './assets/containers/nextcloud_logo.png';
import turnoControlImg from './assets/containers/turno_control_icon.png';
import alexaImg from './assets/containers/alexa.svg';
import stariaImg from './assets/containers/staria_escoba_icon.png';
import ramboDashImg from './assets/containers/rambo_dashboard.png';
import ramboEngineImg from './assets/containers/rambo_engine.png';
import DevopsTerminal from './components/DevopsTerminal';
import certificateImg from './assets/containers/certificate.svg';

function App() {
  const [telemetry, setTelemetry] = React.useState({
    ping: 12,
    ramboCpu: 4.2,
    ramboTemp: 33.6,
    raspiCpu: 2.1,
    raspiTemp: 38.5
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry({
        ping: Math.floor(Math.random() * (15 - 10 + 1)) + 10,
        ramboCpu: parseFloat((Math.random() * (12 - 3) + 3).toFixed(1)),
        ramboTemp: parseFloat((Math.random() * (34.5 - 33.1) + 33.1).toFixed(1)),
        raspiCpu: parseFloat((Math.random() * (8 - 1.5) + 1.5).toFixed(1)),
        raspiTemp: parseFloat((Math.random() * (39.5 - 38.0) + 38.0).toFixed(1))
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const projectCategories = [
    {
      name: 'Infraestructura & Seguridad',
      icon: 'bi-shield-lock',
      projects: [
        {
          title: 'Rambo Infrastructure Engine',
          version: 'v18.9.5',
          description: 'Ecosistema de monitorización unificado con arquitectura "Neon-Motion". Incluye protocolo Synergy con IA Auto-Healer para autoreparación de servicios.',
          link: '#',
          image: ramboEngineImg
        },
        {
          title: 'Servidor de Aplicaciones (Raspi)',
          version: 'v18.9.5',
          description: 'Nodo distribuido sincronizado con Rambo. Ejecuta contenedores críticos (Plex, HA) bajo monitorización continua.',
          link: '#',
          image: raspiDashImg
        },
        {
          title: 'Infraestructura Segura (Rambo NAS)',
          version: 'v18.9.5',
          description: 'Servidor central (192.168.2.35) con OMV 7. "Hardening" avanzado (Lynis 80+), seguridad multicapa con Fail2ban, AIDE y BorgBackup cifrado.',
          link: '#',
          image: ramboDashImg
        },
        {
          title: 'Nube Privada Nextcloud',
          description: 'Almacenamiento y sincronización de archivos totalmente privado. Independencia total de servicios externos con seguridad reforzada.',
          link: '#',
          image: nextcloudLogo
        }
      ]
    },
    {
      name: 'Software, IA & Cloud',
      icon: 'bi-code-slash',
      projects: [
        {
          title: 'TurnoControlPro',
          version: 'v6.5.41',
          description: 'Plataforma líder para la gestión operativa de conductores. Integra MySQL relacional, auditoría v5.0 y reportes avanzados.',
          link: 'https://www.turnocontrolpro.com',
          image: turnoControlImg
        },
        {
          title: 'Alexa + Gemini: Asistente IA',
          description: 'Skill de Alexa conectada a Gemini mediante AWS Lambda. Razonamiento avanzado por voz en lenguaje natural.',
          link: '#',
          image: alexaImg
        },
        {
          title: 'Gastium IA: Control Financiero',
          description: 'Asistente de gastos con Gemini. Lectura de tickets mediante OCR, clasificación dinámica y optimización de presupuestos.',
          link: '#',
          image: gastiumIaImg
        },
        {
          title: 'Escoba Drivers',
          version: 'v16.0',
          description: 'Versión ágil (PWA) de gestión de turnos con el algoritmo de "Justicia Histórica", persistencia total y optimización extrema para dispositivos móviles iPhone/iOS.',
          link: '#',
          image: stariaImg
        }
      ]
    },
    {
      name: 'Hardware, IoT & Multimedia',
      icon: 'bi-cpu',
      projects: [
        {
          title: 'K2-RFID IoT System',
          description: 'Desarrollo IoT con ESP32 y RC522. Control de acceso mediante tarjetas MIFARE con encriptación básica.',
          link: '#',
          image: esp32Img,
          overlayText: 'ESP32/RFID'
        },
        {
          title: 'Domótica: Home Assistant',
          description: 'Cerebro inteligente del hogar. Red Zigbee, Bluetooth integrado y control unificado de dispositivos.',
          link: '#',
          image: homeAssistantImg
        },
        {
          title: 'Spectrol señales (Análisis Espectral)',
          description: 'Herramienta de análisis forense y visualización de trazas espectrales para patrones complejos.',
          link: '#',
          image: specraImg
        },
        {
          title: 'Diseño & Impresión 3D',
          description: 'Diseñador y creador de los perfiles YoephLabs. Modelado 3D de precisión enfocado en soluciones funcionales, piezas mecánicas y organizadores de utilidad. ¡Sígueme en mis perfiles de Printables y Creality Cloud para descargar mis últimos diseños y apoyar mi trabajo! Experto en laminado multi-color y calibración de impresoras Ender 3S1 Plus/Pro y Ender HI con CFS.',
          link: [
            { text: 'Printables (YoephLabs)', url: 'https://www.printables.com/@yoeph_507556' },
            { text: 'Creality Cloud', url: 'https://www.crealitycloud.com/user-profile/2772190518' }
          ],
          image: tinkercadImg
        },
        {
          title: 'Centro Multimedia Plex',
          description: 'Servidor de medios optimizado con transcodificación 4K por hardware para reproducción fluida.',
          link: '#',
          image: plexImg
        }
      ]
    },
    {
      name: 'Certificaciones & Formación',
      icon: 'bi-award',
      projects: [
        {
          title: 'Desarrollo Sostenible y Gestión Ambiental',
          description: 'Certificación oficial SEAG16 sobre políticas de desarrollo sostenible, control del impacto ambiental y gestión de recursos.',
          link: process.env.PUBLIC_URL + '/certificados/desarrollo_sostenible_gestion_ambiental.pdf',
          image: certificateImg
        },
        {
          title: 'Big Data & Business Intelligence',
          description: 'Especialización IFCT128PO en análisis masivo de datos, privacidad, técnicas de machine learning y toma de decisiones empresariales basadas en datos.',
          link: process.env.PUBLIC_URL + '/certificados/big_data.pdf',
          image: certificateImg
        },
        {
          title: 'Ciberseguridad para Usuarios',
          description: 'Formación IFCT135PO en detección de amenazas, navegación segura, malware, phishing y protección básica de la identidad digital.',
          link: process.env.PUBLIC_URL + '/certificados/ciberseguridad_usuarios.pdf',
          image: certificateImg
        },
        {
          title: 'Protección de Equipos en la Red',
          description: 'Certificación IFCT106PO enfocada en la configuración de firewalls, antivirus, copias de seguridad, redes inalámbricas seguras y hardening del sistema.',
          link: process.env.PUBLIC_URL + '/certificados/proteccion_equipos_red.pdf',
          image: certificateImg
        },
        {
          title: 'Reglamento Europeo de Protección de Datos (RGPD)',
          description: 'Especialización FCOV011PO en cumplimiento del RGPD, derechos ARCO-POL, seguridad de la información y novedades en legislación de datos personales.',
          link: process.env.PUBLIC_URL + '/certificados/reglamento_europeo_proteccion_datos.pdf',
          image: certificateImg
        },
        {
          title: 'Seguridad de los Datos Personales',
          description: 'Certificación ADGD345PO sobre principios del tratamiento de datos, medidas técnicas de seguridad y gestión del riesgo en la manipulación de información privada.',
          link: process.env.PUBLIC_URL + '/certificados/seguridad_datos_personales.pdf',
          image: certificateImg
        },
        {
          title: 'Inglés Profesional B1',
          description: 'Acreditación de competencia comunicativa en inglés a nivel B1, capacitando para la redacción técnica y conversación profesional en entornos globales.',
          link: process.env.PUBLIC_URL + '/certificados/ingles_b1.pdf',
          image: certificateImg
        },
        {
          title: 'Instalación y Configuración de Antenas',
          description: 'Formación técnica especializada cubriendo el montaje, orientación y mantenimiento de sistemas de recepción de señales terrestres y satélite.',
          link: [
            { text: 'Diploma A', url: process.env.PUBLIC_URL + '/certificados/antenas_a.pdf' },
            { text: 'Diploma B', url: process.env.PUBLIC_URL + '/certificados/antenas_b.pdf' }
          ],
          image: certificateImg
        },
        {
          title: 'Automatización y Autómatas Programables',
          description: 'Estudios de especialización en programación de autómatas industriales, robótica, esquemas eléctricos y control de procesos automatizados.',
          link: [
            { text: 'Diploma A', url: process.env.PUBLIC_URL + '/certificados/automatas_a.pdf' },
            { text: 'Diploma B (Foto)', url: process.env.PUBLIC_URL + '/certificados/automatas_b.jpg' }
          ],
          image: certificateImg
        }
      ]
    }
  ];

  return (
    <div className="App">
      <Navbar />
      
      <main>
        {/* Section: Hero */}
        <section id="hero" className="hero-section text-center text-lg-start">
          <div className="container px-4">
            <div className="row align-items-center">
              <div className="col-lg-12 reveal">
                <div className="d-flex flex-wrap gap-2 mb-3 justify-content-center justify-content-lg-start align-items-center">
                  <div className="status-badge" style={{ background: 'rgba(0, 255, 136, 0.06)', borderColor: 'rgba(0, 255, 136, 0.15)', color: '#00ff88', margin: 0 }}>
                    <span className="dot" style={{ background: '#00ff88', boxShadow: '0 0 8px #00ff88' }}></span> DISPONIBLE PARA PROYECTOS
                  </div>
                  <div className="telemetry-badge" style={{ background: 'rgba(0, 210, 255, 0.04)', border: '1px solid rgba(0, 210, 255, 0.12)', padding: '6px 14px', borderRadius: '100px', fontSize: '0.78rem', color: '#00d2ff', fontFamily: 'monospace', display: 'flex', gap: '15px' }}>
                    <span>PING: {telemetry.ping}ms</span>
                    <span>RAMBO CPU: {telemetry.ramboCpu}%</span>
                    <span>TEMP: {telemetry.ramboTemp}°C</span>
                    <span>RASPI CPU: {telemetry.raspiCpu}%</span>
                  </div>
                </div>
                <span className="hero-subtitle">FULL STACK DEVELOPER & DEVOPS</span>
                <h1 className="hero-title">Arquitecturas que definen el rendimiento</h1>
                <p className="lead text-secondary mb-5" style={{ maxWidth: '720px', fontSize: '1.1rem' }}>
                  Especialista en infraestructuras distribuidas, analista de redes y servidores, 
                  automatización con IA y seguridad defensiva. 
                  Transformando complejidad técnica en soluciones operativas.
                </p>
                <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                  <a href="#contact" className="btn btn-primary btn-lg px-4 fw-bold shadow-neon">Contratar App</a>
                  <a href="#projects" className="btn btn-outline-light btn-lg px-4 fw-bold">Ver Proyectos</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Skills */}
        <section id="about" className="py-5 bg-darker">
          <div className="container px-4">
            <div className="row g-5 align-items-center">
              <div className="col-lg-4 reveal">
                <h2 className="fw-bold mb-4 text-white section-title">Capacidades Técnicas</h2>
                <p className="lead text-primary fw-semibold mb-3">José Luis Izquierdo Echuaca</p>
                <p className="text-secondary mb-4" style={{ fontSize: '1rem' }}>
                  Arquitecto de sistemas enfocado en la convergencia entre <strong>IA, Seguridad y Hardware</strong>, 
                  así como <strong>creador de contenidos en 3D</strong> y <strong>creador de aplicaciones</strong>. 
                  Mi perfil combina la robustez de DevOps con la agilidad del desarrollo de software y sistemas distribuidos.
                </p>
                <div className="d-flex flex-column gap-3 mt-4">
                  <div className="d-flex align-items-start gap-3 p-3 rounded-4" style={{ background: 'rgba(255, 255, 255, 0.015)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div className="lh-1 text-center" style={{ minWidth: '55px' }}>
                      <span className="fs-2 fw-bold text-white">14</span>
                    </div>
                    <div className="border-start border-secondary border-opacity-25 ps-3">
                      <div className="fw-bold text-white small" style={{ letterSpacing: '0.5px' }}>Servicios Desplegados</div>
                      <div className="text-secondary small mt-1" style={{ fontSize: '0.78rem', lineHeight: '1.4' }}>
                        Contenedores Docker, bases de datos relacionales y aplicaciones web reales configuradas y corriendo en producción de extremo a extremo.
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3 p-3 rounded-4" style={{ background: 'rgba(255, 255, 255, 0.015)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div className="lh-1 text-center" style={{ minWidth: '55px' }}>
                      <span className="fs-2 fw-bold text-accent">98%</span>
                    </div>
                    <div className="border-start border-secondary border-opacity-25 ps-3">
                      <div className="fw-bold text-white small" style={{ letterSpacing: '0.5px' }}>Disponibilidad (Uptime)</div>
                      <div className="text-secondary small mt-1" style={{ fontSize: '0.78rem', lineHeight: '1.4' }}>
                        Infraestructura tolerante a fallos mediante políticas automáticas de auto-recuperación y copias de seguridad cifradas diarias (Borg).
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-8">
                <div className="row g-4">
                  <div className="col-md-6 reveal" style={{ animationDelay: '0.2s' }}>
                    <div className="skill-item">
                      <h6 className="fw-bold text-white mb-4"><i className="bi bi-cpu text-primary me-2"></i>Hardware & DevOps</h6>
                      
                      <div className="skill-item-inner mb-3">
                        <div className="d-flex justify-content-between small mb-1">
                          <span>Raspberry Pi / Linux / Hardening</span>
                          <span style={{ color: '#00ff88' }} className="fw-bold">Experto</span>
                        </div>
                        <div className="skill-bar-container"><div className="skill-bar-fill" style={{ width: '98%', background: 'linear-gradient(90deg, #00ff88, #10b981)' }}></div></div>
                      </div>

                      <div className="skill-item-inner mb-3">
                        <div className="d-flex justify-content-between small mb-1">
                          <span>Docker / Portainer / NFS</span>
                          <span style={{ color: '#00ff88' }} className="fw-bold">Experto</span>
                        </div>
                        <div className="skill-bar-container"><div className="skill-bar-fill" style={{ width: '96%', background: 'linear-gradient(90deg, #00ff88, #10b981)' }}></div></div>
                      </div>

                      <div className="skill-item-inner mb-3">
                        <div className="d-flex justify-content-between small mb-1">
                          <span>Impresión & Diseño 3D</span>
                          <span style={{ color: '#00ff88' }} className="fw-bold">Experto</span>
                        </div>
                        <div className="skill-bar-container"><div className="skill-bar-fill" style={{ width: '95%', background: 'linear-gradient(90deg, #00ff88, #10b981)' }}></div></div>
                      </div>

                      <div className="skill-item-inner mb-3">
                        <div className="d-flex justify-content-between small mb-1">
                          <span>WireGuard / VPN / Redes</span>
                          <span style={{ color: '#00d2ff' }} className="fw-bold">Avanzado</span>
                        </div>
                        <div className="skill-bar-container"><div className="skill-bar-fill" style={{ width: '88%', background: 'linear-gradient(90deg, #00d2ff, #3a7bd5)' }}></div></div>
                      </div>

                      <div className="skill-item-inner">
                        <div className="d-flex justify-content-between small mb-1">
                          <span>Creador de Contenidos 3D</span>
                          <span style={{ color: '#00ff88' }} className="fw-bold">Experto</span>
                        </div>
                        <div className="skill-bar-container"><div className="skill-bar-fill" style={{ width: '97%', background: 'linear-gradient(90deg, #00ff88, #10b981)' }}></div></div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 reveal" style={{ animationDelay: '0.4s' }}>
                    <div className="skill-item">
                      <h6 className="fw-bold text-white mb-4"><i className="bi bi-code-slash text-primary me-2"></i>Software & Desarrollo</h6>
                      
                      <div className="skill-item-inner mb-3">
                        <div className="d-flex justify-content-between small mb-1">
                          <span>Python (Flask / IA Gemini)</span>
                          <span style={{ color: '#00d2ff' }} className="fw-bold">Avanzado</span>
                        </div>
                        <div className="skill-bar-container"><div className="skill-bar-fill" style={{ width: '90%', background: 'linear-gradient(90deg, #00d2ff, #3a7bd5)' }}></div></div>
                      </div>

                      <div className="skill-item-inner mb-3">
                        <div className="d-flex justify-content-between small mb-1">
                          <span>PowerShell / Bash Scripting</span>
                          <span style={{ color: '#00d2ff' }} className="fw-bold">Avanzado</span>
                        </div>
                        <div className="skill-bar-container"><div className="skill-bar-fill" style={{ width: '92%', background: 'linear-gradient(90deg, #00d2ff, #3a7bd5)' }}></div></div>
                      </div>

                      <div className="skill-item-inner mb-3">
                        <div className="d-flex justify-content-between small mb-1">
                          <span>Ciberseguridad (FIM / Suricata)</span>
                          <span style={{ color: '#00d2ff' }} className="fw-bold">Avanzado</span>
                        </div>
                        <div className="skill-bar-container"><div className="skill-bar-fill" style={{ width: '85%', background: 'linear-gradient(90deg, #00d2ff, #3a7bd5)' }}></div></div>
                      </div>

                      <div className="skill-item-inner mb-3">
                        <div className="d-flex justify-content-between small mb-1">
                          <span>React / JS / CSS</span>
                          <span style={{ color: '#00d2ff' }} className="fw-bold">Avanzado</span>
                        </div>
                        <div className="skill-bar-container"><div className="skill-bar-fill" style={{ width: '94%', background: 'linear-gradient(90deg, #00d2ff, #3a7bd5)' }}></div></div>
                      </div>

                      <div className="skill-item-inner">
                        <div className="d-flex justify-content-between small mb-1">
                          <span>Creador de Aplicaciones</span>
                          <span style={{ color: '#00ff88' }} className="fw-bold">Experto</span>
                        </div>
                        <div className="skill-bar-container"><div className="skill-bar-fill" style={{ width: '95%', background: 'linear-gradient(90deg, #00ff88, #10b981)' }}></div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
 
        {/* Section: Projects by Category */}
        <section id="projects" className="py-5">
          <div className="container px-4">
            <div className="text-center mb-5 reveal">
              <h2 className="fw-bold text-white mb-3 section-title">Ecosistema Tecnológico</h2>
              <p className="text-secondary mx-auto" style={{ maxWidth: '700px' }}>
                Soluciones desplegadas y operativas en infraestructuras de alta disponibilidad.
              </p>
            </div>

            {projectCategories.map((category, catIndex) => (
              <div key={catIndex} className="mb-5 reveal" style={{ animationDelay: `${catIndex * 0.15}s` }}>
                <div className="d-flex align-items-center mb-4">
                  <div className="category-icon-wrapper me-3">
                    <i className={`bi ${category.icon} text-primary`}></i>
                  </div>
                  <h4 className="fw-bold text-white m-0">{category.name}</h4>
                  <div className="flex-grow-1 ms-4 border-bottom border-secondary border-opacity-10"></div>
                </div>
                <div className="row g-4">
                  {category.projects.map((project, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                      <ProjectCard
                        title={project.title}
                        version={project.version}
                        description={project.description}
                        link={project.link}
                        image={project.image}
                        overlayText={project.overlayText}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: DevOps Terminal */}
        <section id="terminal" className="py-5 bg-black border-top border-secondary border-opacity-10">
          <div className="container px-4">
            <div className="text-center mb-4 reveal">
              <h2 className="fw-bold text-white mb-3 section-title">Consola DevOps Interactiva (Frontend Sandbox)</h2>
              <p className="text-secondary mx-auto" style={{ maxWidth: '700px' }}>
                Explora el clúster local a través de este entorno simulado y aislado. Ejecución segura en el lado del cliente (sin acceso de red a los servidores físicos).
              </p>
            </div>
            <div className="row justify-content-center reveal">
              <div className="col-lg-8">
                <DevopsTerminal />
              </div>
            </div>
          </div>
        </section>

        {/* Section: Contact */}
        <section id="contact" className="py-5 bg-darker border-top border-secondary border-opacity-10">
          <div className="container px-4">
            <div className="text-center mb-5 reveal">
              <h2 className="fw-bold text-white mb-3 section-title">Servicios a Terceros & Consultoría Freelance</h2>
              <p className="text-secondary mx-auto mb-4" style={{ maxWidth: '700px' }}>
                ¿Buscas soluciones técnicas de alta gama o quieres externalizar el desarrollo de tu proyecto? Ofrezco servicios profesionales especializados.
              </p>
            </div>

            <div className="row g-4 mb-5 justify-content-center">
              <div className="col-md-4 reveal" style={{ animationDelay: '0.1s' }}>
                <div className="card h-100 glass-card p-4 border-0">
                  <div className="category-icon-wrapper mb-3" style={{ background: 'rgba(0, 210, 255, 0.08)' }}>
                    <i className="bi bi-code-slash text-primary"></i>
                  </div>
                  <h5 className="text-white fw-bold mb-2">Desarrollo de Apps & IA</h5>
                  <p className="text-secondary small mb-0" style={{ lineHeight: '1.6', fontSize: '0.85rem' }}>
                    Creación de aplicaciones web a medida, PWAs de alto rendimiento para móviles e integraciones inteligentes con APIs de Inteligencia Artificial (Gemini SDK).
                  </p>
                </div>
              </div>

              <div className="col-md-4 reveal" style={{ animationDelay: '0.2s' }}>
                <div className="card h-100 glass-card p-4 border-0">
                  <div className="category-icon-wrapper mb-3" style={{ background: 'rgba(0, 255, 136, 0.08)', borderColor: 'rgba(0, 255, 136, 0.2)' }}>
                    <i className="bi bi-hdd-network" style={{ color: '#00ff88' }}></i>
                  </div>
                  <h5 className="text-white fw-bold mb-2">Infraestructura & DevOps</h5>
                  <p className="text-secondary small mb-0" style={{ lineHeight: '1.6', fontSize: '0.85rem' }}>
                    Configuración de servidores NAS y Docker, túneles VPN WireGuard, políticas avanzadas de Hardening/Seguridad y copias Borg automatizadas.
                  </p>
                </div>
              </div>

              <div className="col-md-4 reveal" style={{ animationDelay: '0.3s' }}>
                <div className="card h-100 glass-card p-4 border-0">
                  <div className="category-icon-wrapper mb-3" style={{ background: 'rgba(217, 70, 239, 0.08)', borderColor: 'rgba(217, 70, 239, 0.2)' }}>
                    <i className="bi bi-cpu" style={{ color: '#d946ef' }}></i>
                  </div>
                  <h5 className="text-white fw-bold mb-2">IoT & Soluciones a Medida</h5>
                  <p className="text-secondary small mb-0" style={{ lineHeight: '1.6', fontSize: '0.85rem' }}>
                    Prototipado inteligente con microcontroladores (ESP32), integración domótica profesional (Home Assistant) y modelado/impresión 3D de piezas físicas.
                  </p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-7 text-center reveal">
                <h4 className="fw-bold text-white mb-3">¿Tienes una idea o proyecto en mente?</h4>
                <p className="text-secondary mb-4 small">
                  Escríbeme contándome las especificaciones técnicas o funcionales de tu idea y te ofreceré un presupuesto a medida sin compromiso.
                </p>
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                  <a href="mailto:jluisie24@gmail.com" className="btn btn-primary btn-lg px-5 fw-bold shadow-neon contact-btn">
                    <i className="bi bi-rocket-takeoff me-2"></i>Contratar Servicios
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;