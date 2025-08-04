// src/App.jsx
import React from 'react';
import Hero from './components/Hero';
import Description from './components/Description';
import RollingGallery from './components/RollingGallery';
import Menu from './components/Menu';
import SocialProof from './components/SocialProof'; // <-- 1. IMPORTA IL NUOVO COMPONENTE
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div>
      <Hero />
      <Description />
      <RollingGallery />
      <Menu />
      <SocialProof /> {/* <-- 2. AGGIUNGI IL COMPONENTE QUI */}
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;