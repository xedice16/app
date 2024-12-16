import React, { useState, useEffect } from "react";

const Taymer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false); 
  const [isEditable, setIsEditable] = useState(true); 

  useEffect(() => {
    let timer;
    
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      alert("Taymer bitdi!");
      setIsRunning(false); 
    }

    return () => clearInterval(timer); 
  }, [isRunning, time]);


  const increaseTime = (seconds) => {
    setTime((prevTime) => prevTime + seconds);
  };

  
  const toggleTimer = () => {
    if (time > 0) {
      setIsRunning((prev) => !prev); 
      setIsEditable(false); 
    }
  };

  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
    setIsEditable(true);
  };

  return (
    <div>
      <h1>Time Remaining: {time} seconds</h1>
      <div>
     
        {isEditable && (
          <div>
            <button onClick={() => increaseTime(10)}>+10 seconds</button>
            <button onClick={() => increaseTime(30)}>+30 seconds</button>
            <button onClick={() => increaseTime(60)}>+1 minute</button>
          </div>
        )}
      </div>
      <div>
       
        <button onClick={toggleTimer}>
          {isRunning ? "Pause Timer" : "Start Timer"}
        </button>
        <button onClick={resetTimer}>Reset Timer</button>
      </div>
    </div>
  );
};

export default Taymer;
