// src/components/LiveStatus.jsx
import React, { useState, useEffect } from 'react';
import './LiveStatus.css';

// Definiamo gli orari qui per la logica.
// Formato: Giorno (0=Dom), OraApertura (in minuti da mezzanotte), OraChiusura
const schedule = [
  { day: 0, open: 6 * 60, close: 21 * 60 }, // Domenica
  { day: 1, open: -1, close: -1 },          // Lunedì (Chiuso)
  { day: 2, open: 6 * 60, close: 21 * 60 }, // Martedì
  { day: 3, open: 6 * 60, close: 21 * 60 }, // Mercoledì
  { day: 4, open: 6 * 60, close: 21 * 60 }, // Giovedì
  { day: 5, open: 6 * 60, close: 21 * 60 }, // Venerdì
  { day: 6, open: 6 * 60, close: 21 * 60 }, // Sabato
];

const LiveStatus = () => {
  const [status, setStatus] = useState({
    isOpen: false,
    text: 'Siamo Chiusi',
    countdown: '',
  });
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const currentDay = now.getDay();
      const currentMinutes = now.getHours() * 60 + now.getMinutes();

      setCurrentTime(now.toLocaleTimeString('it-IT'));

      const todaySchedule = schedule.find(s => s.day === currentDay);

      let isOpen = false;
      let countdownText = '';

      if (todaySchedule && todaySchedule.open !== -1) {
        // Se il bar è aperto oggi
        if (currentMinutes >= todaySchedule.open && currentMinutes < todaySchedule.close) {
          isOpen = true;
          const diff = todaySchedule.close - currentMinutes;
          const h = Math.floor(diff / 60);
          const m = diff % 60;
          countdownText = `Chiude tra ${h}h ${m}m`;
        } else {
          // Se siamo prima dell'apertura o dopo la chiusura
          let nextOpeningTime;
          if (currentMinutes < todaySchedule.open) {
            // Apre più tardi oggi
            nextOpeningTime = todaySchedule.open;
          } else {
            // Cerca il prossimo giorno di apertura
            let nextDaySchedule = null;
            for(let i=1; i<=7; i++) {
                nextDaySchedule = schedule.find(s => s.day === (currentDay + i) % 7 && s.open !== -1);
                if(nextDaySchedule) {
                    const diffDays = (nextDaySchedule.day + 7 - currentDay) % 7;
                    nextOpeningTime = currentMinutes + (diffDays * 24 * 60 - currentMinutes + nextDaySchedule.open)
                    break;
                }
            }
          }
          const diff = nextOpeningTime - currentMinutes;
          const h = Math.floor(diff / 60);
          const m = diff % 60;
          countdownText = `Apre tra ${h}h ${m}m`;
        }
      } else {
        // Giorno di chiusura
         let nextDaySchedule = null;
         for(let i=1; i<=7; i++) {
             nextDaySchedule = schedule.find(s => s.day === (currentDay + i) % 7 && s.open !== -1);
             if(nextDaySchedule) {
                 const diffDays = (nextDaySchedule.day + 7 - currentDay) % 7;
                 const nextOpeningTime = currentMinutes + (diffDays * 24 * 60 - currentMinutes + nextDaySchedule.open)
                 const diff = nextOpeningTime - currentMinutes;
                 const h = Math.floor(diff / 60);
                 const m = diff % 60;
                 countdownText = `Apre tra ${h}h ${m}m`;
                 break;
             }
         }
      }

      setStatus({
        isOpen: isOpen,
        text: isOpen ? 'Siamo Aperti' : 'Siamo Chiusi',
        countdown: countdownText,
      });

    }, 1000); // Aggiorna ogni secondo

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="live-status-container">
      <div className={`status-dot ${status.isOpen ? 'open' : 'closed'}`}></div>
      <div className="status-text-content">
        <span className="status-text">{status.text}</span>
        <span className="live-time">{currentTime}</span>
      </div>
      <span className="status-countdown">{status.countdown}</span>
    </div>
  );
};

export default LiveStatus;