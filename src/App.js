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
import gastiumIaImg from './assets/containers/gastium_ia_v1250_mockup.png';
import tinkercadImg from './assets/containers/tinkercad.png';
import turnosProImg from './assets/containers/turnospro_icon.png';
import nextcloudLogo from './assets/containers/nextcloud_logo.png';
import turnoControlImg from './assets/containers/turno_control_icon.png';
import stariaEscobaImg from './assets/containers/staria_escoba_icon.png';

function App() {
  const projects = [
    {
      title: 'Rambo Infrastructure Engine (v18.9.5)',
      description: 'Ecosistema de monitorización unificado con arquitectura "Neon-Motion". Incluye protocolo Synergy con IA Auto-Healer para autoreparación de servicios, auditoría de salud v18.9.5 y gestión centralizada de seguridad en Debian Bookworm.',
      link: '#',
      image: ramboDashImg
    },
    {
      title: 'TurnoControlPro (Sistema Empresarial)',
      description: 'Plataforma líder para la gestión operativa de conductores bajo dominio www.turnocontrolpro.com. Integra base de datos MySQL relacional, auditoría v5.0 y un sistema robusto de informes para entornos corporativos de alta demanda.',
      link: 'https://www.turnocontrolpro.com',
      image: turnoControlImg
    },
    {
      title: 'Escoba Drivers (v16.0)',
      description: 'Versión ágil (PWA) de gestión de turnos con el algoritmo de "Justicia Histórica", persistencia total y optimización extrema para dispositivos móviles iPhone/iOS.',
      link: '#',
      image: stariaEscobaImg
    },
    {
      title: 'Servidor de Aplicaciones (Raspi v18.9.5)',
      description: 'Nodo distribuido (192.168.2.16) totalmente sincronizado con Rambo. Ejecuta contenedores críticos (Plex, HA) bajo monitorización continua y sistemas de limpieza de registros automatizados mediante IA.',
      link: '#',
      image: raspiDashImg
    },
    {
      title: 'Infraestructura Segura (Rambo NAS)',
      description: 'Servidor central (192.168.2.35) con OMV 7. "Hardening" avanzado (Lynis 80+), seguridad multicapa con Fail2ban, rkhunter y AIDE para detección de intrusiones en tiempo real.',
      link: '#',
      image: ramboDashImg
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
      link: '#',
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
        {/* Section: Hero */}
        <section className="hero-section text-center text-lg-start">
          <div className="container px-4">
            <div className="row align-items-center">
              <div className="col-lg-8 reveal">
                <div className="status-badge">
                  <span className="dot"></span> INFRAESTRUCTURA v18.9.5 ONLINE
                </div>
                <span className="hero-subtitle">FULL STACK DEVELOPER & DEVOPS</span>
                <h1>Construyendo el futuro de la gestión operativa</h1>
                <p className="lead text-muted mb-5" style={{ maxWidth: '600px' }}>
                  Especialista en arquitecturas distribuidas de alta disponibilidad, 
                  automatización mediante IA y seguridad defensiva avanzada. 
                  Administrador del ecosistema privado Rambo-Raspi.
                </p>
                <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                  <a href="#projects" className="btn btn-primary btn-lg px-4 fw-bold shadow-neon">Ver Proyectos</a>
                  <a href="#about" className="btn btn-outline-light btn-lg px-4 fw-bold">Sobre Mí</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Skills & Technical Levels */}
        <section id="about" className="py-5 bg-darker">
          <div className="container px-4">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5 reveal">
                <h2 className="fw-bold mb-4 text-white">Sobre Mí</h2>
                <p className="lead text-secondary">
                  Mi nombre es José Luis Izquierdo Echuaca. Mi enfoque se centra en la 
                  <strong> convergencia entre IA, Seguridad y Hardware</strong>.
                </p>
                <p className="text-muted">
                  He transformado mi infraestructura personal en un laboratorio de alta tecnología 
                  donde desarrollo soluciones que optimizan procesos reales, desde la gestión de 
                  conductores hasta la monitorización espectral.
                </p>
              </div>
              
              <div className="col-lg-7">
                <div className="row g-4">
                  <div className="col-md-6 reveal" style={{ animationDelay: '0.2s' }}>
                    <div className="skill-item">
                      <h6 className="fw-bold text-white mb-3"><i className="bi bi-cpu text-primary me-2"></i>DevOps & Infra</h6>
                      <div className="skill-item-inner mb-3">
                        <div className="d-flex justify-content-between small mb-1">
                          <span>Docker / OMV / Linux</span>
                          <span className="text-primary">98%</span>
                        </div>
                        <div className="skill-bar-container"><div className="skill-bar-fill" style={{ width: '98%' }}></div></div>
                      </div>
                      <div className="skill-item-inner">
                        <div className="d-flex justify-content-between small mb-1">
                          <span>Hardening / Seguridad</span>
                          <span className="text-primary">92%</span>
                        </div>
                        <div className="skill-bar-container"><div className="skill-bar-fill" style={{ width: '92%' }}></div></div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 reveal" style={{ animationDelay: '0.4s' }}>
                    <div className="skill-item">
                      <h6 className="fw-bold text-white mb-3"><i className="bi bi-code-slash text-primary me-2"></i>Software & IA</h6>
                      <div className="skill-item-inner mb-3">
                        <div className="d-flex justify-content-between small mb-1">
                          <span>Python / Gemini API</span>
                          <span className="text-primary">90%</span>
                        </div>
                        <div className="skill-bar-container"><div className="skill-bar-fill" style={{ width: '90%' }}></div></div>
                      </div>
                      <div className="skill-item-inner">
                        <div className="d-flex justify-content-between small mb-1">
                          <span>React / JS / Tailwind</span>
                          <span className="text-primary">75%</span>
                        </div>
                        <div className="skill-bar-container"><div className="skill-bar-fill" style={{ width: '75%' }}></div></div>
                      </div>
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
            <div className="text-center mb-5 reveal">
              <h2 className="fw-bold text-white mb-3">Portafolio de Ingeniería</h2>
              <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
                Una selección de sistemas desplegados en mi infraestructura privada. 
                Cada proyecto representa un reto superado en automatización, seguridad o visualización de datos.
              </p>
            </div>
            <div className="row g-4">
              {projects.map((project, index) => (
                <div key={index} className="col-lg-4 col-md-6 reveal" style={{ animationDelay: `${(index * 0.1) + 0.5}s` }}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    image={project.image}
                    overlayText={project.overlayText}
                    objectFit={project.objectFit}
                  />
                </div>
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