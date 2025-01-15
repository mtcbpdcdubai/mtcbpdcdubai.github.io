import React from "react";
import './LoadingScreen.css';

/** @type {React.CSSProperties} */
const circleStyle = {
  display: "block",
  width: "5rem",
  height: "5rem",
  border: "0.5rem solid transparent",
  borderTop: "0.5rem solid #0078D7", // Blue
  borderRight: "0.5rem solid #00BC28", // Green
  borderBottom: "0.5rem solid #D83B01", // Red
  borderLeft: "0.5rem solid #FFB900", // Yellow
  borderRadius: "50%",
  position: "absolute",
  boxSizing: "border-box",

  // spinning animation, defined in the css file
  animation: "loading-screen-spin 1.5s linear 0s infinite"
};

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <span style={circleStyle}/>
    </div>
  );
}
