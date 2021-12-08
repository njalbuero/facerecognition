import React from "react";


const FaceRecognition = ({imageURL}) => {
  return (
    <div className="flex justify-center mt-2">
        <img id="inputImage" src={imageURL} alt="" height="auto" width="500px"/>
    </div>
  );
};

export default FaceRecognition;
