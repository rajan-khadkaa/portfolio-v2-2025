import React from "react";
import { HiOutlineDownload } from "react-icons/hi";

const SecondaryButton = ({ text, className, btnClick, icon }) => {
  return (
    <button
      onClick={btnClick}
      className={`${className} group overflow-hidden border border-black-900 dark:border-white-900 text-base flex items-center justify-center h-full min-w-fit whitespace-nowrap`}
    >
      {icon ? (
        <a
          href={"/Rajan_Khadka_Resume.pdf"}
          target="_blank"
          className="transition-colors font-medium duration-300 cursor-pointer bg-none text-black-100 dark:text-white-100 hover:bg-white-100 dark:hover:bg-black-100 px-4 md:px-6 py-4 h-full w-full flex items-center justify-center"
        >
          {text}
        </a>
      ) : (
        <p className="transition-colors font-medium duration-300 cursor-pointer bg-none text-black-100 dark:text-white-100 hover:bg-white-100 dark:hover:bg-black-100 px-4 md:px-6 py-4 h-full w-full flex items-center justify-center">
          {text}
        </p>
      )}

      {icon && (
        <span className="w-1 h-6 text-xs group-hover:text-white dark:group-hover:text-black bg-white-200 dark:bg-black-400 group-hover:bg-white dark:group-hover:bg-black"></span>
      )}
      {icon && (
        <a
          href="/Rajan-Khadka-Resume.pdf"
          download="Rajan-Khadka-Resume.pdf"
          className="transition-colors text-black-400 dark:text-white-400 flex items-center justify-center size-full duration-300 cursor-pointer bg-none hover:bg-white-100 dark:hover:bg-black-200 rotate-0 px-4 py-4"
        >
          <HiOutlineDownload size={21} />
        </a>
      )}
    </button>
  );

  //STACKED VERTICALLY
  // return (
  //   <div
  //     className={`${className} group overflow-hidden border border-white/35 text-base flex items-center h-full min-w-fit w-fit whitespace-nowrap`}
  //   >
  //     <a
  //       href="/Rajan-Khadka-Resume.pdf"
  //       target="_blank"
  //       className="transition-colors duration-300 cursor-pointer bg-none hover:bg-black-200 px-4 py-4 h-full flex items-center justify-center"
  //     >
  //       {text}
  //     </a>
  //     <span className="w-1 h-6 text-white/50 text-xs group-hover:text-black bg-white/50 group-hover:bg-black"></span>
  //     <a
  //       href="/Rajan-Khadka-Resume.pdf"
  //       download="Rajan-Khadka-Resume.pdf"
  //       className="transition-colors flex items-center justify-center size-full duration-300 cursor-pointer bg-none hover:bg-black-200 rotate-0 px-4 py-4"
  //     >
  //       <HiOutlineDownload size={22} />
  //     </a>
  //   </div>
  // );

  //OLD WORKING ONE
  // return (
  //   <div
  //     className={`${className} group border-2 border-black-200 w-fit overflow-hidden group text-base flex items-center rounded-lg h-[103%] md:h-full`}
  //   >
  //     <a
  //       href="/Rajan-Khadka-Resume.pdf"
  //       target="_blank"
  //       className=" transition-colors duration-300 cursor-pointer bg-none hover:bg-black-200 pl-7 pr-4 py-4 h-full"
  //       // className=" transition-colors duration-300 cursor-pointer bg-none hover:bg-black-200 pl-7 pr-4 py-4 h-full"
  //       // className=" transition-colors duration-300 cursor-pointer bg-black-100 hover:bg-black-400 pl-7 pr-4 py-4 h-full"
  //     >
  //       {text}
  //     </a>
  //     <span className="w-1 h-[44%] bg-white/60 group-hover:bg-black"></span>
  //     <a
  //       href="/Rajan-Khadka-Resume.pdf"
  //       download="Rajan-Khadka-Resume.pdf"
  //       className="transition-colors flex items-center justify-center size-full duration-300 cursor-pointer bg-none hover:bg-black-200 rotate-0 pl-4 pr-5 py-4"
  //       // className="transition-colors flex items-center justify-center size-full duration-300 cursor-pointer hover:bg-black-200 rotate-0 pl-4 pr-5 py-4"
  //     >
  //       {/* <FaArrowUp className="transition-all duration-300 -translate-y-[2px] group-hover:-translate-y-2  size-4" /> */}
  //       {/* <FaArrowDown /> */}
  //       {/* <HiDownload size={24} /> */}
  //       <HiOutlineDownload size={22} />
  //     </a>
  //   </div>
  // );
};

export default SecondaryButton;
