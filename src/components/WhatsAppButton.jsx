// src/components/WhatsAppButton.jsx
import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  // SOSTITUISCI QUESTO NUMERO CON QUELLO REALE DEL BAR, IN FORMATO INTERNAZIONALE SENZA '+' O SPAZI
  const phoneNumber = '390612345678';
  const message = encodeURIComponent('Ciao! Vorrei avere maggiori informazioni.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      className="whatsapp-float-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <svg
        height="24"
        width="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M.332 23.668c-.143.404.332.78.709.626l5.782-2.126a10.84 10.84 0 005.183.923h.002a10.84 10.84 0 0010.835-10.843c0-5.983-4.85-10.842-10.835-10.842-5.982 0-10.835 4.86-10.835 10.843 0 2.223.67 4.285 1.848 6.04L.332 23.668zM7.272 20.046l-.373.216-4.264 1.562.94-3.957.25-.975-.192-.35a8.953 8.953 0 01-1.353-4.734c0-4.942 4.01-8.96 8.95-8.96s8.95 4.018 8.95 8.96c0 4.94-4.01 8.958-8.95 8.958h-.002a8.954 8.954 0 01-4.22-.986l-.39-.23zM16.63 13.626c-.112-.224-.41-.35-.747-.628s-1.99-1.02-2.3-1.157c-.31-.136-.54-.224-.768.225s-.87 1.157-1.07 1.392c-.2.235-.398.26-.746.088-.348-.173-1.47- .565-2.793-1.782-1.03-.95-1.724-2.13-1.922-2.486c-.2-.356-.02- .54.198-.73s.446-.516.67-.775c.224-.26.3-.448.448-.75.148-.3.074-.56-.025-.783s-.77-.187-.77-.187c-.632-.016-1.16.51-1.343.81-.19.302-.752.923-.952 1.458-.19.535-.19 1.17 0 1.95.002.012.24 1.07 1.255 2.11.1.104.2.2.3.3l.2.2.3.3c.95 1.02 2.05 1.85 3.33 2.45.2.1.3.15.4.2.5.2.8.15.95.05.15-.1.5-.2.65-.4s.25-.45.3-.6c.05-.15.05-.3.05-.3z"
          fillRule="evenodd"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;