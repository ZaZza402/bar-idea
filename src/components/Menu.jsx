// src/components/Menu.jsx
import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    // L'ID "menu" permette al link href="#menu" di scorrere qui
    <section id="menu" className="menu-section">
      <h2 className="section-title">Il Nostro Menu</h2>
      <div className="menu-grid">
        
        {/* Categoria 1: Caffetteria */}
        <div className="menu-category">
          <h3>Caffetteria</h3>
          <div className="menu-item">
            <span className="item-name">Espresso</span>
            <span className="item-price">€1.20</span>
          </div>
          <div className="menu-item">
            <span className="item-name">Cappuccino</span>
            <span className="item-price">€1.80</span>
          </div>
          <div className="menu-item">
            <span className="item-name">Caffè Americano</span>
            <span className="item-price">€2.50</span>
          </div>
        </div>

        {/* Categoria 2: Cornetti e Dolci */}
        <div className="menu-category">
          <h3>Cornetti e Dolci</h3>
          <div className="menu-item">
            <span className="item-name">Cornetto Semplice</span>
            <span className="item-price">€1.50</span>
          </div>
          <div className="menu-item">
            <span className="item-name">Cornetto Crema / Cioccolato</span>
            <span className="item-price">€1.80</span>
          </div>
          <div className="menu-item">
            <span className="item-name">Tiramisù della Casa</span>
            <span className="item-price">€5.00</span>
          </div>
        </div>

        {/* Categoria 3: Cocktails */}
        <div className="menu-category">
          <h3>Cocktails</h3>
          <div className="menu-item">
            <span className="item-name">Spritz Aperol</span>
            <span className="item-price">€8.00</span>
          </div>
          <div className="menu-item">
            <span className="item-name">Negroni</span>
            <span className="item-price">€9.00</span>
          </div>
          <div className="menu-item">
            <span className="item-name">Mojito</span>
            <span className="item-price">€9.00</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Menu;