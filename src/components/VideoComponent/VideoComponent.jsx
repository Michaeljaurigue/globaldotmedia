import React from "react";
import "./VideoComponent.css"; // Import a CSS file for styling

const VideoComponent = (props) => {
  return (
    <div className="video-container">
      <iframe
        width="660"
        height="450"
        src={props.src}
        title={props.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoComponent;