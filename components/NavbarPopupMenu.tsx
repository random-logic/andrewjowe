'use client';

import React, {useState} from 'react';

export default function NavbarPopupMenu(params: {options : string[]}) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative flex">
      {/* Menu button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white p-2 rounded focus:outline-none"
      >
        &#9776;
      </button>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 filter z-50">
          <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-4 transform translate-x-0 space-y-2">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-800 p-2 focus:outline-none"
            >
              &#9776;
            </button>

            <ul className="pl-4 space-y-2">
              {params.options.map((e, i) =>
                <li key={i}>
                  <a href="#" className="text-black-500 hover:underline">{e}</a>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}