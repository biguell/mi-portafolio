import React, { useState, useEffect, useRef } from "react";

const Navbar = ({ currentPage, onNavigate }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const menuItems = [
    { id: 'home', label: 'Inicio (Portada / Hub)', icon: 'bi-house-door', badge: 'Hub' },
    { id: 'software-ia', label: 'Software, IA & Cloud', icon: 'bi-code-slash', badge: 'Apps' },
    { id: 'domotica-iot', label: 'Domótica & Fabricación 3D', icon: 'bi-cpu', badge: 'IoT' },
    { id: 'infraestructura', label: 'Infraestructura & DevOps', icon: 'bi-shield-lock', badge: 'Clúster' },
    { id: 'certificaciones', label: 'Certificaciones & Formación', icon: 'bi-award', badge: 'Títulos' },
    { id: 'metodologia-ia', label: 'Metodología & Gobernanza IA', icon: 'bi-book', badge: 'Docs' },
    { id: 'terminal', label: 'DevOps Sandbox (Consola)', icon: 'bi-terminal', badge: 'Live' },
    { id: 'contact', label: 'Contacto & Perfil del Autor', icon: 'bi-person-badge', badge: 'Perfil' },
  ];

  // Cerrar al hacer clic fuera del dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar navbar-dark fixed-top glass-nav py-2" style={{ zIndex: 1100 }}>
      <div className="container-fluid px-3 px-lg-4 d-flex justify-content-between align-items-center">
        {/* Brand */}
        <a
          className="navbar-brand d-flex align-items-center gap-2 m-0"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
        >
          <span className="terminal-badge-monogram px-2 py-1 rounded bg-dark border border-primary border-opacity-30 text-primary small fw-bold">
            &gt;_
          </span>
          <span className="fw-bold text-white tracking-wide" style={{ fontSize: '1.08rem', letterSpacing: '0.8px' }}>
            Biguell Hub
          </span>
        </a>

        {/* Centro / Derecha: MENÚ DESPLEGABLE PRINCIPAL */}
        <div className="d-flex align-items-center gap-2">
          {/* Botón rápido Inicio */}
          <button
            className={`btn btn-sm d-none d-md-inline-flex align-items-center gap-1 ${currentPage === 'home' ? 'btn-primary' : 'btn-outline-secondary text-white-50'}`}
            style={{ borderRadius: '8px', fontSize: '0.82rem' }}
            onClick={() => onNavigate('home')}
          >
            <i className="bi bi-house-door"></i> Inicio
          </button>

          {/* MENÚ DESPLEGABLE INTERACTIVO */}
          <div className="position-relative" ref={dropdownRef}>
            <button
              className="btn btn-primary btn-sm d-flex align-items-center gap-2 px-3 fw-bold shadow-neon"
              style={{ borderRadius: '8px', fontSize: '0.85rem', letterSpacing: '0.3px' }}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <i className="bi bi-grid-fill text-warning"></i>
              <span>Menú Ecosistema</span>
              <i className={`bi bi-chevron-${dropdownOpen ? 'up' : 'down'} small`}></i>
            </button>

            {dropdownOpen && (
              <div
                className="dropdown-menu dropdown-menu-dark glass-dropdown shadow-lg show position-absolute end-0 mt-2 p-2"
                style={{ width: '290px', border: '1px solid rgba(0, 210, 255, 0.35)', borderRadius: '12px' }}
              >
                <div className="px-2 py-1 mb-1 border-bottom border-secondary border-opacity-25 d-flex justify-content-between align-items-center">
                  <span className="text-secondary small text-uppercase" style={{ fontSize: '0.68rem', letterSpacing: '1px' }}>
                    Selecciona una página:
                  </span>
                  <span className="badge badge-soft-success small" style={{ fontSize: '0.62rem' }}>Clúster OK</span>
                </div>

                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    className={`dropdown-item d-flex align-items-center justify-content-between py-2 px-2 rounded mb-1 ${currentPage === item.id ? 'active-dropdown-item' : 'text-white-50'}`}
                    onClick={() => {
                      onNavigate(item.id);
                      setDropdownOpen(false);
                    }}
                    style={{ fontSize: '0.85rem', transition: 'all 0.2s ease' }}
                  >
                    <span className="d-flex align-items-center gap-2">
                      <i className={`bi ${item.icon} ${currentPage === item.id ? 'text-primary fw-bold' : 'text-info'}`}></i>
                      <span className={currentPage === item.id ? 'text-white fw-bold' : 'text-white'}>{item.label}</span>
                    </span>
                    <span className="badge bg-secondary bg-opacity-30 text-white-50 small" style={{ fontSize: '0.62rem' }}>{item.badge}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Botón rápido Contacto */}
          <button
            className={`btn btn-sm d-none d-sm-inline-flex align-items-center gap-1 ${currentPage === 'contact' ? 'btn-info text-dark fw-bold' : 'btn-outline-info'}`}
            style={{ borderRadius: '8px', fontSize: '0.82rem' }}
            onClick={() => onNavigate('contact')}
          >
            <i className="bi bi-person-badge"></i> Contacto
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
