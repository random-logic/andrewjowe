import React from 'react';
import NavbarPopupMenu from "@/components/NavbarPopupMenu";

export default function Navbar() {
  return (
    <div className="bg-gray-600 p-4 fixed top-0 w-full">
      <div className="flex justify-between items-center">
        <div className="md:hidden">
          <NavbarPopupMenu />
        </div>

        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300">Welcome</a>
          <a href="#" className="text-white hover:text-gray-300">Experiences</a>
          <a href="#" className="text-white hover:text-gray-300">Projects</a>
          <a href="#" className="text-white hover:text-gray-300">Contact</a>
        </div>

        <button className="text-white hover:text-gray-300">Resume</button>
      </div>
    </div>
  );
}