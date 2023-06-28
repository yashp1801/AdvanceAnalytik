import React, { useState, useEffect } from "react";
import Video from "./Loader.mp4";
import "./Loader.scss";

const Loader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setVisible(false);
    }, 4000);
  }, []);

  return (
    <div className={`loader-container ${visible ? "" : "loader-hide"}`}>
      <div className="loader">
        <video src={Video} muted loop autoPlay></video>
      </div>
    </div>
  );
};

export default Loader;
