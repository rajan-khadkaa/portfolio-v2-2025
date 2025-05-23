import React from "react";
import { FaArrowUp, FaGithub } from "react-icons/fa6";

const BentoLink = ({ github, demo, hover, gitlink }) => {
  return (
    <div className="top-icons-div  flex gap-2 justify-center items-center absolute z-20 p-3 bg-black right-0 top-0 rounded-bl-4xl  ">
      {gitlink && (
        <a
          className="p-2 cursor-pointer rounded-full bg-white-50 text-black flex items-center justify-center"
          href={github}
          target="_blank"
        >
          {" "}
          <FaGithub size={18} />
        </a>
      )}

      <a
        className="p-2 cursor-pointer rotate-45 rounded-full bg-white-50 text-black flex items-center justify-center"
        href={demo}
        target="_blank"
      >
        {" "}
        <FaArrowUp
          className={`${
            hover && "animate-bounce translate-x-[0px] translate-y-1"
          }`}
          size={18}
        />
      </a>
    </div>
  );
};

export default BentoLink;
