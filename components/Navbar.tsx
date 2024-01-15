import React from 'react';
import NavbarPopupMenu from "@/components/NavbarPopupMenu";

export default function Navbar() {
  const options = ['Welcome', 'Experience', 'Projects', 'Contact'];

  return (
    <div className="bg-gray-600 p-4 fixed top-0 w-full">
      <div className="flex justify-between items-center">
        <div className="md:hidden">
          <NavbarPopupMenu options={options}/>
        </div>

        <div className="hidden md:flex space-x-4">
          {options.map((e, i) =>
            <a key={i} href="#" className="text-white hover:text-gray-300">{e}</a>
          )}
        </div>

        <button className="text-white hover:text-gray-300">Resume</button>
      </div>
    </div>
  );
}