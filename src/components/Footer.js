import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-5 mt-0">
      <div className="container">
        <p className="mb-0 text-white-50 small">&copy; {new Date().getFullYear()} Bigcomsat, S.L.U. Todos los derechos reservados. <span className="text-muted ms-2">| Engine v18.9.5</span></p>
      </div>
    </footer>
  );
};

export default Footer;