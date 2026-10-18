import React, { useState } from "react";

const ProjectCard = ({
  title,
  version,
  description,
  link,
  linkText,
  playStoreLink,
  webLink,
  pwaGuide,
  printablesLink,
  crealityLink,
  badges = [],
  image,
  bannerImage,
  overlayText,
  isFeatured = false,
  statusBadge = "Activo",
  statusText = "En Producción",
  footerChip = null
}) => {
  const [showPwa, setShowPwa] = useState(false);

  if (isFeatured) {
    return (
      <div className="card glass-card featured-glass-card border-0 shadow-lg p-4 mb-4">
        <div className="row g-4 align-items-center">
          <div className="col-lg-8">
            <div className="d-flex align-items-center gap-3 mb-3">
              {image && (
                <div className="project-icon-box p-2 rounded-3 bg-dark border border-primary border-opacity-25 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '58px', height: '58px' }}>
                  <img src={image} alt={title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                </div>
              )}
              <div>
                <div className="d-flex flex-wrap align-items-center gap-2">
                  <h5 className="card-title fw-bold text-white m-0" style={{ fontSize: '1.25rem' }}>{title}</h5>
                  {version && (
                    <span className="badge badge-soft-primary" style={{ fontSize: '0.72rem' }}>
                      {version}
                    </span>
                  )}
                  <span className="badge badge-soft-success small">
                    <span className="telemetry-dot me-1"></span>{statusBadge}
                  </span>
                </div>
                <span className="text-secondary small">{statusText}</span>
              </div>
            </div>

            {badges && badges.length > 0 && (
              <div className="d-flex flex-wrap gap-1 mb-3">
                {badges.map((b, i) => (
                  <span key={i} className="badge badge-soft-info" style={{ fontSize: '0.7rem' }}>
                    {b}
                  </span>
                ))}
              </div>
            )}

            <p className="card-text text-white-50 small mb-0" style={{ fontSize: '0.92rem', lineHeight: '1.65' }}>
              {description}
            </p>
          </div>

          <div className="col-lg-4 border-start border-secondary border-opacity-15 ps-lg-4">
            <h6 className="text-primary fw-bold mb-3 small text-uppercase letter-spacing-1">
              <i className="bi bi-cpu-fill me-1"></i> Telemetría & Capacidades Clave
            </h6>
            <div className="d-flex flex-column gap-2 mb-3">
              <div className="p-2 rounded bg-black bg-opacity-50 border border-secondary border-opacity-10 d-flex justify-content-between align-items-center small">
                <span className="text-white-50"><i className="bi bi-gear-wide-connected text-info me-2"></i>Automatizaciones</span>
                <span className="text-white fw-bold">350+ Activas</span>
              </div>
              <div className="p-2 rounded bg-black bg-opacity-50 border border-secondary border-opacity-10 d-flex justify-content-between align-items-center small">
                <span className="text-white-50"><i className="bi bi-robot text-warning me-2"></i>Robots Limpieza</span>
                <span className="text-white fw-bold">Lula & Tina LiDAR</span>
              </div>
              <div className="p-2 rounded bg-black bg-opacity-50 border border-secondary border-opacity-10 d-flex justify-content-between align-items-center small">
                <span className="text-white-50"><i className="bi bi-shield-exclamation text-danger me-2"></i>ES-Alert Suite</span>
                <span className="text-white fw-bold">Dual-Channel 1.0 Vol</span>
              </div>
              <div className="p-2 rounded bg-black bg-opacity-50 border border-secondary border-opacity-10 d-flex justify-content-between align-items-center small">
                <span className="text-white-50"><i className="bi bi-door-closed-fill text-success me-2"></i>Cerradura Nuki Ultra</span>
                <span className="text-white fw-bold">Doble Blindaje VIP</span>
              </div>
            </div>
            <div className="small text-secondary d-flex align-items-center gap-1">
              <i className="bi bi-check-circle-fill text-success"></i> Docker ARM64 en Raspi (192.168.2.16)
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`card h-100 glass-card border-0 shadow-sm d-flex flex-column ${bannerImage ? 'p-0 overflow-hidden' : 'p-4'}`}>
      {bannerImage && (
        <div className="image-container p-3 text-center" style={{ backgroundColor: '#0d1117', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <img
            src={bannerImage}
            className="card-img-top rounded"
            alt={title}
            style={{ height: "135px", objectFit: "contain" }}
          />
        </div>
      )}

      <div className={`d-flex flex-column flex-grow-1 ${bannerImage ? 'p-4' : ''}`}>
        {/* Header con Icono + Título + Versión */}
        <div className="d-flex align-items-start gap-3 mb-3">
          {image && !bannerImage && (
            <div className="project-icon-box p-2 rounded-3 bg-dark border border-secondary border-opacity-20 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '48px', height: '48px' }}>
              <img src={image} alt={title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </div>
          )}
        <div className="flex-grow-1">
          <div className="d-flex justify-content-between align-items-start">
            <h6 className="card-title fw-bold m-0 text-white" style={{ fontSize: '1.02rem', lineHeight: '1.3' }}>{title}</h6>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2 mt-1">
            {version && (
              <span className="badge badge-soft-primary" style={{ fontSize: '0.65rem' }}>
                {version}
              </span>
            )}
            <span className="badge badge-soft-success" style={{ fontSize: '0.62rem' }}>
              <span className="telemetry-dot me-1"></span>{statusBadge}
            </span>
          </div>
        </div>
      </div>

      {/* Badges de tecnología */}
      {badges && badges.length > 0 && (
        <div className="d-flex flex-wrap gap-1 mb-3">
          {badges.map((b, i) => (
            <span key={i} className="badge badge-soft-info" style={{ fontSize: '0.65rem', fontWeight: '500' }}>
              {b}
            </span>
          ))}
        </div>
      )}

      {/* Descripción técnica */}
      <p className="card-text text-white-50 flex-grow-1 mb-3" style={{ fontSize: '0.86rem', lineHeight: '1.6' }}>
        {description}
      </p>

      {/* Acciones y Enlaces */}
      <div className="mt-auto d-flex flex-column gap-2 pt-2">
        {playStoreLink && (
          <a
            href={playStoreLink}
            className="btn btn-primary btn-sm w-100 fw-bold d-flex align-items-center justify-content-center gap-2 shadow-sm"
            target="_blank"
            rel="noopener noreferrer"
            style={{ borderRadius: '8px', letterSpacing: '0.5px', fontSize: '0.82rem' }}
          >
            <i className="bi bi-google-play"></i> Descargar en Google Play
          </a>
        )}

        {webLink && (
          <a
            href={webLink}
            className="btn btn-outline-info btn-sm w-100 fw-bold d-flex align-items-center justify-content-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
            style={{ borderRadius: '8px', letterSpacing: '0.5px', fontSize: '0.82rem' }}
          >
            <i className="bi bi-globe2"></i> Abrir Plataforma Web (HTTPS)
          </a>
        )}

        {pwaGuide && (
          <div>
            <button
              onClick={() => setShowPwa(!showPwa)}
              className="btn btn-outline-secondary btn-sm w-100 text-white-50 d-flex align-items-center justify-content-center gap-1"
              style={{ borderRadius: '8px', fontSize: '0.76rem' }}
            >
              <i className="bi bi-phone"></i> {showPwa ? 'Ocultar Guía PWA' : 'Cómo instalar como App en iPhone / Mac / PC'}
            </button>
            {showPwa && (
              <div className="p-3 mt-2 rounded bg-dark border border-secondary border-opacity-25 small animate__animated animate__fadeIn" style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>
                <h6 className="text-white fw-bold mb-2" style={{ fontSize: '0.85rem' }}>
                  <i className="bi bi-download text-primary me-1"></i> Instalación Directa PWA (Sin Tiendas):
                </h6>
                <ul className="list-unstyled mb-0 d-flex flex-column gap-2 text-white-50">
                  <li>
                    <strong className="text-white"><i className="bi bi-apple text-info me-1"></i> iOS:</strong> En Safari abre <span className="text-info fw-bold">turnocontrolpro.com</span> → Compartir → <strong>"Añadir a pantalla de inicio"</strong>.
                  </li>
                  <li>
                    <strong className="text-white"><i className="bi bi-laptop text-info me-1"></i> Mac/PC:</strong> En Chrome/Edge abre el sitio → icono <strong>Instalar</strong> en barra o Menú → <strong>"Instalar como aplicación"</strong>.
                  </li>
                  <li>
                    <strong className="text-white"><i className="bi bi-android2 text-info me-1"></i> Android:</strong> En Chrome → Menú (tres puntos) → <strong>"Instalar aplicación"</strong> para acceso offline.
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}

        {printablesLink && (
          <a
            href={printablesLink}
            className="btn btn-sm w-100 fw-bold d-flex align-items-center justify-content-center gap-2 shadow-sm text-white"
            target="_blank"
            rel="noopener noreferrer"
            style={{ borderRadius: '8px', background: 'linear-gradient(135deg, #fa6b05 0%, #d95300 100%)', border: 'none', fontSize: '0.82rem' }}
          >
            <i className="bi bi-box-seam-fill"></i> Modelos 3D en Printables (@yoeph)
          </a>
        )}

        {crealityLink && (
          <a
            href={crealityLink}
            className="btn btn-sm w-100 fw-bold d-flex align-items-center justify-content-center gap-2 shadow-sm text-white"
            target="_blank"
            rel="noopener noreferrer"
            style={{ borderRadius: '8px', background: 'linear-gradient(135deg, #00a859 0%, #008043 100%)', border: 'none', fontSize: '0.82rem' }}
          >
            <i className="bi bi-cloud-arrow-down-fill"></i> Perfil Creality Cloud (YoephLabs)
          </a>
        )}

        {Array.isArray(link) ? (
          <div className="d-flex gap-2 w-100 mt-auto">
            {link.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                className="btn btn-outline-primary btn-sm flex-fill fw-bold text-center d-flex align-items-center justify-content-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ borderRadius: '8px', letterSpacing: '0.5px', fontSize: '0.8rem' }}
              >
                {item.url && item.url.endsWith('.pdf') && (
                  <i className="bi bi-file-earmark-pdf-fill text-danger"></i>
                )}
                {item.url && (item.url.endsWith('.jpg') || item.url.endsWith('.png')) && (
                  <i className="bi bi-file-earmark-image text-warning"></i>
                )}
                {item.text}
              </a>
            ))}
          </div>
        ) : (
          !playStoreLink && !webLink && !printablesLink && !crealityLink && link && link !== "#" && (
            <a
              href={link}
              className="btn btn-outline-primary btn-sm w-100 fw-bold mt-auto d-flex align-items-center justify-content-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderRadius: '8px', letterSpacing: '0.5px', fontSize: '0.82rem' }}
            >
              {typeof link === 'string' && link.endsWith('.pdf') && (
                <i className="bi bi-file-earmark-pdf-fill text-danger"></i>
              )}
              {linkText || (typeof link === 'string' && (link.endsWith('.pdf') || link.includes('certificados')) ? 'VER DIPLOMA OFICIAL (PDF)' : 'VER PROYECTO')}
            </a>
          )
        )}

        {footerChip && (
          <div className="border-top border-secondary border-opacity-10 pt-2 d-flex justify-content-between align-items-center text-secondary small" style={{ fontSize: '0.75rem' }}>
            <span><i className="bi bi-hdd-network text-info me-1"></i> {footerChip.left}</span>
            <span className="badge bg-secondary bg-opacity-20 text-white-50">{footerChip.right}</span>
          </div>
        )}
      </div>
    </div>
  </div>
  );
};

export default ProjectCard;
