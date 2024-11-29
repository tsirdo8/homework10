import React from "react";
import Timer from "./components/timer/Timer";
import ZoomImage from "./components/zoomImage/ZoomImage";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";
import "./index.css";

const App = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f4f4",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Timer />
      <ZoomImage />
      <VideoPlayer />
    </div>
  );
};

export default App;
