import React from "react";
import { socialImgs } from "../constants";
import { ArrowUpIcon } from "@heroicons/react/16/solid";

const Footer = () => {
  return (
    <footer className="footer pb-10 lg:pb-0">
      <div className="flex-wrap flex-col md:flex-row gap-3 w-full flex justify-between">
        {/* <div className="footer-container border-2"> */}
        <div className="flex items-center justify-center md:justify-baseline min-w-fit">
          <p>© {new Date().getFullYear()} Rajan | All rights reserved.</p>
        </div>
        <div className="socials min-w-fit">
          {socialImgs.map((img) => (
            <a key={img.url} className="icon" target="_blank" href={img.url}>
              <img src={img.imgPath} alt="social icons" />
            </a>
          ))}
        </div>

        {/* <div className="flex items-center justify-end min-w-fit border-2">
          <a
            className="bg-zinc-900 flex flex-row items-center gap-2 p-5 rounded-full w-fit"
            href="#home"
          >
            <ArrowUpIcon className="size-6" />
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
