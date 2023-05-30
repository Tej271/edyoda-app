import React from "react";
import { useState } from "react";
import brandLogo from "../assets/icon-brand.png";
import searchLogo from "../assets/icon-search.png";

import DropdownSelect from "./DropdownSelect";

function NavBar() {
  const [courseShow, setCourseShow] = useState(false);
  const [programShow, setProgramShow] = useState(false);

  const courseOptions = [
    { name: "Programming" },
    { name: "Java Programming" },
    { name: "Data Science with Python" },
    { name: "Manual Testing" },
    { name: "Python and Automation" },
    { name: "IoT and Android Development" },
  ];

  const programOptions = [{ name: "Internship in Programming" }, { name: "Job Assistance" }];

  return (
    <header className="flex flex-row align-middle justify-between w-[100%">
      {/* Left Part */}
      <div className="flex flex-row align-middle justify-evenly w-[40%] p-[1%]">
        <div>
          <img src={brandLogo} alt="brand-logo-edyoda" />
        </div>

        <DropdownSelect
          heading={"Courses"}
          options={courseOptions}
          show={courseShow}
          setShow={() => setCourseShow(!courseShow)}
        />
        <DropdownSelect
          heading={"Programs"}
          options={programOptions}
          show={programShow}
          setShow={() => setProgramShow(!programShow)}
        />
      </div>

      {/* Right Part */}
      <div className="flex flex-row items-center justify-evenly w-[30%] p-[1%]">
        <div>
          <img src={searchLogo} alt="search-logo" />
        </div>
        <button type="button" className="text-sm font-normal text-gray-900" aria-expanded="false">
          <span>Log in</span>
        </button>
        <button
          type="button"
          className="text-sm font-medium text-white rounded-full  bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-2"
          aria-expanded="false"
        >
          <span>JOIN NOW</span>
        </button>
      </div>
    </header>
  );
}

export default NavBar;
