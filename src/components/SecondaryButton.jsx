import React from "react";
import { HiOutlineDownload } from "react-icons/hi";

const SecondaryButton = ({ text, className }) => {
  return (
    <div
      className={`${className} group border-2 border-black-200 w-fit overflow-hidden group text-base flex items-center rounded-lg h-[103%] md:h-full`}
    >
      <a
        href="/Rajan-Khadka-Resume.pdf"
        target="_blank"
        className=" transition-colors duration-300 cursor-pointer bg-none hover:bg-black-200 pl-7 pr-4 py-4 h-full"
        // className=" transition-colors duration-300 cursor-pointer bg-none hover:bg-black-200 pl-7 pr-4 py-4 h-full"
        // className=" transition-colors duration-300 cursor-pointer bg-black-100 hover:bg-black-400 pl-7 pr-4 py-4 h-full"
      >
        {text}
      </a>
      <span className="w-1 h-[44%] bg-white/60 group-hover:bg-black"></span>
      <a
        href="/Rajan-Khadka-Resume.pdf"
        download="Rajan-Khadka-Resume.pdf"
        className="transition-colors flex items-center justify-center size-full duration-300 cursor-pointer bg-none hover:bg-black-200 rotate-0 pl-4 pr-5 py-4"
        // className="transition-colors flex items-center justify-center size-full duration-300 cursor-pointer hover:bg-black-200 rotate-0 pl-4 pr-5 py-4"
      >
        {/* <FaArrowUp className="transition-all duration-300 -translate-y-[2px] group-hover:-translate-y-2  size-4" /> */}
        {/* <FaArrowDown /> */}
        {/* <HiDownload size={24} /> */}
        <HiOutlineDownload size={22} />
      </a>
    </div>
  );
};

export default SecondaryButton;
