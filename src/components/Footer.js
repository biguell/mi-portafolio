import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-5 mt-0">
      <div className="container">
        <p className="mb-0 text-white-50">&copy; {new Date().getFullYear()} José Luis Izquierdo Echuaca. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;