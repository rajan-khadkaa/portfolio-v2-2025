import React from "react";
import { DiGithub } from "react-icons/di";
import { FaArrowUp, FaGithub } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const InvertedBorder = ({ gitlink, demolink }) => {
  return (
    <div className="icons-div flex gap-2 justify-center items-center absolute p-2 bg-black right-0 top-0 rounded-bl-4xl ">
      {/* <a
        className="p-3 rounded-full bg-zinc-700 flex items-center justify-center"
        href={gitlink}
        target="_blank"
      >
        {" "}
        <FiGithub size={20} />
      </a> */}
      <a
        className="p-3 animate-bounce rotate-45 rounded-full bg-zinc-700 flex items-center justify-center"
        href={gitlink}
        target="_blank"
      >
        {" "}
        <FaArrowUp size={20} />
      </a>
    </div>
  );
};

export default InvertedBorder;
