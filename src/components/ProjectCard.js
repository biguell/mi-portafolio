import React from 'react';

const ProjectCard = ({ title, description, link, image }) => {
  return (
    <div className="col-md-6 mb-4">
      <div className="card h-100 glass-card reveal border-0">
        {image && <img src={image} className="card-img-top" alt={title} style={{ height: '250px', objectFit: 'cover' }} />}
        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text text-muted">{description}</p>
          {link && link !== "#" && (
            <a href={link} className="btn btn-primary w-100" target="_blank" rel="noopener noreferrer">
              Ver Proyecto
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;