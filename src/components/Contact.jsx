// src/components/Contact.jsx
import React from 'react';
import './Contact.css';
import LiveStatus from './LiveStatus';

const Contact = () => {
  const openingHours = [
    { day: 'Domenica', hours: '06:00 – 21:00' },
    { day: 'Lunedì', hours: 'Chiuso' },
    { day: 'Martedì', hours: '06:00 – 21:00' },
    { day: 'Mercoledì', hours: '06:00 – 21:00' },
    { day: 'Giovedì', hours: '06:00 – 21:00' },
    { day: 'Venerdì', hours: '06:00 – 21:00' },
    { day: 'Sabato', hours: '06:00 – 21:00' },
  ];

  return (
    <section className="contact-section">
      <h2 className="section-title">Dove Siamo</h2>
      <div className="contact-container">

        {/* --- NUOVO CONTENITORE PER LA PARTE SINISTRA --- */}
        <div className="left-column">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.618649427029!2d12.338787876729215!3d41.92298686259068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f5c71a34a8e33%3A0xe54316d3e33f677!2sVia%20della%20Massimilla%2C%2034%2C%2000166%20Roma%20RM%2C%20Italy!5e0!3m2!1sen!2sus!4v1701026490334!5m2!1sen!2sus"
              width="100%" height="100%" style={{ border: 0 }}
              allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Wood's Bar Location"
            ></iframe>
          </div>
          {/* --- CARD "CLICK-TO-CALL" AGGIUNTA QUI SOTTO --- */}
          <div className="call-us-card">
            <h3>Prenota o Ordina</h3>
            <p>Chiamaci per prenotare un tavolo o per ordinare da asporto.</p>
            <a href="tel:+390612345678" className="call-button">
              📞 Chiama Ora: +39 06 1234 5678
            </a>
          </div>
        </div>

        {/* La colonna destra rimane invariata */}
        <div className="contact-info">
          <LiveStatus />
          <h3>Orari di Apertura</h3>
          <ul className="hours-list">
            {openingHours.map((item) => (
              <li key={item.day}>
                <span className="day">{item.day}</span>
                <span className={`hours ${item.hours === 'Chiuso' ? 'closed' : ''}`}>
                  {item.hours}
                </span>
              </li>
            ))}
          </ul>
          <div className="address">
            <h3>Indirizzo</h3>
            <p>Via della Massimilla, 34, 00166 Roma RM, Italia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;