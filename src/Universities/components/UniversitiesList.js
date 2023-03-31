import React, { useState, useEffect } from "react";
import { getUniversitiesList } from "../server/api";
import UniversityDropdown from "./UniversityDropdown";

const UniversitiesList = () => {
  //university list in dropdown state
  const [universities, setUniversities] = useState([]);

  //visibility of dropdown
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  useEffect(() => {
    getUniversitiesList()
      .then((response) => setUniversities(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
        <button
          id="dropdownHoverButton"
          data-dropdown-toggle="dropdownHover"
          data-dropdown-trigger="hover"
          className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={handleToggleDropdown}
        >
          Dropdown hover{" "}
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div
          id="dropdownHover"
          className={`z-10 items-center bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${dropdownVisible ? "" : "hidden"}`}
          style={{
            position: "absolute",
            top: "calc(100% + 10px)",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {universities.map((university) => (
            <UniversityDropdown name={university.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversitiesList;
