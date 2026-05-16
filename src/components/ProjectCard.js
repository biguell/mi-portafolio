import React from "react";

const ProjectCard = ({ title, version, description, link, image, overlayText, objectFit = "contain" }) => {
  return (
    <div className="card h-100 glass-card border-0 shadow-sm">
      <div className="image-container p-3" style={{ backgroundColor: '#0d1117' }}>
        {image && (
          <img
            src={image}
            className="card-img-top rounded"
            alt={title}
            style={{ height: "140px", objectFit: objectFit }}
          />
        )}
        {overlayText && <div className="image-overlay" style={{ fontSize: '0.7rem' }}>{overlayText}</div>}
      </div>
      <div className="card-body p-4 d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h6 className="card-title fw-bold m-0 text-white" style={{ fontSize: '1.05rem' }}>{title}</h6>
          {version && <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 ms-2" style={{ fontSize: '0.6rem' }}>{version}</span>}
        </div>
        <p className="card-text text-white-50 small mb-4" style={{ fontSize: '0.88rem', lineHeight: '1.6', flex: 1 }}>{description}</p>
        {link && link !== "#" && (
          <a
            href={link}
            className="btn btn-outline-primary btn-sm w-100 mt-auto fw-bold"
            target="_blank"
            rel="noopener noreferrer"
            style={{ borderRadius: '8px', letterSpacing: '0.5px' }}
          >
            VER PROYECTO
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
