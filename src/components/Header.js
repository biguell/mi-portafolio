import React from 'react';

const Header = ({ onNavigate }) => {
  return (
    <div className="text-center px-3 mb-3">
      <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-2 bg-primary bg-opacity-10 border border-primary border-opacity-25">
        <span className="telemetry-dot"></span>
        <span className="text-primary text-uppercase fw-bold" style={{ fontSize: '0.72rem', letterSpacing: '1px' }}>
          Ingeniería de Sistemas · Domótica Autónoma · Soluciones SaaS & IA
        </span>
      </div>

      <h1 className="fw-bold mb-2 text-white hero-home-title" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', letterSpacing: '0.5px', lineHeight: '1.2' }}>
        Arquitectura de Sistemas & Soluciones Tecnológicas
      </h1>

      <p className="text-white-50 mx-auto mb-3" style={{ maxWidth: '780px', fontSize: '0.95rem', lineHeight: '1.5' }}>
        Infraestructuras Distribuidas de Alta Disponibilidad, Clústeres ARM64 de Misión Crítica, Visión Artificial Multimodal y Fabricación Digital 3D.
      </p>

      {/* Acciones directas para entrar a cada página */}
      <div className="d-flex flex-wrap gap-2 justify-content-center">
        <button onClick={() => onNavigate('software-ia')} className="btn btn-primary btn-sm px-3 fw-bold shadow-neon" style={{ borderRadius: '8px' }}>
          <i className="bi bi-code-slash me-1"></i>Software & IA
        </button>
        <button onClick={() => onNavigate('domotica-iot')} className="btn btn-outline-info btn-sm px-3 fw-bold" style={{ borderRadius: '8px' }}>
          <i className="bi bi-cpu-fill me-1"></i>Domótica & 3D Maker
        </button>
        <button onClick={() => onNavigate('infraestructura')} className="btn btn-outline-success btn-sm px-3 fw-bold" style={{ borderRadius: '8px' }}>
          <i className="bi bi-shield-lock-fill me-1"></i>DevOps Clúster
        </button>
        <button onClick={() => onNavigate('certificaciones')} className="btn btn-outline-light btn-sm px-3 fw-bold" style={{ borderRadius: '8px' }}>
          <i className="bi bi-award-fill text-warning me-1"></i>Certificados
        </button>
        <button onClick={() => onNavigate('contact')} className="btn btn-outline-warning btn-sm px-3 fw-bold" style={{ borderRadius: '8px' }}>
          <i className="bi bi-person-badge me-1"></i>Perfil & Contacto
        </button>
      </div>
    </div>
  );
};

export default Header;
