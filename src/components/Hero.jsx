// src/components/Hero.jsx
import React from 'react';
import './Hero.css';
import heroVideo from '../assets/video/hero-video.mp4';

const Hero = () => {
  return (
    <div className="hero-container">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">The Alibi Lounge</h1> {/* <-- NAME CHANGED */}
        <p className="hero-slogan">Dove Iniziano le Storie.</p> {/* <-- SLOGAN CHANGED */}
        <a href="#menu" className="hero-button">
          Vedi Menu
        </a>
      </div>
    </div>
  );
};

export default Hero;