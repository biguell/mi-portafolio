import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import './App.css';

import homeAssistantImg from './assets/containers/home_assistant.png';
import plexImg from './assets/containers/plex.png';
import ramboDashImg from './assets/containers/rambo_dashboard.png';
import raspiDashImg from './assets/containers/raspi_dashboard.png';
import specraImg from './assets/containers/specra_trace.png';
import esp32Img from './assets/containers/esp32.png';
import turnosProIcon from './assets/containers/staria_escoba_icon.png';
import gastiumIaImg from './assets/containers/gastium_ia_v1250_mockup.png'; // Mockup AI original

function App() {
  const projects = [
    {
      title: 'Infraestructura Segura (Rambo NAS)',
      description: 'NAS principal basado en OMV 7 con "Hardening" avanzado (Lynis 80+). Implementa seguridad multicapa con Fail2ban nativo, AIDE (integridad), rkhunter y ClamAV. Sistema de copias de seguridad BorgBackup cifrado y automatizado.',
      link: '#',
      image: ramboDashImg
    },
    {
      title: 'Servidor de Aplicaciones (Raspi)',
      description: 'Gestión de infraestructura distribuida mediante Docker y Portainer. "Cerebro-Stack" unificado que integra Plex, Home Assistant y Mosquitto, optimizado con transcodificación por hardware y persistencia vía NFS desde Rambo.',
      link: '#',
      image: raspiDashImg
    },
    {
      title: 'App de Defensa Unificada',
      description: 'Dashboard integral desarrollado en Flask que centraliza alertas de seguridad de red (Suricata) y monitorización de integridad de archivos (PowerShell FIM) en tiempo real para entornos críticos de Windows.',
      link: '#',
      image: ramboDashImg // Usando Rambo como placeholder si no hay imagen específica
    },
    {
      title: 'Alexa + Gemini: Mi Asistente IA',
      description: 'Integración avanzada de una Alexa Skill con el modelo Gemini de Google (IA). Desarrollado con AWS Lambda en Python, permitiendo consultas complejas de IA generativa desde dispositivos Echo.',
      link: '#',
      image: gastiumIaImg
    },
    {
      title: 'Escoba Drivers (v15.9.8)',
      description: 'PWA avanzada para gestión de turnos. Incluye el algoritmo de "Justicia Histórica" para asignaciones equitativas, persistencia de datos 100% garantizada, optimización específica para iOS/iPhone y control de movimientos.',
      link: 'https://Yoeph.pythonanywhere.com',
      image: turnosProIcon
    },
    {
      title: 'Domótica Avanzada (Home Assistant)',
      description: 'Centralización de inteligencia hogareña en Raspi. Gestión de red Zigbee propia, integración de dispositivos Tuya/Philips Hue y sensores locales, con acceso seguro mediante VPN WireGuard.',
      link: '#',
      image: homeAssistantImg
    },
    {
      title: 'K2-RFID IoT System',
      description: 'Desarrollo de hardware y software basado en ESP32 y el kit RFID RC522. Gestión de lectura/escritura de etiquetas MIFARE Classic 1k con integración en red para control de accesos.',
      link: '#',
      image: esp32Img,
      overlayText: 'ESP32/RFID'
    },
    {
      title: 'Centro Multimedia Optimizado',
      description: 'Servidor Plex en contenedor Docker con acceso a librería NFS masiva. Configurado con paso de dispositivos `/dev/dri` para permitir transcodificación 4K por hardware en tiempo real.',
      link: '#',
      image: plexImg
    },
    {
      title: 'Specra (SpectralCode)',
      description: 'Herramienta avanzada de análisis forense y visualización de trazas espectrales. Procesamiento de señales en tiempo real e identificación de patrones complejos.',
      link: '#',
      image: specraImg
    },
    {
      title: 'Gastium IA',
      description: 'Asistente inteligente de control financiero integrado con Gemini. Automatiza la lectura de tickets mediante OCR, clasifica consumos dinámicamente y genera reportes de optimización de gastos.',
      link: 'https://Yoeph.pythonanywhere.com',
      image: gastiumIaImg
    }
  ];

  return (
    <div className="App">
      <Navbar />
      <Header />
      
      <main>
        {/* Section: Skills & Technical Levels */}
        <section id="about" className="py-5">
          <div className="container px-4">
            <div className="row g-5">
              <div className="col-lg-5 reveal">
                <h2 className="fw-bold mb-4">Sobre Mí</h2>
                <p className="lead text-dark">
                  Soy José Luis Izquierdo Echuaca, técnico y desarrollador autodidacta con pasión por la tecnología y la ciberseguridad. 
                  Administro mi propia infraestructura de servidores de alta disponibilidad: 
                  <strong>Rambo</strong> (NAS/Seguridad) y <strong>Raspi</strong> (App Server). 
                </p>
                <p className="text-muted">
                  Especialista en "Hardening" de sistemas Linux, despliegue de microservicios con Docker y desarrollo de soluciones 
                  basadas en IA (Gemini API) y Python. Mi enfoque combina la robustez del hardware con la agilidad del software moderno.
                </p>
                <div className="mt-4">
                  <a href="#contact" className="btn btn-outline-primary px-4 fw-bold">Contactar</a>
                </div>
              </div>
              
              <div className="col-lg-7">
                <h2 className="fw-bold mb-4 text-center text-lg-start">Capacidades Técnicas</h2>
                <div className="row">
                  <div className="col-md-6 reveal">
                    <h5 className="fw-bold mb-3 mt-2"><i className="bi bi-cpu me-2"></i>Hardware & DevOps</h5>
                    <div className="skill-item">
                      <div className="d-flex justify-content-between">
                        <span>Raspberry Pi / Linux / Hardening</span>
                        <span className="fw-bold text-primary">Experto</span>
                      </div>
                      <div className="skill-bar-container"><div className="skill-bar-fill" style={{ width: '98%' }}></div></div>
                    </div>
                    <div className="skill-item">
                      <div className="d-flex justify-content-between">
                        <span>Docker / Portainer / NFS</span>
                        <span className="fw-bold text-primary">Experto</span>
                      </div>
                      <div className="skill-bar-container"><div className="skill-bar-fill" style={{ width: '92%' }}></div></div>
                    </div>
                    <div className="skill-item">
                      <div className="d-flex justify-content-between">
                        <span>Impresión & Diseño 3D</span>
                        <span className="fw-bold text-primary">Experto</span>
                      </div>
                      <div className="skill-bar-container"><div className="skill-bar-fill" style={{ width: '90%' }}></div></div>
                    </div>
                    <div className="skill-item">
                      <div className="d-flex justify-content-between">
                        <span>WireGuard / VPN / Redes</span>
                        <span className="fw-bold text-primary">Avanzado</span>
                      </div>
                      <div className="skill-bar-container"><div className="skill-bar-fill" style={{ width: '85%' }}></div></div>
                    </div>
                  </div>
                  
                  <div className="col-md-6 reveal">
                    <h5 className="fw-bold mb-3 mt-2"><i className="bi bi-code-slash me-2"></i>Software & Desarrollo</h5>
                    <div className="skill-item">
                      <div className="d-flex justify-content-between">
                        <span>Python (Flask / IA Gemini)</span>
                        <span className="fw-bold text-primary">Avanzado</span>
                      </div>
                      <div className="skill-bar-container"><div className="skill-bar-fill" style={{ width: '90%' }}></div></div>
                    </div>
                    <div className="skill-item">
                      <div className="d-flex justify-content-between">
                        <span>PowerShell / Bash Scripting</span>
                        <span className="fw-bold text-primary">Avanzado</span>
                      </div>
                      <div className="skill-bar-container"><div className="skill-bar-fill" style={{ width: '85%' }}></div></div>
                    </div>
                    <div className="skill-item">
                      <div className="d-flex justify-content-between">
                        <span>React / JS / CSS</span>
                        <span className="fw-bold text-primary">Intermedio</span>
                      </div>
                      <div className="skill-bar-container"><div className="skill-bar-fill" style={{ width: '65%' }}></div></div>
                    </div>
                    <div className="skill-item">
                      <div className="d-flex justify-content-between">
                        <span>Ciberseguridad (FIM / Suricata)</span>
                        <span className="fw-bold text-primary">Avanzado</span>
                      </div>
                      <div className="skill-bar-container"><div className="skill-bar-fill" style={{ width: '80%' }}></div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
 
        {/* Section: Projects */}
        <section id="projects" className="py-5">
          <div className="container px-4">
            <h2 className="fw-bold text-center mb-3">Mis Proyectos</h2>
            <p className="text-center text-muted mb-5">
              Todos mis proyectos corren en mis servidores privados (Raspi y Rambo) y son accesibles a través de mi VPN WireGuard. 
              TurnoControlPro y TurnosPro están alojados localmente y no son accesibles desde el exterior.
            </p>
            <div className="row g-4">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  image={project.image}
                  overlayText={project.overlayText}
                  objectFit={project.objectFit}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Section: Contact */}
        <section id="contact" className="py-5 bg-light">
          <div className="container px-4">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <h2 className="fw-bold mb-4">Contacto</h2>
                <p className="lead text-muted mb-4">
                  ¿Tienes un proyecto en mente o quieres colaborar?
                </p>
                <a href="mailto:jluisie24@gmail.com" className="btn btn-primary btn-lg px-5 fw-bold shadow-sm">
                  <i className="bi bi-envelope me-2"></i>Enviar Email
                </a>
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