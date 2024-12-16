import React, { useState, useEffect } from "react";

const SaniyeOlcen = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    
      if (time > 0) {
        alert(`SaniyeOlcen dayandı! Nəticə: ${time} saniyə`);
      }
    }

    return () => clearInterval(timer);
  }, [isRunning, time]); 

  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  
    if (isRunning && time > 0) {
      alert(`SaniyeOlcen! Nəticə: ${time} saniyə`);
    }
  };

  return (
    <div>
      <h1>SaniyeOlcen: {time} saniyə</h1>

      <div>
        <button onClick={toggleTimer}>
          {isRunning ? "Pauza" : "Başlat"}
        </button>
      </div>
    </div>
  );
};

export default SaniyeOlcen;
