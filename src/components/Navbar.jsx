import React, { useState } from "react";
import {
  HomeIcon,
  BriefcaseIcon,
  CodeBracketSquareIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

function Navbar() {
  const [active, setActive] = useState("home");
  const [isDark, setIsDark] = useState(true);

  return (
    <div className="relative">
      {/* <div className="wrapper-card border-2 border-green-300 box-border rounded-full flex items-center justify-center"> */}
      <div className="bg-[#1a1a1a] border-[1.4px] border-[#363636] rounded-full w-fit flex h-[46px] px-[3px] sm:px-[0px] sm:py-[3px] py-[2px] items-center justify-center">
        <a
          onClick={() => setActive("home")}
          // { active == "home" && "hover:w-[70px]" }
          className={` 
          hover:w-[70px] h-full w-[44px] transition-all duration-500 flex flex-col items-center justify-center relative group`}
          href="#home"
        >
          <span className="text-[10px] infoTip absolute -top-9 opacity-0 bg-[#323232] text-white px-2 py-1 rounded-md group-hover:opacity-100 transition-opacity z-20">
            Home
          </span>
          <div
            className={`${
              active === "home" ? "bg-[#353535] " : ""
            }  rounded-full p-[8px] text-white flex items-center justify-center relative`}
          >
            <HomeIcon
              style={{ height: 19, width: 19 }}
              className="sm:size-[18px]"
            />

            {/* {active !== "home" && (
              <span className="opacity-0 group-hover:opacity-100 absolute w-[22px] top-[34px] h-[1.2px] bg-white "></span>
            )} */}
          </div>
        </a>

        <a
          onClick={() => setActive("projects")}
          className={` hover:w-[70px] h-full w-[50px]  transition-all duration-500 flex flex-col items-center justify-center relative group`}
          href="#projects"
        >
          <span className="text-[10px] infoTip absolute -top-9 opacity-0 bg-[#323232] text-white px-2 py-1 rounded-md group-hover:opacity-100 transition-opacity z-20">
            Project
          </span>
          <div
            className={`${
              active === "projects" ? "bg-[#353535] " : ""
            } rounded-full p-[8px] text-white flex items-center justify-center relative`}
          >
            <BriefcaseIcon
              style={{ height: 19, width: 19 }}
              className="sm:size-[18px]"
            />
            {/* {active !== "projects" && (
              <span className="opacity-0 group-hover:opacity-100 absolute w-[22px] top-[34px] h-[1.2px] bg-white "></span>
            )} */}
          </div>
        </a>

        <a
          onClick={() => setActive("skills")}
          className={`hover:w-[70px] h-full w-[50px]  transition-all duration-500 flex flex-col items-center justify-center relative group`}
          href="#skills"
        >
          <span className="text-[10px] infoTip absolute -top-9 opacity-0 bg-[#323232] text-white px-2 py-1 rounded-md group-hover:opacity-100 transition-opacity z-20">
            Skills
          </span>
          <div
            className={`${
              active === "skills" ? "bg-[#353535] " : ""
            }  rounded-full p-[8px] text-white flex items-center justify-center relative`}
          >
            <CodeBracketSquareIcon
              style={{ height: 19, width: 19 }}
              className="sm:size-[18px]"
            />
            {/* {active !== "skills" && (
              <span className="opacity-0 group-hover:opacity-100 absolute w-[22px] top-[34px] h-[1.2px] bg-white "></span>
            )} */}
          </div>
        </a>

        <a
          onClick={() => setActive("contact")}
          className={`hover:w-[70px] h-full w-[50px]  transition-all duration-500 flex flex-col items-center justify-center relative group`}
          href="#contact"
        >
          <span className="text-[10px] infoTip absolute -top-9 opacity-0 bg-[#323232] text-white px-2 py-1 rounded-md group-hover:opacity-100 transition-opacity z-20">
            Contact
          </span>
          <div
            className={`${
              active === "contact" ? "bg-[#353535] " : ""
            }  rounded-full p-[8px] text-white flex items-center justify-center relative`}
          >
            <PhoneIcon
              style={{ height: 19, width: 19 }}
              className="sm:size-[20px]"
            />
            {/* {active !== "contact" && (
              <span className="opacity-0 group-hover:opacity-100 absolute w-[22px] top-[34px] h-[1.2px] bg-white "></span>
            )} */}
          </div>
        </a>
      </div>
    </div>
    // </div>
  );
}

export default Navbar;
