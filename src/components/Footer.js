import React from 'react';

const Footer = ({ showCinematicName = false, onNavigate }) => {
  if (!showCinematicName) {
    return (
      <footer className="bg-black text-white py-3 border-top border-secondary border-opacity-10 mt-auto">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 small">
            <div>
              <div className="d-flex align-items-center gap-2">
                <span className="text-secondary" style={{ fontSize: '0.78rem' }}>
                  <span className="text-primary fw-bold">&gt;_ Biguell Hub</span> · Clúster Privado Raspi & Rambo (Docker ARM64 · OMV 7)
                </span>
              </div>
              <div className="text-white-50 mt-1 text-start" style={{ fontSize: '0.74rem', letterSpacing: '0.8px' }}>
                &copy; {new Date().getFullYear()} BigcomSat.S.L.U. TODOS LOS DERECHOS RESERVADOS.
              </div>
            </div>
            <div className="d-flex flex-wrap gap-2 align-items-center">
              <button
                onClick={() => onNavigate('certificaciones')}
                className="btn btn-outline-warning btn-sm py-1 px-2 fw-semibold"
                style={{ fontSize: '0.74rem', borderRadius: '6px' }}
              >
                <i className="bi bi-award-fill me-1"></i>Certificados
              </button>
              <a
                href="https://www.printables.com/@yoeph/models"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-50 text-decoration-none small hover-text-white px-1"
              >
                <i className="bi bi-box-seam text-warning me-1"></i>Printables
              </a>
              <a
                href="https://www.crealitycloud.com/es/user/2772190518/profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-50 text-decoration-none small hover-text-white px-1"
              >
                <i className="bi bi-cloud text-success me-1"></i>Creality Cloud
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="btn btn-outline-primary btn-sm py-1 px-2 fw-bold"
                style={{ fontSize: '0.74rem', borderRadius: '6px' }}
              >
                Contacto
              </button>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="cinematic-footer text-white text-center py-5 position-relative overflow-hidden mt-5">
      {/* Luz ambiental cinematográfica superior */}
      <div className="cinematic-glow"></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Intro estilo título de película de Hollywood */}
        <div className="mb-3">
          <span className="cinematic-pill text-uppercase fw-bold">
            ★ CRÉDITOS FINALES DE PRODUCCIÓN · SOBERANÍA TECNOLÓGICA ★
          </span>
        </div>

        {/* Bloque Principal del Título Cinematográfico: José Luis Izquierdo Echuaca */}
        <div className="cinematic-hero-block my-4 py-3">
          <p className="cinematic-role text-uppercase mb-2">
            CREADO, DIRIGIDO Y ARQUITECTADO POR
          </p>
          <h1 className="cinematic-name text-uppercase my-1">
            JOSÉ LUIS IZQUIERDO ECHUACA
          </h1>
          <p className="cinematic-subtitle text-uppercase mt-2">
            FULL-STACK ENGINEER · CLOUD & DEVOPS ARCHITECT · AUTONOMOUS AI & 3D MAKER
          </p>
        </div>

        {/* Ficha Técnica / Créditos de Película (Two-Column Hollywood Style Roll) */}
        <div className="cinematic-credits-wrapper my-5 mx-auto" style={{ maxWidth: '880px' }}>
          <div className="row g-3 text-start">
            <div className="col-md-6 col-12">
              <div className="p-3 rounded h-100 border border-secondary border-opacity-10" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                <span className="text-white-50 d-block mb-1 text-uppercase" style={{ fontSize: '0.68rem', letterSpacing: '1.2px' }}>
                  DIRECCIÓN & ARQUITECTURA
                </span>
                <span className="text-info fw-bold d-block" style={{ fontSize: '0.92rem' }}>
                  JOSÉ LUIS IZQUIERDO ECHUACA
                </span>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="p-3 rounded h-100 border border-secondary border-opacity-10" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                <span className="text-white-50 d-block mb-1 text-uppercase" style={{ fontSize: '0.68rem', letterSpacing: '1.2px' }}>
                  PLATAFORMA SAAS DE FLOTAS
                </span>
                <span className="text-primary fw-bold d-block" style={{ fontSize: '0.92rem' }}>
                  TURNOCONTROLPRO MULTI-SECTOR
                </span>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="p-3 rounded h-100 border border-secondary border-opacity-10" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                <span className="text-white-50 d-block mb-1 text-uppercase" style={{ fontSize: '0.68rem', letterSpacing: '1.2px' }}>
                  INTELIGENCIA ARTIFICIAL & VISIÓN
                </span>
                <span className="text-warning fw-bold d-block" style={{ fontSize: '0.92rem' }}>
                  GEMINI PRO & COMPUTER VISION
                </span>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="p-3 rounded h-100 border border-secondary border-opacity-10" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                <span className="text-white-50 d-block mb-1 text-uppercase" style={{ fontSize: '0.68rem', letterSpacing: '1.2px' }}>
                  LABORATORIO & FABRICACIÓN 3D
                </span>
                <span className="text-success fw-bold d-block" style={{ fontSize: '0.92rem' }}>
                  YOEPHLABS (PRINTABLES & CREALITY)
                </span>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="p-3 rounded h-100 border border-secondary border-opacity-10" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                <span className="text-white-50 d-block mb-1 text-uppercase" style={{ fontSize: '0.68rem', letterSpacing: '1.2px' }}>
                  CLÚSTER DISTRIBUIDO ARM64
                </span>
                <span className="text-info fw-bold d-block" style={{ fontSize: '0.92rem' }}>
                  RASPI (APP) & RAMBO (NAS / STORAGE)
                </span>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="p-3 rounded h-100 border border-secondary border-opacity-10" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                <span className="text-white-50 d-block mb-1 text-uppercase" style={{ fontSize: '0.68rem', letterSpacing: '1.2px' }}>
                  AUTOMATIZACIÓN RESIDENCIAL
                </span>
                <span className="text-light fw-bold d-block" style={{ fontSize: '0.92rem' }}>
                  HOME ASSISTANT CORE (350+ AUTOS)
                </span>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="p-3 rounded h-100 border border-secondary border-opacity-10" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                <span className="text-white-50 d-block mb-1 text-uppercase" style={{ fontSize: '0.68rem', letterSpacing: '1.2px' }}>
                  ROBOTS AUTÓNOMOS DE LIMPIEZA
                </span>
                <span className="text-white-50 fw-bold d-block" style={{ fontSize: '0.92rem' }}>
                  LULA (BORDES) & TINA (LIDAR)
                </span>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="p-3 rounded h-100 border border-secondary border-opacity-10" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                <span className="text-white-50 d-block mb-1 text-uppercase" style={{ fontSize: '0.68rem', letterSpacing: '1.2px' }}>
                  CIBERSEGURIDAD & BASTIONADO
                </span>
                <span className="text-danger fw-bold d-block" style={{ fontSize: '0.92rem' }}>
                  FAIL2BAN · LYNIS 80+ · BORG NVME 1TB
                </span>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="p-3 rounded h-100 border border-secondary border-opacity-10" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                <span className="text-white-50 d-block mb-1 text-uppercase" style={{ fontSize: '0.68rem', letterSpacing: '1.2px' }}>
                  TÍTULOS & ACREDITACIONES
                </span>
                <span className="text-warning fw-bold d-block" style={{ fontSize: '0.92rem' }}>
                  9 CERTIFICACIONES OFICIALES (SEAG · IFCT · RGPD)
                </span>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="p-3 rounded h-100 border border-secondary border-opacity-10 d-flex flex-column justify-content-between" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                <span className="text-white-50 d-block mb-1 text-uppercase" style={{ fontSize: '0.68rem', letterSpacing: '1.2px' }}>
                  EXPEDIENTE DE CERTIFICADOS
                </span>
                <div>
                  <button
                    onClick={() => onNavigate('certificaciones')}
                    className="btn btn-outline-warning btn-sm py-1 px-3 fw-bold text-uppercase d-inline-flex align-items-center gap-2"
                    style={{ fontSize: '0.76rem', borderRadius: '6px' }}
                  >
                    <i className="bi bi-award-fill"></i> Ver 9 Diplomas Verificados &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separador cinematográfico con estrella */}
        <div className="cinematic-divider my-4 mx-auto">
          <span className="divider-line"></span>
          <i className="bi bi-star-fill text-warning mx-3" style={{ fontSize: '0.75rem' }}></i>
          <span className="divider-line"></span>
        </div>

        {/* Enlaces de Acceso Rápido y Perfiles Públicos */}
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 mb-4">
          <button
            onClick={() => onNavigate('certificaciones')}
            className="credits-link d-flex align-items-center gap-2 btn btn-link text-decoration-none p-0"
            style={{ color: '#ffd700' }}
          >
            <i className="bi bi-award-fill text-warning"></i> Certificaciones & Títulos
          </button>
          <span className="credits-separator opacity-25 d-none d-md-inline">·</span>
          <a
            href="https://www.printables.com/@yoeph/models"
            target="_blank"
            rel="noopener noreferrer"
            className="credits-link d-flex align-items-center gap-2"
          >
            <i className="bi bi-box-seam-fill text-warning"></i> Printables: @yoeph
          </a>
          <span className="credits-separator opacity-25 d-none d-md-inline">·</span>
          <a
            href="https://www.crealitycloud.com/es/user/2772190518/profile"
            target="_blank"
            rel="noopener noreferrer"
            className="credits-link d-flex align-items-center gap-2"
          >
            <i className="bi bi-cloud-arrow-down-fill text-success"></i> Creality Cloud: YoephLabs
          </a>
          <span className="credits-separator opacity-25 d-none d-md-inline">·</span>
          <a
            href="https://play.google.com/store/apps/details?id=com.bigcomsat.turnocontrolpro"
            target="_blank"
            rel="noopener noreferrer"
            className="credits-link d-flex align-items-center gap-2"
          >
            <i className="bi bi-google-play text-info"></i> TurnoControlPro Play Store
          </a>
        </div>

        {/* Sello de Producción de Cine y Copyright Final */}
        <div className="cinematic-legal-card p-3 rounded mx-auto" style={{ maxWidth: '780px', background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="credits-meta text-white-50 small mb-1" style={{ letterSpacing: '1px', fontSize: '0.78rem' }}>
            ESTA PRODUCCIÓN FUE CONCEBIDA, DESARROLLADA Y ALOJADA DE FORMA 100% SOBERANA EN BARCELONA SOBRE INFRAESTRUCTURA PRIVADA.
          </p>
          <p className="credits-meta text-secondary mb-2" style={{ fontSize: '0.72rem', letterSpacing: '1.2px' }}>
            CERO RASTREO COMERCIAL · CERO NUBES PRIVATIVAS DE TERCEROS · DOCKER ARM64 · OMV 7
          </p>
          <p className="credits-final text-white fw-bold small mb-0" style={{ letterSpacing: '1.5px' }}>
            &copy; {new Date().getFullYear()} BigcomSat.S.L.U. TODOS LOS DERECHOS RESERVADOS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
