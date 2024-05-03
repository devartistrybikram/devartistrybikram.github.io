import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Cards({ number, title, children, icon }) {
  return (
    <div className="overflow-hidden relative text-center bg-white rounded text-slate-500 border hover:border-amber-300 shadow-sm hover:shadow-md hover:shadow-slate-200">
      <div className={`p-6 text-left relative before:content-['${number}'] before:absolute before:top-3 before:right-3 before:text-nowrap before:text-2xl before:font-black before:stroke-2 before:text-amber-500`}>
        <span className="text-amber-500 rounded-full">
          <FontAwesomeIcon icon={icon} className="w-8 h-8" />
        </span>
        <div className="my-2 text-xl font-medium text-nowrap text-amber-500">
          {title}
        </div>
        <p className="text-justify text-base font-normal">{number + children}</p>
      </div >
    </div >
  );
}
