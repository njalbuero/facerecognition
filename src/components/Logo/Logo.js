import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <Tilt
      className="Tilt shadow-lg rounded"
      options={{ max: 25 }}
      style={{ height: 150, width: 150 }}
    >
      <div className="Tilt-inner p-3 ">
        <img className="pt-3" alt="logo" src={brain}/>
      </div>
    </Tilt>
  );
};

export default Logo;
