import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import './App.css';

import homeAssistantImg from './assets/containers/home_assistant.png';
import plexImg from './assets/containers/plex.png';
import nextcloudImg from './assets/containers/nextcloud.png';
import ramboDashImg from './assets/containers/rambo_dashboard.png';
import raspiDashImg from './assets/containers/raspi_dashboard.png';
import specraImg from './assets/containers/specra_trace.png';
import turnoIcon from './assets/containers/turno_control_icon.png';
import nextcloudLogo from './assets/containers/nextcloud_logo.png';
import nextcloudHubImg from './assets/containers/nextcloud_hub.png';
import esp32Img from './assets/containers/esp32.png';
import turnosProIcon from './assets/containers/staria_escoba_icon.png';
import gastiumIaImg from './assets/containers/gastium_ia_v1250.png'; // Evitar caché

function App() {
  const projects = [
    {
      title: 'Sistema de Domótica (Home Assistant)',
      description: 'Centralización de toda la inteligencia del hogar: control de iluminación, sensores de movimiento, temperatura, riego automático y gestión de escenas. Ejecutándose en un contenedor Docker sobre Raspi.',
      link: '#',
      image: homeAssistantImg
    },
    {
      title: 'Centro Multimedia (Plex)',
      description: 'Servidor de contenido multimedia personal con acceso a películas, series y música organizada. Gestionado mediante Docker y balanceado para un streaming fluido dentro de la red privada.',
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
      title: 'Nube Privada (Nextcloud)',
      description: 'Almacenamiento y sincronización de archivos, contactos y calendarios de forma totalmente privada, eliminando la dependencia de servicios externos. Desplegado en Rambo.',
      link: '#',
      image: nextcloudHubImg
    },
    {
      title: 'Proyectos IoT & Impresión 3D',
      description: 'Automatización con Arduino y Raspberry Pi, incluyendo lectores RFID y monitorización. Especialista en fabricación digital con tres impresoras 3D: Ender 3S1 Plus, Ender 3S1 Pro y Ender HI con sistema de filamento CFS.',
      link: '#',
      image: esp32Img,
      overlayText: 'ESP32'
    },
    {
      title: 'Dashboard de Sistema (Rambo)',
      description: 'Estado en tiempo real de Rambo (NAS): monitorización de CPU, RAM, temperatura de discos, estado de Borg Backup y gestión de contenedores Docker activos.',
      link: '#',
      image: ramboDashImg
    },
    {
      title: 'Dashboard de Sistema (Raspi)',
      description: 'Panel de control de Raspi (App Server): métricas de rendimiento y salud de la infraestructura de aplicaciones, incluyendo Portainer, Plex y Home Assistant.',
      link: '#',
      image: raspiDashImg
    },
    {
      title: 'TurnosPro (Escoba Drivers)',
      description: 'Aplicación web para la gestión de turnos y equipos de trabajo. Incluye creación de organizaciones, solicitud de días libres, cambios de horario y registro de auditoría. Alojado localmente y accesible mediante VPN WireGuard.',
      link: '#',
      image: turnosProIcon
    },
    {
      title: 'Gestión de Turnos',
      description: 'Sistema completo de control de turnos y movimientos de conductores. Es accesible públicamente en internet, desplegado en https://www.turnocontrolpro.com',
      link: 'https://www.turnocontrolpro.com',
      image: turnoIcon
    },
    {
      title: 'Gastium IA (v12.50)',
      description: 'Asistente de Inteligencia Artificial (Gemini) integrado en el control de gastos. Automatiza la lectura de tickets (OCR), clasifica consumos y optimiza presupuestos.',
      link: 'https://Yoeph.pythonanywhere.com',
      image: gastiumIaImg,
      objectFit: 'contain'
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
                  Soy José Luis Izquierdo Echuaca, técnico y desarrollador autodidacta con pasión por la tecnología. 
                  Administro mi propia infraestructura de servidores formada por dos Raspberry Pi: 
                  <strong>Raspi</strong> y <strong>Rambo</strong>. 
                </p>
                <p className="text-muted">
                  Gestiono servicios críticos bajo contenedores Docker y mantengo una red privada segura mediante WireGuard. 
                  Mi experiencia abarca desde el desarrollo de software en Python hasta la fabricación digital y automatización física.
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
                        <span>Raspberry Pi / Linux</span>
                        <span className="fw-bold text-primary">Experto</span>
                      </div>
                      <div className="skill-bar-container"><div className="skill-bar-fill" style={{ width: '95%' }}></div></div>
                    </div>
                    <div className="skill-item">
                      <div className="d-flex justify-content-between">
                        <span>Docker / Portainer</span>
                        <span className="fw-bold text-primary">Avanzado</span>
                      </div>
                      <div className="skill-bar-container"><div className="skill-bar-fill" style={{ width: '85%' }}></div></div>
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
                        <span>WireGuard / Redes</span>
                        <span className="fw-bold text-primary">Intermedio</span>
                      </div>
                      <div className="skill-bar-container"><div className="skill-bar-fill" style={{ width: '70%' }}></div></div>
                    </div>
                  </div>
                  
                  <div className="col-md-6 reveal">
                    <h5 className="fw-bold mb-3 mt-2"><i className="bi bi-code-slash me-2"></i>Software & Desarrollo</h5>
                    <div className="skill-item">
                      <div className="d-flex justify-content-between">
                        <span>Python (Flask / Scripts)</span>
                        <span className="fw-bold text-primary">Avanzado</span>
                      </div>
                      <div className="skill-bar-container"><div className="skill-bar-fill" style={{ width: '85%' }}></div></div>
                    </div>
                    <div className="skill-item">
                      <div className="d-flex justify-content-between">
                        <span>Git / GitHub</span>
                        <span className="fw-bold text-primary">Intermedio</span>
                      </div>
                      <div className="skill-bar-container"><div className="skill-bar-fill" style={{ width: '75%' }}></div></div>
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
                        <span>Arduino / Electrónica</span>
                        <span className="fw-bold text-primary">Intermedio</span>
                      </div>
                      <div className="skill-bar-container"><div className="skill-bar-fill" style={{ width: '70%' }}></div></div>
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