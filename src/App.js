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
      image: esp32Img
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
      title: 'Gestión de Turnos (TurnoControlPro)',
      description: 'Sistema completo de control de turnos y movimientos de conductores. Es el único proyecto accesible públicamente en internet, desplegado en https://www.turnocontrolpro.com',
      link: 'https://www.turnocontrolpro.com',
      image: turnoIcon
    }
  ];

  return (
    <div className="App">
      <Navbar />
      <Header />
      
      <main>
        {/* Section: About Me */}
        <section id="about" className="py-5 bg-light">
          <div className="container px-4">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="fw-bold mb-4">Sobre Mí</h2>
                <p className="lead text-muted">
                  Soy José Luis Izquierdo Echuaca, técnico y desarrollador autodidacta con pasión por la tecnología. 
                  Administro mi propia infraestructura de servidores formada por dos Raspberry Pi: 
                  <strong>Raspi</strong> (servidor de aplicaciones con Docker, Plex y Home Assistant) y 
                  <strong>Rambo</strong> (NAS con copias de seguridad Borg y almacenamiento compartido). 
                  Ambos servidores están protegidos y conectados bajo una VPN WireGuard, 
                  permitiéndome acceder a todos mis servicios de forma segura desde cualquier lugar.
                </p>
                <div className="mt-4">
                  <span className="badge bg-primary m-1 p-2">Python</span>
                  <span className="badge bg-secondary m-1 p-2">Docker</span>
                  <span className="badge bg-success m-1 p-2">Linux</span>
                  <span className="badge bg-info m-1 p-2">React</span>
                  <span className="badge bg-warning text-dark m-1 p-2">Arduino</span>
                  <span className="badge bg-danger m-1 p-2">Raspberry Pi</span>
                  <span className="badge bg-dark m-1 p-2">WireGuard</span>
                  <span className="badge bg-primary m-1 p-2">Bash</span>
                  <span className="badge bg-dark m-1 p-2">Impresión 3D</span>
                  <span className="badge bg-secondary m-1 p-2">Diseño 3D</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Projects */}
        <section id="projects" className="py-5">
          <div className="container px-4">
            <h2 className="fw-bold text-center mb-3">Mis Proyectos</h2>
            <p className="text-center text-muted mb-5">Todos mis proyectos corren en mis servidores privados (Raspi y Rambo) y son accesibles a través de mi VPN WireGuard. Solo TurnoControlPro está disponible públicamente en internet.</p>
            <div className="row g-4">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  image={project.image}
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