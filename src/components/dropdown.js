import React from "react";

const DropdownContent = () => {
  return (
    <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div className="py-1" role="none">
        <a
          href="#"
          className="text-gray-700 block px-4 py-2 text-sm"
          role="menuitem"
          tabIndex="-1"
        >
          My Profile
        </a>
        <a
          href="#"
          className="text-gray-700 block px-4 py-2 text-sm"
          role="menuitem"
          tabIndex="-1"
        >
          My FDs
        </a>
        <a
          href="#"
          className="text-gray-700 block px-4 py-2 text-sm"
          role="menuitem"
          tabIndex="-1"
        >
          My Transactions
        </a>
        <form method="POST" action="#" role="none">
          <button
            type="submit"
            className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
            role="menuitem"
            tabIndex="-1"
          >
            Log out
          </button>
        </form>
      </div>
    </div>
  );
};

export default DropdownContent;
