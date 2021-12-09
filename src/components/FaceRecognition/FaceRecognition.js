import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageURL, imageBox }) => {
  return (
    <div className="flex justify-center mt-2">
      <div className="absolute">
        <img
          id="inputImage"
          src={imageURL}
          alt=""
          height="auto"
          width="500px"
        />
        <div
          className="bounding-box"
          style={{
            top: imageBox.topRow,
            right: imageBox.rightCol,
            bottom: imageBox.bottomRow,
            left: imageBox.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
