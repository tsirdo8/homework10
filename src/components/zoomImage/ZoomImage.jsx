import React, { useRef } from "react";

const ZoomImage = () => {
  const imageRef = useRef(null);

  const handleMouseOver = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = "scale(1.2)";
      imageRef.current.style.transition = "transform 0.3s ease";
    }
  };


  const handleMouseOut = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = "scale(1)";
    }
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
  };

  const imageStyle = {
    width: "300px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <img
        ref={imageRef}
        src="https://via.placeholder.com/300"
        alt="Zoomable"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={imageStyle}
      />
    </div>
  );
};

export default ZoomImage;
