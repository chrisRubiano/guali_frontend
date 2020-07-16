import React from 'react';
import './index.css';

const Footer = () => {
  return (
    <footer className="footer text-white">
      <div className="fondoFooter colocar">
        <div className="footer margenA">
          <p style={{ color: "black" }}>Made with <span role='img' aria-label='emoji'>♥</span> by
                     <a href="https://github.com/chrisRubiano" target="_blank" without rel="noopener noreferrer" style={{ color: "black" }}> Cristian, </a>
            <a href="https://github.com/waldos200" target="_blank" without rel="noopener noreferrer" style={{ color: "black" }}>Waldo, </a>
            <a href="https://github.com/stephaniesinlae" target="_blank" without rel="noopener noreferrer" style={{ color: "black" }}>Stephanie</a>
          </p>
        </div>
        <p className="copyright margenA" style={{ color: "black" }}>© 2020</p>
      </div>
    </footer>
  );
}

export default Footer;