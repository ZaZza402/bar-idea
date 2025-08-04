// src/components/Description.jsx

import React from 'react';
import './Description.css';

const Description = () => {
  return (
    <section className="description-section">
      <div className="description-content">
        {/* Titolo aggiornato in italiano */}
        <h2 className="description-title">Dal Caffè dell'Alba ai Cocktail del Tramonto</h2>
        
        {/* Descrizione aggiornata in italiano */}
        <p>
          Nel cuore di Massimilla, Wood’s Bar è più di un semplice locale: è il tuo punto di riferimento quotidiano.
          Ti accogliamo fin dalle prime luci del giorno con l'aroma del vero caffè italiano e cornetti caldi appena sfornati.
          Con il passare delle ore, il nostro ambiente si trasforma in un vivace salotto dove amici si ritrovano per sorseggiare
          cocktail preparati a regola d'arte, vini selezionati e birre artigianali.
          Siamo il tuo rifugio, dall'inizio alla fine della giornata.
        </p>
      </div>
    </section>
  );
};

export default Description;