import React, { useRef } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
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
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",
    color: "white",
  };

  return (
    <div style={containerStyle}>
      <video
        ref={videoRef}
        width="300"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        controls={false}
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div>
        <button
          style={{ ...buttonStyle, backgroundColor: "#4CAF50" }}
          onClick={playVideo}
        >
          Play
        </button>
        <button
          style={{ ...buttonStyle, backgroundColor: "#F44336" }}
          onClick={pauseVideo}
        >
          Pause
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
