import React from "react";
import { motion } from "framer-motion";
import './LoadingScreen.css';

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
  boxSizing: "border-box"
};

const spinTransition = {
  loop: Infinity,
  ease: "linear",
  duration: 1.5 // Adjust the speed of the spin
};

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <motion.span
        style={circleStyle}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </div>
  );
}
