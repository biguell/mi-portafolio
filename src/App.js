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
import stariaEscobaImg from './assets/containers/staria_escoba_icon.png';
import gastiumIaImg from './assets/containers/gastium_ia_v1250_mockup.png';
import tinkercadImg from './assets/containers/tinkercad.png';
import turnosProImg from './assets/containers/turnospro_icon.png';
import nextcloudLogo from './assets/containers/nextcloud_logo.png';

function App() {
  const projects = [
    {
      title: 'Infraestructura Segura (Rambo NAS)',
      description: 'Servidor central (192.168.2.35) con OMV 7. "Hardening" avanzado (Lynis 80+), seguridad multicapa con Fail2ban, AIDE y BorgBackup cifrado.',
      link: '#',
      image: ramboDashImg
    },
    {
      title: 'Servidor de Aplicaciones (Raspi)',
      description: 'Gestión de infraestructura distribuida (192.168.2.16). "Cerebro-Stack" unificado con Docker, Portainer y transcodificación por hardware.',
      link: '#',
      image: raspiDashImg
    },
    {
      title: 'Escoba Drivers (v16.0)',
      description: 'Versión definitiva de gestión de turnos con algoritmo de "Justicia Histórica", persistencia total y optimización extrema para iPhone/iOS.',
      link: 'https://Yoeph.pythonanywhere.com',
      image: stariaEscobaImg
    },
    {
      title: 'Alexa + Gemini: Mi Asistente IA',
      description: 'Skill personalizada de Alexa conectada a la API de Gemini mediante AWS Lambda (Python), permitiendo razonamiento avanzado por voz.',
      link: '#',
      image: gastiumIaImg
    },
    {
      title: 'Gastium IA: Control Financiero',
      description: 'Asistente inteligente de control de gastos integrado con Gemini. Lectura de tickets mediante OCR, clasificación dinámica y optimización de presupuestos.',
      link: 'https://Yoeph.pythonanywhere.com',
      image: gastiumIaImg
    },
    {
      title: 'Movimientos Drivers Comercial',
      description: 'Plataforma especializada para la gestión comercial y logística de flotas de conductores. Integración con WhatsApp y reportes automáticos.',
      link: '#',
      image: turnosProImg
    },
    {
      title: 'Domótica: Home Assistant',
      description: 'Cerebro inteligente del hogar en Raspi. Red Zigbee, Bluetooth integrado, y control unificado de dispositivos Philips Hue y Tuya.',
      link: '#',
      image: homeAssistantImg
    },
    {
      title: 'K2-RFID IoT System',
      description: 'Desarrollo IoT con ESP32 y RC522. Gestión de lectura/escritura de tarjetas MIFARE para sistemas de control de acceso seguros.',
      link: '#',
      image: esp32Img,
      overlayText: 'ESP32/RFID'
    },
    {
      title: 'Diseño & Impresión 3D',
      description: 'Especialista en fabricación digital con Ender 3S1 Plus/Pro y Ender HI con CFS. Prototipado rápido y modelado avanzado en Tinkercad.',
      link: '#',
      image: tinkercadImg
    },
    {
      title: 'Centro Multimedia Plex',
      description: 'Servidor de medios optimizado con acceso NFS directo. Soporta transcodificación 4K por hardware para una reproducción fluida.',
      link: '#',
      image: plexImg
    },
    {
      title: 'Nube Privada Nextcloud',
      description: 'Almacenamiento y sincronización de archivos totalmente privado. Independencia total de servicios externos con seguridad reforzada.',
      link: '#',
      image: nextcloudLogo
    },
    {
      title: 'Specra (Análisis Espectral)',
      description: 'Herramienta avanzada de análisis forense y visualización de trazas espectrales para identificación de patrones complejos en tiempo real.',
      link: '#',
      image: specraImg
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