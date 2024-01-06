import {BsChevronDown} from "react-icons/bs";
import React from "react";

export default function Welcome(props: { hook: string, name: string, role: string }) {
  return (
    <div className="h-screen flex items-center justify-center text-center">
      <div>
        <div className="text-xl font-semibold text-gray-600">{props.hook}</div>
        <div className="text-4xl font-bold text-black-700 mb-2">{props.name}</div>
        <div className="text-lg text-gray-500">{props.role}</div>
        <button className="mt-4 rounded-md p-2 border border-gray-600">
          <BsChevronDown></BsChevronDown>
        </button>
      </div>
    </div>
  );
}