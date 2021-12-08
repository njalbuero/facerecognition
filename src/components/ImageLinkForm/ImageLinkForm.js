import React from "react";

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return (
    <div className="mt-2">
      <p className="text-xl text-white">
        This will detect faces in your picture. Give it a try.
      </p>
      <div className="mt-2">
      <input onChange={onInputChange} className="rounded shadow appearance-none border  w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
        <button onClick={onButtonSubmit} className="rounded shadow px-3 py-2 text-white transition duration-500 ease-in-out bg-purple-500 hover:bg-purple-500 transform hover:-translate-y-1 hover:scale-110 ml-2">Detect</button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
