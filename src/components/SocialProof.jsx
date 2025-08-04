// src/components/SocialProof.jsx
import React from 'react';
import './SocialProof.css';

const SocialProof = () => {
  return (
    <section className="social-proof-section">
      <h2 className="section-title">Dicono di Noi</h2>
      <div className="social-proof-grid">

        {/* Testimonianza 1 */}
        <div className="testimonial-card">
          <div className="testimonial-quote-icon">“</div>
          <p className="testimonial-text">
            Il mio punto di riferimento a Massimilla. Il caffè la mattina è sacro e qui lo fanno come si deve. Il sorriso del personale non manca mai.
          </p>
          <span className="testimonial-author">- Giulia R.</span>
        </div>

        {/* Testimonianza 2 */}
        <div className="testimonial-card">
          <div className="testimonial-quote-icon">“</div>
          <p className="testimonial-text">
            Cocktail fantastici e un'atmosfera unica. Perfetto per un aperitivo dopo il lavoro. Torneremo sicuramente per provare il resto del menu!
          </p>
          <span className="testimonial-author">- Marco e Sofia</span>
        </div>

        {/* Card Piattaforme di Recensioni */}
        <div className="testimonial-card platforms-card">
          <h3>Siamo anche su...</h3>
          <p>Leggi cosa dicono i nostri clienti o lascia la tua recensione!</p>
          <div className="platforms-badges">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Google Reviews">
              <svg viewBox="0 0 24 24"><path d="M21.35 11.1H12.18V13.83H18.67C18.36 17.64 15.19 19.27 12.19 19.27C8.36 19.27 5.03 16.25 5.03 12.5C5.03 8.75 8.36 5.73 12.19 5.73C14.02 5.73 15.64 6.35 16.9 7.5L19.05 5.4C17.16 3.68 14.83 2.73 12.19 2.73C6.79 2.73 2.73 7.22 2.73 12.5C2.73 17.78 6.79 22.27 12.19 22.27C17.63 22.27 21.62 18.51 21.62 12.71C21.62 12.13 21.52 11.6 21.35 11.1Z" /></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="TripAdvisor Reviews">
              <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-1.5 13.5c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.16.67 4.24 1.76L13.5 8.5c-.7-.7-1.62-1.12-2.62-1.12-2.21 0-4 1.79-4 4s1.79 4 4 4c1.38 0 2.58-.69 3.3-1.74l1.26 1.26c-1.16 1.34-2.82 2.18-4.7 2.18zm6.5-1.5c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2-.9 2-2 2z"/></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook Reviews">
              <svg viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;