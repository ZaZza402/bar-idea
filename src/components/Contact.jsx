// src/components/Contact.jsx
import React from 'react';
import './Contact.css';
import LiveStatus from './LiveStatus';

const Contact = () => {
  // This array is for VISUAL DISPLAY of the hours list. It is now correctly restored.
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
    // The id="contact" is kept so the footer link works correctly
    <section id="contact" className="contact-section">
      <h2 className="section-title">Dove Siamo</h2>
      <div className="contact-container">

        <div className="left-column">
          <div className="contact-map">
            {/* Generic Map Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.835811797805!2d12.47953687672791!3d41.89676646359518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f605459163777%3A0x2051511ab6944633!2sVia%20del%20Corso%2C%20101%2C%2000186%20Roma%20RM!5e0!3m2!1sen!2sit!4v1717873836773!5m2!1sen!2sit"
              width="100%" height="100%" style={{ border: 0 }}
              allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="The Alibi Lounge Location"
            ></iframe>
          </div>
          <div className="call-us-card">
            <h3>Prenota o Ordina</h3>
            <p>Chiamaci per prenotare un tavolo o per ordinare da asporto.</p>
            {/* Generic Phone Number */}
            <a href="tel:+390698765432" className="call-button">
              📞 Chiama Ora: +39 06 9876 5432
            </a>
          </div>
        </div>

        <div className="contact-info">
          {/* Live Clock Component */}
          <LiveStatus />

          <h3>Orari di Apertura</h3>
          {/* The visual list of hours, now correctly rendered */}
          <ul className="hours-list">
            {openingHours.map((item, index) => (
              <li key={index}>
                <span className="day">{item.day}</span>
                <span className={`hours ${item.hours === 'Chiuso' ? 'closed' : ''}`}>
                  {item.hours}
                </span>
              </li>
            ))}
          </ul>
          <div className="address">
            <h3>Indirizzo</h3>
            {/* Generic Address Text */}
            <p>Via del Corso, 101<br/>00186 Roma RM, Italia</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;