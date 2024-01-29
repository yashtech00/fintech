import React from "react";

const Supportdrop = () => {
  return (
    <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div className="py-1" role="none">
        <a
          href="#"
          className="text-gray-700 block px-4 py-2 text-sm"
          role="menuitem"
          tabIndex="-1"
        >
          <div className=" text-blue-600 ml-2">
            <div>+91 88777 37777</div>
            <div> +91 88777 5666</div>
          </div>
        </a>
        <a
          href="#"
          className="text-gray-700 block px-4 py-2 text-sm"
          role="menuitem"
          tabIndex="-1"
        >
          <div className=" text-blue-600 ml-2">
            <div>support@silverbullet.in</div>
            <div>info@silverbullet.in</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Supportdrop;
