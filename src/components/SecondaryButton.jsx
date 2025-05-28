import React from "react";
import { FaArrowDown, FaArrowRight, FaArrowUp } from "react-icons/fa6";

const SecondaryButton = ({ text, className }) => {
  return (
    <div
      className={`${className} w-fit overflow-hidden group uppercase flex items-center rounded-lg h-full`}
    >
      <div className=" transition-colors duration-300 cursor-pointer hover:bg-black-50 pl-7 pr-4 py-4 h-full">
        {text}
      </div>
      <span className="w-3 lg:w-1 h-[44%] bg-white/60"></span>
      <div className="transition-colors flex items-center justify-center size-full duration-300 cursor-pointer hover:bg-black-50 rotate-0 pl-4 pr-5 py-4">
        {/* <FaArrowUp className="transition-all duration-300 -translate-y-[2px] group-hover:-translate-y-2  size-4" /> */}
        <FaArrowDown />
      </div>
    </div>
  );
};

export default SecondaryButton;
