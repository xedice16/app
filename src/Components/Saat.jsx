import React, { useState, useEffect } from "react";
const Saat = () => {
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      setHours(currentTime.getHours());
      setMinutes(currentTime.getMinutes());
      setSeconds(currentTime.getSeconds());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return(
    <div style={{ fontSize: "48px", fontFamily: "monospace" }}>
      <h1>
        {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
      </h1>
    </div>
  );
};

export default Saat;
