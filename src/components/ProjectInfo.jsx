import React, { useEffect, useRef, useState } from "react";
import { FaArrowUp, FaGithub } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { designProjects, mobProjects, webProjects } from "../constants";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ProjectInfo = ({ domainType }) => {
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    // const projCards = [
    //   project1Ref.current,
    //   project2Ref.current,
    //   project3Ref.current,
    // ];
    // projCards.forEach((card, index) => {
    //   gsap.fromTo(
    //     card,
    //     {
    //       y: 50,
    //       opacity: 0,
    //     },
    //     {
    //       y: 0,
    //       opacity: 1,
    //       duration: 1,
    //       // delay: 0.3 * (index + 1),
    //       scrollTrigger: {
    //         trigger: card,
    //         start: "top bottom-=100",
    //       },
    //     }
    //   );
    // });

    // / Float animation for each icon
    gsap.to(".tech-grid-icon", {
      y: -10, // Float up
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        each: 0.2,
        from: "random", // Random start times
      },
    });

    // Gentle rotation
    gsap.to(".tech-grid-icon img", {
      rotation: 5,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.3,
    });
  }, []);

  const chosenDomProj =
    domainType === "web"
      ? webProjects
      : domainType === "mobile"
        ? mobProjects
        : designProjects;

  return domainType === "web" ? (
    <div className="bg-white dark:bg-black flex flex-col gap-8">
      {chosenDomProj.map((proj, ind) => (
        <div key={ind} className="w-full">
          <div>
            <div className="flex justify-between mb-3">
              <h2 className="text-lg md:text-2xl font-bold text-black-200 dark:text-white-200">
                {proj.title}
              </h2>
              <div className=" flex items-center justify-center gap-6 -mb-[0.75rem]">
                <a
                  className={`cursor-pointer font-medium  relative overflow-hidden group text-black-200 dark:text-white-200 flex gap-1 items-center justify-center`}
                  href={proj.link.githubLink}
                  target="_blank"
                >
                  <p className="text-base md:text-lg ml-0">Github</p>

                  <FaArrowUp className="rotate-45" size={15} />
                  <div className="w-[100%] absolute left-0 bottom-0 h-[0.08rem] bg-black dark:bg-white -translate-x-[102%] group-hover:translate-x-0 transition-transform duration-200"></div>
                </a>
                <a
                  className={`cursor-pointer font-medium relative overflow-hidden group text-black-200 dark:text-white-200 text-xl flex gap-1 items-center justify-center`}
                  href={proj.link.demoLink}
                  target="_blank"
                >
                  <p className="text-base md:text-lg ml-0">Demo</p>

                  <FaArrowUp className="rotate-45" size={15} />
                  <div className="w-[100%] absolute left-0 bottom-0 h-[0.08rem] bg-black dark:bg-white -translate-x-[102%] group-hover:translate-x-0 transition-transform duration-200"></div>
                </a>
              </div>
            </div>
            <div>
              {/* <div className="bg-yellow-400 sm:bg-red-400 md:bg-green-400 lg:bg-blue-500 xl:bg-purple-500 2xl:bg-indigo-500 grid grid-cols-2 grid-rows-4 lg:grid-cols-3 lg:grid-rows-3 gap-2 max-h-[90vh]" /> */}
              <div className="grid grid-cols-2 grid-rows-5 sm:grid-cols-3 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-3 gap-2 max-h-[90vh] sm:max-h-[90vh] lg:max-h-[90vh]">
                <div className="col-span-2 row-span-1 sm:row-span-1 sm:col-span-3 lg:col-span-2 lg:row-span-2 first-project-wrapper">
                  <div className="thumbnail-img-wrapper bg-white-50 dark:bg-black-50 bento-radius">
                    <img
                      className="thumbnail-img"
                      src={proj.thumbnail}
                      alt={`${proj.title} thumbnail image`}
                    />
                  </div>
                </div>
                <div className="row-start-2 row-span-1 col-span-2 sm:row-start-2 sm:col-start-3 sm:col-span-1 sm:row-span-1 lg:row-start-3 lg:col-start-1 lg:col-span-1 bg-white-50 dark:bg-black-50 p-5 bento-radius">
                  <p className="text-base lg:text-lg text-black-400 dark:text-white-400">
                    {proj.description}
                  </p>
                </div>

                {/* half image */}
                <div className=" overflow-hidden row-start-3 col-start-2 row-span-1 col-span-1 sm:row-start-3 sm:row-span-1 sm:col-span-2 lg:row-start-3 lg:col-span-1 lg:col-start-2 bg-white-50 dark:bg-black-50 relative bento-radius">
                  <img
                    className="absolute w-full h-full scale-200 left-20 top-12 md:top-28 md:left-40 lg:top-16 lg:left-28 xl:left-28 xl:top-32 object-contain xl:scale-[300%] 2xl:scale-200"
                    src={proj.image}
                    alt={`${proj.title} image`}
                  />
                  {/* <div className="absolute inset-0 bg-white/20 dark:bg-black/20 z-10"></div> */}
                </div>
                <div className="row-start-3 row-span-1 col-span-1 sm:row-start-3 sm:col-start-3 sm:row-span-1 sm:col-span-1 lg:col-start-3 lg:row-start-1 bg-white-50 dark:bg-black-50  flex items-center justify-center bento-radius">
                  <img
                    className="w-[60%]"
                    src={proj.logo}
                    alt={`${proj.title} logo image`}
                  />
                </div>
                <div className="row-start-4 row-span-2 col-span-2 sm:row-start-2 sm:row-span-1 sm:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-2 flex justify-center items-center bg-white-50 dark:bg-black-50 bento-radius">
                  <div className="relative w-full h-full p-6 overflow-hidden">
                    <h3 className="text-lg lg:text-xl font-bold text-black-200 dark:text-white-200 text-center mb-4 lg:mb-8">
                      Tech Stack Used
                    </h3>

                    {/* 3x3 or 4x3 Grid */}
                    <div className="grid grid-cols-4 lg:grid-cols-4 gap-3 lg:gap-4 h-[calc(100%-4rem)] place-items-center">
                      {proj.projectIcons.map((tech) => (
                        <div
                          key={tech.name}
                          className="tech-grid-icon flex flex-col items-center justify-center"
                        >
                          <div className="p-2 lg:p-3 rounded-full border border-white-200/70 dark:border-black-200 hover:border-black-600 dark:hover:border-white-600 hover:bg-white-50 dark:hover:bg-black-50 transition-all duration-300">
                            <img
                              src={tech.image}
                              alt={`${tech.name} image`}
                              className="size-7 sm:size-8 lg:size-9"
                            />
                          </div>
                          <span className="text-xs lg:text-sm mt-2 text-black-200 dark:text-white-200 font-medium">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${ind === 0 && "w-full mt-12 bg-black-50/15 dark:bg-white-50/15 h-[0.03rem]"}`}
          />
        </div>
      ))}
    </div>
  ) : (
    <div className="bg-white dark:bg-black flex flex-col gap-10">
      {chosenDomProj.map((proj, ind) => (
        <div key={ind} className="w-full">
          <div>
            <div className="flex justify-between items-end mb-3">
              <h2 className="text-lg md:text-2xl min-w-fit font-bold text-black-200 dark:text-white-200">
                {proj.title}
              </h2>
              {/* <div className="w-full mx-2 mb-1 h-[0.03rem] bg-white-50/25" /> */}
              <div className=" flex items-center justify-center gap-6 -mb-1">
                {domainType !== "design" && (
                  <a
                    className={`cursor-pointer relative font-medium overflow-hidden group text-black-200 dark:text-white-200 text-xl flex gap-1 items-center justify-center`}
                    href={proj.link.githubLink}
                    target="_blank"
                  >
                    <p className="text-base md:text-lg ml-0">Github</p>

                    <FaArrowUp className="rotate-45" size={15} />
                    <div className="w-[100%] absolute left-0 bottom-0 h-[0.1rem] bg-black dark:bg-white -translate-x-[102%] group-hover:translate-x-0 transition-transform duration-200"></div>
                  </a>
                )}
                {domainType === "design" ? (
                  <a
                    className="cursor-pointer relative font-medium overflow-hidden group text-black-200 dark:text-white-200 text-xl flex gap-1 items-center justify-center"
                    href={proj.title === "SafeTrack" ? "/safetrack" : "/hrms"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-base md:text-lg ml-0">Case Study</p>

                    <FaArrowUp className="rotate-45" size={15} />
                    <div className="w-[100%] absolute left-0 bottom-0 h-[0.1rem] bg-black dark:bg-white -translate-x-[102%] group-hover:translate-x-0 transition-transform duration-200"></div>
                  </a>
                ) : (
                  <a
                    className="cursor-pointer relative font-medium overflow-hidden group text-black-200 dark:text-white-200 text-xl flex gap-1 items-center justify-center"
                    href={proj.link.demoLink}
                    target="_blank"
                  >
                    <p className="text-base md:text-lg ml-0">Demo</p>

                    <FaArrowUp className="rotate-45" size={15} />
                    <div className="w-[100%] absolute left-0 bottom-0 h-[0.1rem] bg-black dark:bg-white -translate-x-[102%] group-hover:translate-x-0 transition-transform duration-200"></div>
                  </a>
                )}
              </div>
            </div>
            <div>
              {/* <div className="bg-yellow-400 sm:bg-red-400 md:bg-green-400 lg:bg-blue-500 xl:bg-purple-500 2xl:bg-indigo-500 grid grid-cols-2 grid-rows-4 lg:grid-cols-3 lg:grid-rows-3 gap-2 max-h-[90vh]" /> */}
              <div className="grid grid-cols-2 grid-rows-4 lg:grid-cols-3 lg:grid-rows-3 gap-2 max-h-[90vh]">
                <div className="col-span-2 row-span-1 sm:row-span-2 lg:col-span-2 lg:row-span-2 first-project-wrapper">
                  <div className="thumbnail-img-wrapper bg-white-50 dark:bg-black-50 bento-radius">
                    <img
                      className="thumbnail-img"
                      src={proj.thumbnail}
                      alt={`${proj.title} thumbnail image`}
                    />
                  </div>
                </div>
                <div className="row-start-2 row-span-1 col-span-2 sm:row-start-3 sm:col-span-1 sm:col-start-2 lg:row-start-3 lg:col-start-1 lg:col-span-1 bg-white-50 dark:bg-black-50 p-5 bento-radius">
                  <p className="text-base lg:text-lg text-black-400 dark:text-white-400">
                    {proj.description}
                  </p>
                </div>

                {/* half image */}
                <div className=" overflow-hidden row-start-3 gap-0 row-span-1 col-span-1 sm:row-start-4 sm:col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-2 flex justify-center items-center bg-white-50 dark:bg-black-50 relative bento-radius">
                  <img
                    className={`absolute w-full h-full object-contain ${proj.title === "HRMS" ? " scale-200 left-20 top-10 md:top-24 md:left-32 lg:scale-[250%] lg:top-20 lg:left-44 xl:scale-[200%] xl:left-32 xl:top-24 object-contain 2xl:scale-[250%] 2xl:left-60 2xl:top-24" : "  inset-0 scale-[175%] md:scale-[150%] lg:scale-[170%] xl:scale-[130%] 2xl:scale-[170%]"} `}
                    src={proj.image}
                    alt={`${proj.title} image`}
                  />
                  {/* <div className="absolute inset-0 bg-white/20 dark:bg-black/20 z-10"></div> */}
                </div>

                <div className="row-start-4 row-span-1 col-span-2 sm:row-start-3 sm:col-span-1 lg:col-start-3 lg:row-start-1 bg-white-50 dark:bg-black-50  flex items-center justify-center bento-radius">
                  <img
                    className="w-[70%]"
                    src={proj.logo}
                    alt={`${proj.title} logo image`}
                  />
                </div>
                <div className="row-start-3 col-start-2 row-span-1 col-span-1 sm:row-start-4 lg:row-start-3 lg:col-start-2 bg-white-50 dark:bg-black-50 relative overflow-hidden bento-radius">
                  <div className="relative w-full h-full p-4 overflow-hidden">
                    <h3 className="text-lg md:text-xl font-bold text-black-200 dark:text-white-200 text-center mb-6">
                      Tech Stack Used
                    </h3>

                    {/* 3x3 or 4x3 Grid */}
                    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4  gap-4 h-[calc(100%-4rem)] place-items-center">
                      {proj.projectIcons.map((tech) => (
                        <div
                          key={tech.name}
                          className="tech-grid-icon flex flex-col items-center justify-center"
                        >
                          <div className="p-2 sm:p-3 rounded-full border border-white-200/70 dark:border-black-200 hover:border-black-600 dark:hover:border-white-600 hover:bg-white-50 dark:hover:bg-black-50 transition-all duration-300">
                            <img
                              src={tech.image}
                              alt={`${tech.name} image`}
                              className="size-6 sm:size-7 lg:size-9"
                            />
                          </div>
                          <span className="sm:whitespace-nowrap text-xs lg:text-sm mt-2 text-center text-black-200 dark:text-white-200 font-medium">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${ind === 0 && "w-full mt-12 bg-white-200 dark:bg-black-200 h-[0.03rem]"}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectInfo;
