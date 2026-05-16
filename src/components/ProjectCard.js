import React from "react";

const ProjectCard = ({ title, description, link, image, overlayText, objectFit = "contain" }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100 glass-card reveal border-0 shadow-sm">
        <div className="image-container p-2" style={{ backgroundColor: '#f8f9fa' }}>
          {image && (
            <img
              src={image}
              className="card-img-top rounded"
              alt={title}
              style={{ height: "160px", objectFit: objectFit }}
            />
          )}
          {overlayText && <div className="image-overlay" style={{ fontSize: '0.8rem' }}>{overlayText}</div>}
        </div>
        <div className="card-body p-3">
          <h6 className="card-title fw-bold mb-2">{title}</h6>
          <p className="card-text text-muted small" style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>{description}</p>
          {link && link !== "#" && (
            <a
              href={link}
              className="btn btn-primary btn-sm w-100 mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Proyecto
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
