import React, { useState, useRef } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "300px",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "0 5px",
    fontSize: "1rem",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",
    color: "white",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>{time} s</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          style={{ ...buttonStyle, backgroundColor: "#4CAF50" }}
          onClick={startTimer}
        >
          Start
        </button>
        <button
          style={{ ...buttonStyle, backgroundColor: "#F44336" }}
          onClick={stopTimer}
        >
          Stop
        </button>
        <button
          style={{ ...buttonStyle, backgroundColor: "#9E9E9E" }}
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
