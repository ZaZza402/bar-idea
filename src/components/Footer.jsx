// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Colonna 1: Brand */}
        <div className="footer-column">
          <h3>Wood’s Bar</h3>
          <p>Il tuo rifugio a Roma, dall'alba al tramonto. Qualità e atmosfera unica, ogni giorno.</p>
        </div>

        {/* Colonna 2: Navigazione */}
        <div className="footer-column">
          <h3>Navigazione</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Contatti</a></li>
          </ul>
        </div>

        {/* Colonna 3: Contatti */}
        <div className="footer-column">
          <h3>Contatti</h3>
          <p>Via della Massimilla, 34<br/>00166 Roma RM, Italia</p>
          <p><a href="tel:+390612345678" className="footer-link">Tel: +39 06 1234 5678</a></p>
        </div>

        {/* Colonna 4: Social */}
        <div className="footer-column">
          <h3>Seguici</h3>
          <div className="social-links">
            <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4-8c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4z"/></svg>
            </a>
            <a href="#" aria-label="TripAdvisor" target="_blank" rel="noopener noreferrer">
               <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-1.5 13.5c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.16.67 4.24 1.76L13.5 8.5c-.7-.7-1.62-1.12-2.62-1.12-2.21 0-4 1.79-4 4s1.79 4 4 4c1.38 0 2.58-.69 3.3-1.74l1.26 1.26c-1.16 1.34-2.82 2.18-4.7 2.18zm6.5-1.5c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2-.9 2-2 2z"/></svg>
            </a>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <p>© {currentYear} Wood’s Bar. Tutti i diritti riservati.</p>
        <p className="mockup-credit">Designed by Alex M</p>
      </div>
    </footer>
  );
};

export default Footer;