import React from 'react';
import './index.css';

const Footer = () => {
  return (
    <footer className="footer text-white">
      <div className="fondoFooter colocar">
        <div className="footer margenA">
          <p className="tipografia" style={{ color: "black" }}>Made with <span role='img' aria-label='emoji'>♥</span> by
                     <a className="tipografia" href="https://github.com/chrisRubiano" target="_blank" without rel="noopener noreferrer" style={{ color: "black" }}> Cristian, </a>
            <a className="tipografia" href="https://github.com/waldos200" target="_blank" without rel="noopener noreferrer" style={{ color: "black" }}>Waldo, </a>
            <a className="tipografia" href="https://github.com/stephaniesinlae" target="_blank" without rel="noopener noreferrer" style={{ color: "black" }}>Stephanie</a>
          </p>
        </div>
        <p className="tipografia copyright margenA" style={{ color: "black" }}>© 2020</p>
      </div>
    </footer>
  );
}

export default Footer;