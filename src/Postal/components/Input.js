import React from "react";
import ButtonImage from "../utils/Searcher.png"; // import image file

const Input = () => {
  return (
    <div className="flex justify-center">
      <form className="flex items-center bg-white rounded-full shadow-xl">
        <input
          className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
          type="text"
          placeholder="Search..."
        />
        <div className="p-4">
          <button className="bg-pink-300 text-black rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
            <img src={ButtonImage} alt="Button Image" className="h-6 w-6" /> {/* display image */}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
