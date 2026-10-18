import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
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
import certificateImg from './assets/containers/certificate.svg';
import DevopsTerminal from './components/DevopsTerminal';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [telemetry, setTelemetry] = useState({
    ping: 12,
    ramboCpu: 4.2,
    ramboTemp: 33.6,
    raspiCpu: 2.1,
    raspiTemp: 38.5
  });

  // Sincronización bidireccional con el Hash de la URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash) {
      handleHashChange();
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    window.location.hash = page;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry({
        ping: Math.floor(10 + Math.random() * 5),
        ramboCpu: +(3.8 + Math.random() * 1.5).toFixed(1),
        ramboTemp: +(33.2 + Math.random() * 0.8).toFixed(1),
        raspiCpu: +(1.9 + Math.random() * 1.2).toFixed(1),
        raspiTemp: +(38.1 + Math.random() * 0.7).toFixed(1)
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Expediente de Certificaciones Oficiales & Formación
  const certificacionesList = [
    {
      title: "Desarrollo Sostenible y Gestión Ambiental",
      description: "Certificación oficial SEAG16 sobre políticas de desarrollo sostenible, control del impacto ambiental y gestión de recursos.",
      link: "./certificados/desarrollo_sostenible_gestion_ambiental.pdf"
    },
    {
      title: "Big Data & Business Intelligence",
      description: "Especialización IFCT128PO en análisis masivo de datos, privacidad, técnicas de machine learning y toma de decisiones empresariales basadas en datos.",
      link: "./certificados/big_data.pdf"
    },
    {
      title: "Ciberseguridad para Usuarios",
      description: "Formación IFCT135PO en detección de amenazas, navegación segura, malware, phishing y protección básica de la identidad digital.",
      link: "./certificados/ciberseguridad_usuarios.pdf"
    },
    {
      title: "Protección de Equipos en la Red",
      description: "Certificación IFCT106PO enfocada en la configuración de firewalls, antivirus, copias de seguridad, redes inalámbricas seguras y hardening del sistema.",
      link: "./certificados/proteccion_equipos_red.pdf"
    },
    {
      title: "Reglamento Europeo de Protección de Datos (RGPD)",
      description: "Especialización FCOV011PO en cumplimiento del RGPD, derechos ARCO-POL, seguridad de la información y novedades en legislación de datos personales.",
      link: "./certificados/reglamento_europeo_proteccion_datos.pdf"
    },
    {
      title: "Seguridad de los Datos Personales",
      description: "Certificación ADGD345PO sobre principios del tratamiento de datos, medidas técnicas de seguridad y gestión del riesgo en la manipulación de información privada.",
      link: "./certificados/seguridad_datos_personales.pdf"
    },
    {
      title: "Inglés Profesional B1",
      description: "Acreditación de competencia comunicativa en inglés a nivel B1, capacitando para la redacción técnica y conversación profesional en entornos globales.",
      link: "./certificados/ingles_b1.pdf"
    },
    {
      title: "Instalación y Configuración de Antenas",
      description: "Formación técnica especializada cubriendo el montaje, orientación y mantenimiento de sistemas de recepción de señales terrestres y satélite.",
      link: [
        { text: "Diploma A", url: "./certificados/antenas_a.pdf" },
        { text: "Diploma B", url: "./certificados/antenas_b.pdf" }
      ]
    },
    {
      title: "Automatización y Autómatas Programables",
      description: "Estudios de especialización en programación de autómatas industriales, robótica, esquemas eléctricos y control de procesos automatizados.",
      link: [
        { text: "Diploma A", url: "./certificados/automatas_a.pdf" },
        { text: "Diploma B (Foto)", url: "./certificados/automatas_b.jpg" }
      ]
    }
  ];

  // Proyectos de Software & IA
  const softwareProjects = [
    {
      title: 'TurnoControlPro (Gestión Multi-Sector de Vehículos & Turnos con IA)',
      version: 'v7.0 Multi-Sector & IA',
      statusBadge: 'Multi-Sector Prod',
      description: 'Plataforma integral multi-sector para gestión operativa y control de flotas en movilidad: VTC, Taxis, Reparto de Última Milla, Transfers de Pasajeros, Campas de Vehículos, Alquiler (Rent a Car) y Talleres. Incorpora lectura de matrículas por visión artificial (Computer Vision), relevo con firma en pantalla y GPS, checklist de daños con fotografías en tiempo real, soporte multi-energía y Asistente IA 24/7.',
      link: 'https://www.turnocontrolpro.com',
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.bigcomsat.turnocontrolpro',
      webLink: 'https://www.turnocontrolpro.com',
      pwaGuide: true,
      badges: ['Google Play Store', 'PWA (iPhone/Mac/PC)', 'VTC · Taxi · Reparto · Campas · Rent', 'IA Gemini Vision', 'Firma GPS', 'Multi-Energía'],
      image: turnoControlImg
    },
    {
      title: 'Alexa + Gemini: Asistente IA',
      version: 'v4.2 Serverless',
      statusBadge: 'Skill Activa 24/7',
      description: 'Skill inteligente para Alexa conectada a la API de Google Gemini mediante una función serverless en AWS Lambda (Python SDK). Razonamiento avanzado por voz en lenguaje natural, síntesis conversacional interactiva y ejecución de comandos contextuales para la infraestructura domótica.',
      link: '#metodologia-ia',
      badges: ['AWS Lambda', 'Gemini SDK', 'Voice AI', 'Webhooks', 'Smart Home'],
      footerChip: { left: 'AWS eu-west-2 · Python 3.11 Runtime', right: 'Google Gemini Pro' },
      image: alexaImg
    },
    {
      title: 'Gastium IA: Control Financiero',
      version: 'v12.50 Fintech',
      statusBadge: 'Web App Online',
      description: 'Asistente de finanzas y control de gastos corporativos impulsado por Inteligencia Artificial. Procesamiento automático de facturas y tickets físicos mediante OCR y Gemini Flash, categorización dinámica de partidas contables, proyecciones predictivas y optimización presupuestaria.',
      link: 'https://Yoeph.pythonanywhere.com',
      webLink: 'https://Yoeph.pythonanywhere.com',
      badges: ['OCR Gemini Flash', 'Fintech', 'Categorización Dinámica', 'Python Flask', 'Cloud Hosted'],
      image: gastiumIaImg
    },
    {
      title: 'Escoba Drivers',
      version: 'v16.0 PWA',
      statusBadge: 'PWA Offline Ready',
      description: 'Aplicación web progresiva móvil (iOS/Android) para la asignación transparente y equitativa de turnos y relevos de vehículos. Incorpora el algoritmo de "Justicia Histórica" para balanceo automático de guardias, persistencia local IndexedDB y funcionamiento garantizado sin conexión.',
      link: '#',
      badges: ['PWA Offline', 'Algoritmo Justicia', 'IndexedDB', 'Mobile First', 'iOS / Android'],
      footerChip: { left: 'PWA Móvil · Algoritmo de Asignación', right: 'IndexedDB Offline' },
      image: stariaImg
    }
  ];

  // Proyectos de Domótica & 3D Maker
  const domoticaProjects = [
    {
      title: 'Domótica: Home Assistant Core & Gemini Vision',
      version: 'v2026.10 Core & IA',
      statusBadge: '350+ Automaciones',
      statusText: 'Clúster Domótico de Alta Disponibilidad',
      isFeatured: true,
      description: 'Ecosistema domótico centralizado y resiliente desplegado en Docker sobre Raspi (192.168.2.16). Integra visión artificial multimodal con Google Gemini Vision (Lite) para reconocimiento facial perimetral y guardián de descansillo con protocolo anti-coacción. Circuito VIP de bienvenida con geovalla (150m), puente híbrido de portal (MQTT local + Nube Ring) y cerradura Nuki Ultra con doble blindaje anticolisión de cerrojos. Coordinación autónoma de robots (Lula a bordes con batería >=90% y Tina fregado LiDAR; exclusión mutua y ciclo dinámico cada 4.5h), suite dual-channel gubernamental ES-Alert / Protección Civil (Canal 1 Companion App y Canal 2 Feed CAP a volumen 1.0 en Alexas Apache y Felix), suite universal de baterías con paridad total de carga/descarga y radar milimétrico Brava 24h.',
      link: '#',
      badges: ['350+ Automatizaciones', 'Gemini Vision Lite', 'Nuki Ultra VIP', 'Robots Lula & Tina', 'ES-Alert Dual', 'Radar Brava 24h'],
      image: homeAssistantImg
    },
    {
      title: 'Diseño & Fabricación Digital 3D (YoephLabs)',
      version: 'Hardware Lab & 3D Maker',
      statusBadge: 'Clúster 3D Operativo',
      description: 'Prototipado rápido, diseño y modelado de ingeniería en Tinkercad. Fabricación aditiva con clúster de tres impresoras 3D de alta precisión: Creality Ender 3 S1 Plus, Ender 3 S1 Pro y Ender HI con sistema de filamento multicolor CFS. Catálogo de modelos 3D y piezas de libre descarga disponibles en Printables (perfil @yoeph) y Creality Cloud (YoephLabs): soportes para servidores NAS y Raspberry Pi, bebederos automáticos, organizadores de taller y adaptadores técnicos funcionales.',
      link: 'https://www.printables.com/@yoeph/models',
      printablesLink: 'https://www.printables.com/@yoeph/models',
      crealityLink: 'https://www.crealitycloud.com/es/user/2772190518/profile',
      badges: ['Printables Maker (@yoeph)', 'Creality Cloud (YoephLabs)', 'Ender 3S1 Pro/Plus', 'Ender HI CFS', 'Tinkercad'],
      image: tinkercadImg
    },
    {
      title: 'K2-RFID IoT System',
      version: 'v2.1 Hardware',
      statusBadge: 'Firmware C++ Activo',
      description: 'Controlador de accesos embebido sobre microcontrolador ESP32 con lector RFID RC522. Autenticación criptográfica de tarjetas MIFARE con sectores protegidos, telemetría MQTT bidireccional en tiempo real con Home Assistant y respuesta en menos de 50ms ante aperturas autorizadas.',
      link: '#',
      badges: ['ESP32', 'RFID/MIFARE', 'MQTT Telemetría', 'C++ / FreeRTOS', 'Cifrado Bloques'],
      footerChip: { left: 'ESP32 Node · Broker Mosquitto MQTT', right: 'MIFARE 13.56 MHz' },
      image: esp32Img
    },
    {
      title: 'Spectra Forensics (Análisis Espectral)',
      version: 'v3.0 Data Viz',
      statusBadge: 'Motor Analítico',
      description: 'Suite de análisis forense digital y visualización espectral para procesamiento avanzado de señales. Generación de mapas espectrográficos de alta densidad, identificación de armónicos y detección predictiva de anomalías y ruido en comunicaciones inalámbricas.',
      link: '#',
      badges: ['Signal Processing', 'Data Viz', 'Forensics', 'NumPy / SciPy', 'Python'],
      footerChip: { left: 'Algoritmo FFT · Reconocimiento de Patrones', right: 'Análisis Espectral' },
      image: specraImg
    },
    {
      title: 'Centro Multimedia Plex',
      version: 'v1.40 4K HW',
      statusBadge: 'Streaming 4K HW',
      description: 'Servidor multimedia de alta fidelidad contenerizado en Docker con aceleración gráfica por hardware. Transcodificación en tiempo real de contenidos 4K HDR para streaming fluido dentro de la red privada local y hacia dispositivos remotos autorizados.',
      link: '#',
      badges: ['4K Hardware Transcoding', 'Docker ARM64', 'Media Server', 'DLNA / DirectPlay'],
      footerChip: { left: 'Docker Raspi · Transcodificación GPU', right: 'Plex Pass 4K' },
      image: plexImg
    }
  ];

  // Proyectos de Infraestructura & DevOps
  const infraProjects = [
    {
      title: 'Rambo Infrastructure Engine',
      version: 'v18.9.5 Core',
      statusBadge: 'Synergy Protocol',
      description: 'Motor de infraestructura unificada con arquitectura visual "Neon-Motion". Supervisa el clúster distribuido mediante el protocolo Synergy con agente IA Auto-Healer para diagnóstico preventivo, mitigación automática de incidencias y failover sin intervención manual.',
      link: '#',
      badges: ['Synergy Protocol', 'Auto-Healer IA', 'Docker Clúster', 'Observabilidad', 'Alertas'],
      footerChip: { left: 'Rambo NAS 192.168.2.35 · Docker Engine', right: 'Auto-Healer IA' },
      image: ramboEngineImg
    },
    {
      title: 'Servidor de Aplicaciones (Raspi)',
      version: 'v18.9.5 Node',
      statusBadge: 'Nodo ARM64 24/7',
      description: 'Servidor de aplicaciones en nodo dedicado Raspberry Pi 64-bit (192.168.2.16). Aloja los servicios críticos del hogar y domótica (Home Assistant, Plex, túnel VPN WireGuard) bajo estricto control de temperatura y auditoría continua de recursos.',
      link: '#',
      badges: ['ARM64 Host', 'Docker Clúster', 'Zero-Downtime', 'MicroSD 128GB + SSD', 'WireGuard'],
      footerChip: { left: 'Raspi App Node 192.168.2.16 · OMV 7', right: 'Kernel 64-bit' },
      image: raspiDashImg
    },
    {
      title: 'Infraestructura Segura (Rambo NAS)',
      version: 'v18.9.5 Storage',
      statusBadge: 'Borg NVMe 1TB',
      description: 'Servidor de almacenamiento central y repositorio de seguridad (192.168.2.35). Bastionado avanzado con políticas Lynis nivel 80+, cortafuegos y logs centralizados Fail2ban, integridad AIDE y copias de seguridad automáticas BorgBackup con deduplicación y cifrado a disco NVMe de 1TB.',
      link: '#',
      badges: ['BorgBackup NVMe', 'Fail2ban Central', 'Hardening Lynis 80+', 'OMV 7', 'AIDE'],
      footerChip: { left: 'NVMe USB 1TB · Repositorio Cifrado Borg', right: 'Lynis 80+' },
      image: ramboDashImg
    },
    {
      title: 'Nube Privada Nextcloud Hub',
      version: 'v28.0 Hub Privado',
      statusBadge: 'Nube Privada',
      description: 'Entorno de almacenamiento en nube totalmente soberano y privado. Sincronización continua de archivos entre dispositivos móviles, portátiles y servidores sin recurrir a nubes de terceros, con cifrado de datos y copias redundantes automatizadas.',
      link: '#',
      badges: ['Nextcloud Hub', 'Self-Hosted', 'Cifrado en Reposo', 'Sync Multiplataforma'],
      footerChip: { left: 'Almacenamiento Soberano · Sin Terceros', right: 'Nextcloud Hub v28' },
      image: nextcloudLogo
    }
  ];

  return (
    <div className="App d-flex flex-column min-vh-100">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      <main style={{ paddingTop: '65px' }} className="flex-grow-1">
        {/* =========================================================================
            VISTA 1: INICIO (ZERO-SCROLL · 100% ENCAJADO EN PANTALLA)
        ========================================================================== */}
        {currentPage === 'home' && (
          <div className="home-no-scroll">
            <Header onNavigate={navigateTo} />

            {/* Barra de Telemetría Clúster Compacta */}
            <div className="telemetry-bar-home py-2 px-3 rounded mx-auto mb-3" style={{ maxWidth: '880px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="d-flex flex-wrap justify-content-between align-items-center text-secondary small" style={{ fontSize: '0.8rem' }}>
                <div className="d-flex align-items-center gap-2">
                  <span className="telemetry-dot"></span>
                  <span className="text-white fw-bold">Clúster Privado Raspi & Rambo:</span>
                  <span className="badge badge-soft-success">OPERATIVO 100%</span>
                </div>
                <div className="d-flex flex-wrap gap-3">
                  <span><i className="bi bi-hdd-network me-1 text-primary"></i> Rambo CPU: <b className="text-white">{telemetry.ramboCpu}%</b> ({telemetry.ramboTemp}°C)</span>
                  <span><i className="bi bi-cpu me-1 text-info"></i> Raspi CPU: <b className="text-white">{telemetry.raspiCpu}%</b> ({telemetry.raspiTemp}°C)</span>
                  <span><i className="bi bi-reception-4 me-1 text-success"></i> Latencia VPN: <b className="text-white">{telemetry.ping} ms</b></span>
                </div>
              </div>
            </div>

            {/* Rejilla de 3 Portales Principales (Compactos, sin scroll) */}
            <div className="container px-3 flex-grow-1 d-flex flex-column justify-content-center">
              <div className="row g-3 justify-content-center mb-2">
                {/* Portal 1: Software & IA */}
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 glass-card p-3 border-0 d-flex flex-column hover-lift" style={{ borderRadius: '14px' }}>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <div className="category-icon-wrapper p-2" style={{ background: 'rgba(0, 210, 255, 0.1)', width: '38px', height: '38px' }}>
                        <i className="bi bi-code-slash text-primary fs-5"></i>
                      </div>
                      <div>
                        <h6 className="text-white fw-bold m-0" style={{ fontSize: '0.98rem' }}>Software, IA & Cloud</h6>
                        <span className="badge badge-soft-primary small" style={{ fontSize: '0.65rem' }}>4 Proyectos</span>
                      </div>
                    </div>
                    <p className="text-white-50 small mb-2 flex-grow-1" style={{ fontSize: '0.82rem', lineHeight: '1.45' }}>
                      TurnoControlPro (Gestión multi-sector de flotas con IA), Asistente Alexa Gemini, Gastium IA y Escoba Drivers PWA.
                    </p>
                    <button
                      onClick={() => navigateTo('software-ia')}
                      className="btn btn-primary btn-sm w-100 fw-bold shadow-sm"
                      style={{ borderRadius: '8px', fontSize: '0.8rem' }}
                    >
                      Entrar a Software & IA <i className="bi bi-arrow-right ms-1"></i>
                    </button>
                  </div>
                </div>

                {/* Portal 2: Domótica & 3D Maker */}
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 glass-card p-3 border-0 d-flex flex-column hover-lift" style={{ borderRadius: '14px' }}>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <div className="category-icon-wrapper p-2" style={{ background: 'rgba(0, 255, 136, 0.1)', width: '38px', height: '38px' }}>
                        <i className="bi bi-cpu text-info fs-5"></i>
                      </div>
                      <div>
                        <h6 className="text-white fw-bold m-0" style={{ fontSize: '0.98rem' }}>Domótica & 3D Maker</h6>
                        <span className="badge badge-soft-info small" style={{ fontSize: '0.65rem' }}>5 Proyectos</span>
                      </div>
                    </div>
                    <p className="text-white-50 small mb-2 flex-grow-1" style={{ fontSize: '0.82rem', lineHeight: '1.45' }}>
                      Home Assistant Core (350+ automatizaciones, Gemini Vision, Lula & Tina) y Laboratorio 3D YoephLabs (Printables y Creality Cloud).
                    </p>
                    <button
                      onClick={() => navigateTo('domotica-iot')}
                      className="btn btn-outline-info btn-sm w-100 fw-bold"
                      style={{ borderRadius: '8px', fontSize: '0.8rem' }}
                    >
                      Entrar a Domótica & 3D <i className="bi bi-arrow-right ms-1"></i>
                    </button>
                  </div>
                </div>

                {/* Portal 3: Infraestructura & DevOps */}
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 glass-card p-3 border-0 d-flex flex-column hover-lift" style={{ borderRadius: '14px' }}>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <div className="category-icon-wrapper p-2" style={{ background: 'rgba(217, 70, 239, 0.1)', width: '38px', height: '38px' }}>
                        <i className="bi bi-shield-lock text-success fs-5"></i>
                      </div>
                      <div>
                        <h6 className="text-white fw-bold m-0" style={{ fontSize: '0.98rem' }}>Infraestructura & DevOps</h6>
                        <span className="badge badge-soft-success small" style={{ fontSize: '0.65rem' }}>4 Proyectos</span>
                      </div>
                    </div>
                    <p className="text-white-50 small mb-2 flex-grow-1" style={{ fontSize: '0.82rem', lineHeight: '1.45' }}>
                      Clúster ARM64: Rambo NAS (OMV 7, BorgBackup NVMe 1TB, Lynis 80+), nodo Raspi con contenedores Docker críticos y Nextcloud Hub.
                    </p>
                    <button
                      onClick={() => navigateTo('infraestructura')}
                      className="btn btn-outline-success btn-sm w-100 fw-bold"
                      style={{ borderRadius: '8px', fontSize: '0.8rem' }}
                    >
                      Entrar a Infraestructura <i className="bi bi-arrow-right ms-1"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Pie de pantalla fijo para Inicio (Zero Scroll) */}
            <div className="home-screen-footer text-center py-2 border-top border-secondary border-opacity-10 text-secondary" style={{ fontSize: '0.74rem' }}>
              <span>Biguell Hub · Soberanía Tecnológica en Barcelona · Clúster Privado Raspi & Rambo · Usa el <strong>Menú Desplegable</strong> para navegar por las páginas</span>
            </div>
          </div>
        )}

        {/* =========================================================================
            VISTA 2: PÁGINA "SOFTWARE, IA & PLATAFORMAS CLOUD" (Grid 2x2 Equilibrado)
        ========================================================================== */}
        {currentPage === 'software-ia' && (
          <section className="py-5 bg-darker min-vh-100">
            <div className="container px-4">
              <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 pb-3 border-bottom border-secondary border-opacity-15">
                <div>
                  <button onClick={() => navigateTo('home')} className="btn btn-outline-secondary btn-sm mb-2 text-white-50">
                    <i className="bi bi-arrow-left me-1"></i> Volver al Inicio
                  </button>
                  <h2 className="fw-bold text-white m-0 d-flex align-items-center gap-2">
                    <i className="bi bi-code-slash text-primary"></i> Software, IA & Plataformas Cloud
                  </h2>
                  <span className="text-secondary small">Soluciones operativas multi-sector, PWAs y microservicios serverless impulsados por Inteligencia Artificial.</span>
                </div>
                <div className="d-flex gap-2 mt-3 mt-md-0">
                  <button onClick={() => navigateTo('domotica-iot')} className="btn btn-outline-info btn-sm">
                    Ir a Domótica & 3D <i className="bi bi-arrow-right ms-1"></i>
                  </button>
                </div>
              </div>

              <div className="row g-4">
                {softwareProjects.map((project, index) => (
                  <div key={index} className="col-lg-6">
                    <ProjectCard
                      title={project.title}
                      version={project.version}
                      description={project.description}
                      link={project.link}
                      playStoreLink={project.playStoreLink}
                      webLink={project.webLink}
                      pwaGuide={project.pwaGuide}
                      badges={project.badges}
                      image={project.image}
                      statusBadge={project.statusBadge}
                      footerChip={project.footerChip}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* =========================================================================
            VISTA 3: PÁGINA "DOMÓTICA AVANZADA, IOT & 3D MAKER"
        ========================================================================== */}
        {currentPage === 'domotica-iot' && (
          <section className="py-5 bg-darker min-vh-100">
            <div className="container px-4">
              <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 pb-3 border-bottom border-secondary border-opacity-15">
                <div>
                  <button onClick={() => navigateTo('home')} className="btn btn-outline-secondary btn-sm mb-2 text-white-50">
                    <i className="bi bi-arrow-left me-1"></i> Volver al Inicio
                  </button>
                  <h2 className="fw-bold text-white m-0 d-flex align-items-center gap-2">
                    <i className="bi bi-cpu text-info"></i> Domótica Avanzada, IoT & Fabricación 3D
                  </h2>
                  <span className="text-secondary small">Ecosistema inteligente contenerizado con visión multimodal Gemini, sensores IoT y laboratorio 3D YoephLabs.</span>
                </div>
                <div className="d-flex gap-2 mt-3 mt-md-0">
                  <button onClick={() => navigateTo('infraestructura')} className="btn btn-outline-success btn-sm">
                    Ir a Infraestructura <i className="bi bi-arrow-right ms-1"></i>
                  </button>
                </div>
              </div>

              {/* Proyecto Estrella: Home Assistant (Spotlight Card Full-Width) */}
              <div className="row mb-4">
                <div className="col-12">
                  <ProjectCard
                    title={domoticaProjects[0].title}
                    version={domoticaProjects[0].version}
                    description={domoticaProjects[0].description}
                    link={domoticaProjects[0].link}
                    badges={domoticaProjects[0].badges}
                    image={domoticaProjects[0].image}
                    isFeatured={true}
                    statusBadge={domoticaProjects[0].statusBadge}
                    statusText={domoticaProjects[0].statusText}
                  />
                </div>
              </div>

              {/* Rejilla 2x2 Equilibrada para los otros 4 proyectos de la categoría */}
              <div className="row g-4">
                {domoticaProjects.slice(1).map((project, index) => (
                  <div key={index} className="col-lg-6">
                    <ProjectCard
                      title={project.title}
                      version={project.version}
                      description={project.description}
                      link={project.link}
                      printablesLink={project.printablesLink}
                      crealityLink={project.crealityLink}
                      badges={project.badges}
                      image={project.image}
                      statusBadge={project.statusBadge}
                      footerChip={project.footerChip}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* =========================================================================
            VISTA 4: PÁGINA "INFRAESTRUCTURA, DEVOPS & CIBERSEGURIDAD" (Grid 2x2)
        ========================================================================== */}
        {currentPage === 'infraestructura' && (
          <section className="py-5 bg-darker min-vh-100">
            <div className="container px-4">
              <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 pb-3 border-bottom border-secondary border-opacity-15">
                <div>
                  <button onClick={() => navigateTo('home')} className="btn btn-outline-secondary btn-sm mb-2 text-white-50">
                    <i className="bi bi-arrow-left me-1"></i> Volver al Inicio
                  </button>
                  <h2 className="fw-bold text-white m-0 d-flex align-items-center gap-2">
                    <i className="bi bi-shield-lock text-success"></i> Infraestructura, DevOps & Ciberseguridad
                  </h2>
                  <span className="text-secondary small">Arquitectura distribuida de servidores NAS, clúster Docker de alta disponibilidad y copias Borg deduplicadas.</span>
                </div>
                <div className="d-flex gap-2 mt-3 mt-md-0">
                  <button onClick={() => navigateTo('software-ia')} className="btn btn-outline-primary btn-sm">
                    Ir a Software & IA <i className="bi bi-arrow-right ms-1"></i>
                  </button>
                </div>
              </div>

              <div className="row g-4">
                {infraProjects.map((project, index) => (
                  <div key={index} className="col-lg-6">
                    <ProjectCard
                      title={project.title}
                      version={project.version}
                      description={project.description}
                      link={project.link}
                      badges={project.badges}
                      image={project.image}
                      statusBadge={project.statusBadge}
                      footerChip={project.footerChip}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* =========================================================================
            VISTA: PÁGINA "CERTIFICACIONES & FORMACIÓN" (Títulos y Acreditaciones)
        ========================================================================== */}
        {currentPage === 'certificaciones' && (
          <section className="py-5 bg-darker min-vh-100">
            <div className="container px-4">
              <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 pb-3 border-bottom border-secondary border-opacity-15">
                <div>
                  <button onClick={() => navigateTo('home')} className="btn btn-outline-secondary btn-sm mb-2 text-white-50">
                    <i className="bi bi-arrow-left me-1"></i> Volver al Inicio
                  </button>
                  <h2 className="fw-bold text-white m-0 d-flex align-items-center gap-2">
                    <i className="bi bi-award text-primary"></i> Certificaciones & Formación
                  </h2>
                  <span className="text-secondary small">
                    Expediente oficial de cualificaciones profesionales, especializaciones técnicas y títulos acreditados.
                  </span>
                </div>
                <div className="mt-3 mt-md-0">
                  <span className="badge badge-soft-success px-3 py-2 rounded-pill small">
                    <i className="bi bi-shield-check me-1"></i> 9 Certificaciones Verificadas
                  </span>
                </div>
              </div>

              <div className="row g-4 mb-5">
                {certificacionesList.map((cert, index) => (
                  <div key={index} className="col-lg-4 col-md-6">
                    <ProjectCard
                      title={cert.title}
                      description={cert.description}
                      link={cert.link}
                      linkText={Array.isArray(cert.link) ? undefined : "VER DIPLOMA OFICIAL (PDF)"}
                      bannerImage={certificateImg}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* =========================================================================
            VISTA 5: PÁGINA "METODOLOGÍA & GOBERNANZA IA" (Protocolo de 4 Pasos)
        ========================================================================== */}
        {currentPage === 'metodologia-ia' && (
          <section className="py-5 bg-darker min-vh-100">
            <div className="container px-4">
              <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 pb-3 border-bottom border-secondary border-opacity-15">
                <div>
                  <button onClick={() => navigateTo('home')} className="btn btn-outline-secondary btn-sm mb-2 text-white-50">
                    <i className="bi bi-arrow-left me-1"></i> Volver al Inicio
                  </button>
                  <h2 className="fw-bold text-white m-0 d-flex align-items-center gap-2">
                    <i className="bi bi-book text-warning"></i> Metodología & Arquitectura Operativa IA
                  </h2>
                  <span className="text-secondary small">Gobernanza y orden de lectura secuencial obligatorio para asimilar el ecosistema sin errores.</span>
                </div>
              </div>

              <div className="row g-4 mb-4">
                <div className="col-lg-3 col-md-6">
                  <div className="glass-card p-4 rounded h-100 border border-primary border-opacity-20 d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <span className="badge bg-primary text-white rounded-circle p-2 me-3 fw-bold" style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</span>
                      <h6 className="fw-bold text-white m-0">El Mapa</h6>
                    </div>
                    <h6 className="text-primary small fw-bold mb-2">00_INDICE_GENERAL_Y_GUIA_DE_BUSQUEDA.md</h6>
                    <p className="text-white-50 small mb-0" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                      <strong>¿Por qué primero?</strong> Es el equivalente a mirar el mapa antes de entrar al bosque. Aquí se entiende la topología física, dónde están las IPs de Raspi y Rambo, y qué contiene cada archivo. Sitúa físicamente en el proyecto.
                    </p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="glass-card p-4 rounded h-100 border border-info border-opacity-20 d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <span className="badge bg-info text-dark rounded-circle p-2 me-3 fw-bold" style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</span>
                      <h6 className="fw-bold text-white m-0">El Funcionamiento</h6>
                    </div>
                    <h6 className="text-info small fw-bold mb-2">RESUMEN_PROYECTO_Y_ORGANIZACION.md</h6>
                    <p className="text-white-50 small mb-0" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                      <strong>¿Por qué segundo?</strong> Una vez localizada la estructura, se debe conocer qué hace la casa. Detalla la rutina de los robots, Telegram Botsmart, escudo de tormentas, ES-Alert y volúmenes para asimilar el alma y la lógica viva del sistema.
                    </p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="glass-card p-4 rounded h-100 border border-warning border-opacity-20 d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <span className="badge bg-warning text-dark rounded-circle p-2 me-3 fw-bold" style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</span>
                      <h6 className="fw-bold text-white m-0">Las Reglas Sagradas</h6>
                    </div>
                    <h6 className="text-warning small fw-bold mb-2">AGENTS.md</h6>
                    <p className="text-white-50 small mb-0" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                      <strong>¿Por qué tercero?</strong> La biblia operativa. Contiene todas las reglas consolidadas: exclusión mutua estricta de robots Lula/Tina, volúmenes intocables en Alexas (0.8 día / 0.4 noche), calibración de presencia y protección ante caídas.
                    </p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="glass-card p-4 rounded h-100 border border-danger border-opacity-20 d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <span className="badge bg-danger text-white rounded-circle p-2 me-3 fw-bold" style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>4</span>
                      <h6 className="fw-bold text-white m-0">El Protocolo Forense</h6>
                    </div>
                    <h6 className="text-danger small fw-bold mb-2">PROTOCOLO_OBLIGATORIO_COMPOSICION_DE_LUGAR.md</h6>
                    <p className="text-white-50 small mb-0" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                      <strong>¿Por qué cuarto?</strong> El método científico antes de modificar una sola línea: búsqueda forense en YAMLs, análisis de impacto colateral, cero automatizaciones duplicadas y validación previa estricta con check_config.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 glass-card rounded text-center border border-secondary border-opacity-15">
                <span className="text-secondary small">
                  <i className="bi bi-shield-check text-success me-2"></i>
                  Todos los archivos de gobernanza se encuentran archivados y sincronizados en <code className="text-primary">C:\Users\jluis\Nextcloud\proyectos\potafolios</code> y en el clúster Rambo NAS para persistencia integral.
                </span>
              </div>
            </div>
          </section>
        )}

        {/* =========================================================================
            VISTA 6: PÁGINA "DEVOPS SANDBOX" (Terminal Interactiva)
        ========================================================================== */}
        {currentPage === 'terminal' && (
          <section className="py-5 bg-black min-vh-100">
            <div className="container px-4">
              <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 pb-3 border-bottom border-secondary border-opacity-15">
                <div>
                  <button onClick={() => navigateTo('home')} className="btn btn-outline-secondary btn-sm mb-2 text-white-50">
                    <i className="bi bi-arrow-left me-1"></i> Volver al Inicio
                  </button>
                  <h2 className="fw-bold text-white m-0 d-flex align-items-center gap-2">
                    <i className="bi bi-terminal text-info"></i> Consola DevOps Interactiva (Frontend Sandbox)
                  </h2>
                  <span className="text-secondary small">Explora el clúster local a través de este entorno simulado y aislado en el cliente.</span>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-9">
                  <DevopsTerminal />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =========================================================================
            VISTA 7: PÁGINA "CONTACTO & PERFIL PROFESIONAL" (AQUÍ ESTÁ EL NOMBRE)
        ========================================================================== */}
        {currentPage === 'contact' && (
          <section className="py-5 bg-darker min-vh-100">
            <div className="container px-4">
              <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 pb-3 border-bottom border-secondary border-opacity-15">
                <div>
                  <button onClick={() => navigateTo('home')} className="btn btn-outline-secondary btn-sm mb-2 text-white-50">
                    <i className="bi bi-arrow-left me-1"></i> Volver al Inicio
                  </button>
                  <h2 className="fw-bold text-white m-0 d-flex align-items-center gap-2">
                    <i className="bi bi-person-badge text-primary"></i> Perfil Profesional & Contacto
                  </h2>
                  <span className="text-secondary small">Conoce al autor, su trayectoria técnica, competencias de ingeniería y disponibilidad para proyectos.</span>
                </div>
              </div>

              {/* Sección: Sobre Mí & Competencias Técnicas (Ubicado donde Contacto) */}
              <div className="row g-5 align-items-center mb-5">
                <div className="col-lg-5">
                  <span className="badge badge-soft-primary px-3 py-1 rounded-pill mb-3 text-uppercase fw-bold" style={{ fontSize: '0.75rem' }}>
                    Autor & Creador
                  </span>
                  <h2 className="fw-bold mb-3 text-white">José Luis Izquierdo Echuaca</h2>
                  <h6 className="text-primary fw-bold mb-3 small text-uppercase letter-spacing-1">
                    Full-Stack Engineer · DevOps Architect · Autonomous AI & Maker
                  </h6>
                  <p className="lead text-white-50" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                    Desarrollador de software y técnico especialista en arquitecturas distribuidas, ciberseguridad, automatización residencial y computación perimetral.
                  </p>
                  <p className="text-secondary small" style={{ lineHeight: '1.8' }}>
                    Diseño, despliego y mantengo mi propia infraestructura soberana de servidores en clústeres Raspberry Pi (<strong>Raspi</strong> y <strong>Rambo</strong>), administrando entornos Docker en producción, VPNs WireGuard y monitorización proactiva con IA. Combino visión por computadora (Computer Vision) con Google Gemini para soluciones multi-sector como <strong>TurnoControlPro</strong> y prototipado físico aditivo 3D en <strong>YoephLabs</strong>.
                  </p>
                  <div className="mt-4">
                    <a href="mailto:info@bigcomsat.es" className="btn btn-primary px-4 fw-bold shadow-neon">
                      <i className="bi bi-envelope-fill me-2"></i>Contactar Directamente
                    </a>
                  </div>
                </div>

                <div className="col-lg-7">
                  <h4 className="fw-bold mb-4 text-white text-center text-lg-start">Competencias Técnicas</h4>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="glass-card p-4 rounded h-100">
                        <h6 className="fw-bold text-primary mb-3"><i className="bi bi-hdd-network me-2"></i>DevOps & Sistemas</h6>
                        
                        <div className="skill-item-inner mb-3">
                          <div className="d-flex justify-content-between small mb-1">
                            <span>Linux (Debian / RPi OS)</span>
                            <span className="fw-bold" style={{ color: '#00ff88', textShadow: '0 0 10px rgba(0, 255, 136, 0.4)' }}>Experto (95%)</span>
                          </div>
                          <div className="skill-bar-container">
                            <div className="skill-bar-fill" style={{ width: '95%', background: 'linear-gradient(90deg, #00ff88, #00d2ff)', boxShadow: '0 0 12px rgba(0, 255, 136, 0.45)' }}></div>
                          </div>
                        </div>

                        <div className="skill-item-inner mb-3">
                          <div className="d-flex justify-content-between small mb-1">
                            <span>Docker & Contenedores</span>
                            <span className="fw-bold" style={{ color: '#00d2ff', textShadow: '0 0 10px rgba(0, 210, 255, 0.4)' }}>Avanzado (90%)</span>
                          </div>
                          <div className="skill-bar-container">
                            <div className="skill-bar-fill" style={{ width: '90%', background: 'linear-gradient(90deg, #00d2ff, #0066ff)', boxShadow: '0 0 12px rgba(0, 210, 255, 0.45)' }}></div>
                          </div>
                        </div>

                        <div className="skill-item-inner mb-3">
                          <div className="d-flex justify-content-between small mb-1">
                            <span>WireGuard & Redes VPN</span>
                            <span className="fw-bold" style={{ color: '#ff9f43', textShadow: '0 0 10px rgba(255, 159, 67, 0.4)' }}>Avanzado (85%)</span>
                          </div>
                          <div className="skill-bar-container">
                            <div className="skill-bar-fill" style={{ width: '85%', background: 'linear-gradient(90deg, #ff9f43, #ff5252)', boxShadow: '0 0 12px rgba(255, 159, 67, 0.45)' }}></div>
                          </div>
                        </div>

                        <div className="skill-item-inner">
                          <div className="d-flex justify-content-between small mb-1">
                            <span>Seguridad & Hardening (Fail2ban/Borg)</span>
                            <span className="fw-bold" style={{ color: '#ff4d6d', textShadow: '0 0 10px rgba(255, 77, 109, 0.4)' }}>Avanzado (88%)</span>
                          </div>
                          <div className="skill-bar-container">
                            <div className="skill-bar-fill" style={{ width: '88%', background: 'linear-gradient(90deg, #ff4d6d, #f72585)', boxShadow: '0 0 12px rgba(255, 77, 109, 0.45)' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="glass-card p-4 rounded h-100">
                        <h6 className="fw-bold text-info mb-3"><i className="bi bi-code-square me-2"></i>Software, IA & IoT</h6>

                        <div className="skill-item-inner mb-3">
                          <div className="d-flex justify-content-between small mb-1">
                            <span>Python (Flask / Scripts / APIs)</span>
                            <span className="fw-bold" style={{ color: '#ffd166', textShadow: '0 0 10px rgba(255, 209, 102, 0.4)' }}>Avanzado (90%)</span>
                          </div>
                          <div className="skill-bar-container">
                            <div className="skill-bar-fill" style={{ width: '90%', background: 'linear-gradient(90deg, #ffd166, #ff9f43)', boxShadow: '0 0 12px rgba(255, 209, 102, 0.45)' }}></div>
                          </div>
                        </div>

                        <div className="skill-item-inner mb-3">
                          <div className="d-flex justify-content-between small mb-1">
                            <span>Inteligencia Artificial (Gemini SDK / Vision)</span>
                            <span className="fw-bold" style={{ color: '#d946ef', textShadow: '0 0 10px rgba(217, 70, 239, 0.4)' }}>Avanzado (88%)</span>
                          </div>
                          <div className="skill-bar-container">
                            <div className="skill-bar-fill" style={{ width: '88%', background: 'linear-gradient(90deg, #d946ef, #8b5cf6)', boxShadow: '0 0 12px rgba(217, 70, 239, 0.45)' }}></div>
                          </div>
                        </div>

                        <div className="skill-item-inner mb-3">
                          <div className="d-flex justify-content-between small mb-1">
                            <span>React / JavaScript / PWA</span>
                            <span className="fw-bold" style={{ color: '#00f2fe', textShadow: '0 0 10px rgba(0, 242, 254, 0.4)' }}>Avanzado (85%)</span>
                          </div>
                          <div className="skill-bar-container">
                            <div className="skill-bar-fill" style={{ width: '85%', background: 'linear-gradient(90deg, #00f2fe, #4facfe)', boxShadow: '0 0 12px rgba(0, 242, 254, 0.45)' }}></div>
                          </div>
                        </div>

                        <div className="skill-item-inner">
                          <div className="d-flex justify-content-between small mb-1">
                            <span>Fabricación 3D (Ender CFS / CAD)</span>
                            <span className="fw-bold" style={{ color: '#ffd700', textShadow: '0 0 10px rgba(255, 215, 0, 0.4)' }}>Experto (92%)</span>
                          </div>
                          <div className="skill-bar-container">
                            <div className="skill-bar-fill" style={{ width: '92%', background: 'linear-gradient(90deg, #ffd700, #ff8c00)', boxShadow: '0 0 12px rgba(255, 215, 0, 0.45)' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tarjetas de Servicios Técnicos */}
              <div className="row g-4 mb-5 justify-content-center">
                <div className="col-md-4">
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

                <div className="col-md-4">
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

                <div className="col-md-4">
                  <div className="card h-100 glass-card p-4 border-0">
                    <div className="category-icon-wrapper mb-3" style={{ background: 'rgba(217, 70, 239, 0.08)', borderColor: 'rgba(217, 70, 239, 0.2)' }}>
                      <i className="bi bi-cpu" style={{ color: '#d946ef' }}></i>
                    </div>
                    <h5 className="text-white fw-bold mb-2">IoT & Fabricación 3D</h5>
                    <p className="text-secondary small mb-0" style={{ lineHeight: '1.6', fontSize: '0.85rem' }}>
                      Prototipado inteligente con microcontroladores (ESP32), integración domótica profesional (Home Assistant) y modelado/impresión 3D de piezas físicas personalizadas (catálogo público en Printables y Creality Cloud).
                    </p>
                  </div>
                </div>
              </div>

              {/* Sección: Certificaciones Técnicas & Formación Especializada */}
              <div className="mb-5 pb-3" id="certificados">
                <div className="text-center mb-4">
                  <span className="badge badge-soft-primary px-3 py-1 rounded-pill mb-2 text-uppercase fw-bold" style={{ fontSize: '0.75rem' }}>
                    Acreditaciones & Aprendizaje Continuo
                  </span>
                  <h3 className="fw-bold text-white mb-2">Certificaciones & Formación Especializada</h3>
                  <p className="text-secondary small mx-auto mb-3" style={{ maxWidth: '680px' }}>
                    Especialización continua en arquitecturas distribuidas, ciberseguridad defensiva, modelos multimodales de IA, desarrollo full-stack y fabricación aditiva 3D.
                  </p>
                  <div>
                    <button
                      onClick={() => navigateTo('certificaciones')}
                      className="btn btn-outline-warning btn-sm px-3 fw-bold shadow-sm"
                      style={{ borderRadius: '8px' }}
                    >
                      <i className="bi bi-award-fill me-1"></i> Ver los 9 Diplomas Oficiales Verificados (PDF) <i className="bi bi-arrow-right ms-1"></i>
                    </button>
                  </div>
                </div>

                <div className="row g-4">
                  {/* Card 1: DevOps & Linux */}
                  <div className="col-lg-4 col-md-6">
                    <div className="cert-card p-4 h-100 d-flex flex-column justify-content-between">
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="cert-icon-wrapper" style={{ background: 'rgba(0, 255, 136, 0.1)', color: '#00ff88', border: '1px solid rgba(0, 255, 136, 0.25)' }}>
                            <i className="bi bi-hdd-network"></i>
                          </div>
                          <span className="cert-badge-status" style={{ background: 'rgba(0, 255, 136, 0.1)', color: '#00ff88', borderColor: 'rgba(0, 255, 136, 0.3)' }}>
                            <i className="bi bi-patch-check-fill me-1"></i>En Producción
                          </span>
                        </div>
                        <h6 className="fw-bold text-white mb-1">Arquitectura Linux & DevOps</h6>
                        <span className="text-primary small fw-semibold d-block mb-2">Debian Server · Docker ARM64 · OMV 7</span>
                        <p className="text-secondary small mb-0" style={{ fontSize: '0.82rem', lineHeight: '1.6' }}>
                          Especialización en clústeres bare-metal basados en Debian/Raspberry Pi OS, containerización de microservicios, volúmenes NFS persistentes y orquestación con Docker Compose.
                        </p>
                      </div>
                      <div className="pt-3 mt-3 border-top border-secondary border-opacity-15 d-flex justify-content-between align-items-center">
                        <span className="text-white-50 small" style={{ fontSize: '0.72rem' }}>Ámbito: Sistemas & Redes</span>
                        <span className="text-success small fw-bold" style={{ fontSize: '0.75rem' }}>Nivel Experto (95%)</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: IA & Vision */}
                  <div className="col-lg-4 col-md-6">
                    <div className="cert-card p-4 h-100 d-flex flex-column justify-content-between">
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="cert-icon-wrapper" style={{ background: 'rgba(217, 70, 239, 0.1)', color: '#d946ef', border: '1px solid rgba(217, 70, 239, 0.25)' }}>
                            <i className="bi bi-robot"></i>
                          </div>
                          <span className="cert-badge-status" style={{ background: 'rgba(217, 70, 239, 0.1)', color: '#d946ef', borderColor: 'rgba(217, 70, 239, 0.3)' }}>
                            <i className="bi bi-stars me-1"></i>IA Avanzada
                          </span>
                        </div>
                        <h6 className="fw-bold text-white mb-1">Google Gemini SDK & Computer Vision</h6>
                        <span className="text-info small fw-semibold d-block mb-2">Google Cloud AI · Vision Multimodal</span>
                        <p className="text-secondary small mb-0" style={{ fontSize: '0.82rem', lineHeight: '1.6' }}>
                          Implementación de modelos multimodales (Gemini 1.5/2.0 Flash & Pro), extracción OCR perimetral en tiempo real, arquitectura de prompts estructurados y visión artificial.
                        </p>
                      </div>
                      <div className="pt-3 mt-3 border-top border-secondary border-opacity-15 d-flex justify-content-between align-items-center">
                        <span className="text-white-50 small" style={{ fontSize: '0.72rem' }}>Ámbito: Inteligencia Artificial</span>
                        <span className="text-info small fw-bold" style={{ fontSize: '0.75rem' }}>Especialista (88%)</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Ciberseguridad */}
                  <div className="col-lg-4 col-md-6">
                    <div className="cert-card p-4 h-100 d-flex flex-column justify-content-between">
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="cert-icon-wrapper" style={{ background: 'rgba(255, 77, 109, 0.1)', color: '#ff4d6d', border: '1px solid rgba(255, 77, 109, 0.25)' }}>
                            <i className="bi bi-shield-lock-fill"></i>
                          </div>
                          <span className="cert-badge-status" style={{ background: 'rgba(255, 77, 109, 0.1)', color: '#ff4d6d', borderColor: 'rgba(255, 77, 109, 0.3)' }}>
                            <i className="bi bi-shield-check me-1"></i>Hardening 80+
                          </span>
                        </div>
                        <h6 className="fw-bold text-white mb-1">Ciberseguridad & Bastionado Linux</h6>
                        <span className="small fw-semibold d-block mb-2" style={{ color: '#ff758f' }}>Lynis Security · Fail2ban · Borg</span>
                        <p className="text-secondary small mb-0" style={{ fontSize: '0.82rem', lineHeight: '1.6' }}>
                          Bastionado de servidores siguiendo directrices CIS/Lynis (puntuación superior a 80), políticas PAM estrictas, control de intrusiones con Fail2ban y backups inmutables con BorgBackup.
                        </p>
                      </div>
                      <div className="pt-3 mt-3 border-top border-secondary border-opacity-15 d-flex justify-content-between align-items-center">
                        <span className="text-white-50 small" style={{ fontSize: '0.72rem' }}>Ámbito: Ciberseguridad</span>
                        <span className="text-danger small fw-bold" style={{ fontSize: '0.75rem' }}>Hardened (88%)</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Full Stack */}
                  <div className="col-lg-4 col-md-6">
                    <div className="cert-card p-4 h-100 d-flex flex-column justify-content-between">
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="cert-icon-wrapper" style={{ background: 'rgba(0, 210, 255, 0.1)', color: '#00d2ff', border: '1px solid rgba(0, 210, 255, 0.25)' }}>
                            <i className="bi bi-code-slash"></i>
                          </div>
                          <span className="cert-badge-status" style={{ background: 'rgba(0, 210, 255, 0.1)', color: '#00d2ff', borderColor: 'rgba(0, 210, 255, 0.3)' }}>
                            <i className="bi bi-check2-circle me-1"></i>Full-Stack
                          </span>
                        </div>
                        <h6 className="fw-bold text-white mb-1">Desarrollo Web & PWAs Multi-Plataforma</h6>
                        <span className="text-primary small fw-semibold d-block mb-2">React · Python / Flask · JavaScript</span>
                        <p className="text-secondary small mb-0" style={{ fontSize: '0.82rem', lineHeight: '1.6' }}>
                          Arquitectura y desarrollo de aplicaciones web progresivas (PWAs) de alto rendimiento, diseño responsivo sin dependencias redundantes, APIs REST y bases de datos relacionales.
                        </p>
                      </div>
                      <div className="pt-3 mt-3 border-top border-secondary border-opacity-15 d-flex justify-content-between align-items-center">
                        <span className="text-white-50 small" style={{ fontSize: '0.72rem' }}>Ámbito: Software Engineering</span>
                        <span className="text-primary small fw-bold" style={{ fontSize: '0.75rem' }}>Avanzado (90%)</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 5: Fabricación 3D */}
                  <div className="col-lg-4 col-md-6">
                    <div className="cert-card p-4 h-100 d-flex flex-column justify-content-between">
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="cert-icon-wrapper" style={{ background: 'rgba(255, 215, 0, 0.1)', color: '#ffd700', border: '1px solid rgba(255, 215, 0, 0.25)' }}>
                            <i className="bi bi-boxes"></i>
                          </div>
                          <span className="cert-badge-status" style={{ background: 'rgba(255, 215, 0, 0.1)', color: '#ffd700', borderColor: 'rgba(255, 215, 0, 0.3)' }}>
                            <i className="bi bi-award-fill me-1"></i>Maker 3D
                          </span>
                        </div>
                        <h6 className="fw-bold text-white mb-1">Diseño CAD & Fabricación Aditiva FDM</h6>
                        <span className="small fw-semibold d-block mb-2" style={{ color: '#ffca28' }}>Creality Ender S1/HI · Tinkercad · CFS</span>
                        <p className="text-secondary small mb-0" style={{ fontSize: '0.82rem', lineHeight: '1.6' }}>
                          Ingeniería inversa, modelado CAD para componentes de tolerancia estricta, extrusión técnica multi-filamento y catálogo público de modelos en Printables y Creality Cloud.
                        </p>
                      </div>
                      <div className="pt-3 mt-3 border-top border-secondary border-opacity-15 d-flex justify-content-between align-items-center">
                        <span className="text-white-50 small" style={{ fontSize: '0.72rem' }}>Ámbito: Hardware & 3D Lab</span>
                        <span className="text-warning small fw-bold" style={{ fontSize: '0.75rem' }}>Experto (92%)</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 6: Domótica & IoT */}
                  <div className="col-lg-4 col-md-6">
                    <div className="cert-card p-4 h-100 d-flex flex-column justify-content-between">
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="cert-icon-wrapper" style={{ background: 'rgba(255, 159, 67, 0.1)', color: '#ff9f43', border: '1px solid rgba(255, 159, 67, 0.25)' }}>
                            <i className="bi bi-cpu-fill"></i>
                          </div>
                          <span className="cert-badge-status" style={{ background: 'rgba(255, 159, 67, 0.1)', color: '#ff9f43', borderColor: 'rgba(255, 159, 67, 0.3)' }}>
                            <i className="bi bi-lightning-charge-fill me-1"></i>Misión Crítica
                          </span>
                        </div>
                        <h6 className="fw-bold text-white mb-1">Domótica Residencial & Sistemas IoT</h6>
                        <span className="small fw-semibold d-block mb-2" style={{ color: '#ffb366' }}>Home Assistant Core · ESP32 · MQTT</span>
                        <p className="text-secondary small mb-0" style={{ fontSize: '0.82rem', lineHeight: '1.6' }}>
                          Despliegue integral con más de 350 rutinas automatizadas, integración segura con cerraduras electrónicas Nuki, protocolos Zigbee/Z-Wave, robots LiDAR y microcontroladores ESP32.
                        </p>
                      </div>
                      <div className="pt-3 mt-3 border-top border-secondary border-opacity-15 d-flex justify-content-between align-items-center">
                        <span className="text-white-50 small" style={{ fontSize: '0.72rem' }}>Ámbito: IoT & Domótica</span>
                        <span className="small fw-bold" style={{ color: '#ff9f43', fontSize: '0.75rem' }}>Avanzado (88%)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Caja de Contacto Directo */}
              <div className="row justify-content-center mb-5">
                <div className="col-lg-7 text-center">
                  <h4 className="fw-bold text-white mb-3">¿Tienes una idea o proyecto en mente?</h4>
                  <p className="text-secondary mb-4 small">
                    Escríbeme contándome las especificaciones técnicas o funcionales de tu idea y te ofreceré un presupuesto a medida sin compromiso.
                  </p>
                  <div className="d-flex flex-wrap gap-3 justify-content-center">
                    <a href="mailto:info@bigcomsat.es" className="btn btn-primary btn-lg px-5 fw-bold shadow-neon contact-btn">
                      <i className="bi bi-envelope-fill me-2"></i>info@bigcomsat.es
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* El Footer con créditos cinematográficos de película solo se muestra en las páginas que no son Inicio (y con el nombre completo en Contacto) */}
      {currentPage !== 'home' && (
        <Footer showCinematicName={currentPage === 'contact'} onNavigate={navigateTo} />
      )}
    </div>
  );
}

export default App;
