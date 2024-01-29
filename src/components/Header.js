import React, { useState } from "react";
import DropdownContent from "./dropdown";
import Supportdrop from "./supportDropDown";
import { logo } from "../utils/constants";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSupportDropdownOpen, setSupportDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    
    setSupportDropdownOpen(false);
  };

  const toggleSupportDropdown = () => {
    setSupportDropdownOpen(!isSupportDropdownOpen);
    
    setDropdownOpen(false);
  };

  const closeDropdowns = () => {
    setDropdownOpen(false);
    setSupportDropdownOpen(false);
  };

  return (
    <header>
      <div className="flex justify-between m-2 mb-2 shadow-md">
        <div className=" w-[6%] h-[6%] ml-8">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <div className="flex items-center">
            <ul className="flex justify-between mx-6 mt-6 text-xl font-semibold">
              <li className="mx-8">Dashboard</li>
              <li className="mx-8">FAQs</li>
              <li className="mx-8">
                <div className="relative inline-block text-left">
                  <div className="">
                    <button
                      type="button"
                      className={`inline-flex w-full justify-center rounded-3xl bg-white  font-semibold text-gray-900 shadow-sm   ${
                        isDropdownOpen ? "ring-blue-500" : ""
                      }`}
                      id="support-button"
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true"
                      onClick={toggleDropdown}
                      onBlur={closeDropdowns}
                    >
                      Support
                    </button>
                  </div>
                  {isDropdownOpen && <Supportdrop />}
                </div>
              </li>
              <li className="mx-8">
                <div className="relative inline-block text-left">
                  <div className="">
                    <button
                      type="button"
                      className={`inline-flex w-full justify-center gap-x-1.5 rounded-3xl bg-white px-3 py-0.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition duration-300 ease-in-out ${
                        isSupportDropdownOpen ? "ring-blue-500" : ""
                      }`}
                      id="menu-button"
                      aria-expanded={isSupportDropdownOpen}
                      aria-haspopup="true"
                      onClick={toggleSupportDropdown}
                      onBlur={closeDropdowns}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/5087/5087607.png"
                        className="w-10 h-10"
                        alt="support-icon"
                      />
                      <span
                        className={`transition-transform duration-300 ease-in-out transform  ${
                          isSupportDropdownOpen ? "rotate-180" : ""
                        }`}
                      >
                        ▼ 
                      </span>
                    </button>
                  </div>
                  {isSupportDropdownOpen && <DropdownContent />}
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
