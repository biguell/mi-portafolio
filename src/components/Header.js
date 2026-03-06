import React from 'react';

const Header = () => {
  return (
    <header id="hero" className="hero-section bg-dark text-white text-center d-flex align-items-center" style={{ minHeight: '40vh', background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80") center/cover no-repeat' }}>
      <div className="container">
        <h1 className="display-3 fw-bold mb-3 animate__animated animate__fadeInDown">Hola, soy José Luis</h1>
        <p className="lead mb-4 animate__animated animate__fadeInUp">Técnico & Desarrollador | IoT · Automatización · DevOps</p>
        <div className="animate__animated animate__fadeInUp animate__delay-1s">
          <a href="#projects" className="btn btn-primary btn-lg px-5 me-md-2 fw-bold shadow-sm">Ver Mis Proyectos</a>
          <a href="#contact" className="btn btn-outline-light btn-lg px-5 fw-bold shadow-sm">Trabajemos Juntos</a>
        </div>
      </div>
    </header>
  );
};

export default Header;