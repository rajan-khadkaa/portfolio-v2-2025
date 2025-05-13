import React, { useEffect, useRef, useState } from "react";
import { FaArrowUp, FaGithub } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { firstProjIcons, secondProjIcons, thirdProjIcons } from "../constants";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import BentoLink from "./BentoLink";

gsap.registerPlugin(ScrollTrigger);

const ProjectInfo = ({ domainProjects }) => {
  const [infoBox1, setInfoBox1] = useState(false);
  const [infoBox2, setInfoBox2] = useState(false);
  const [infoBox3, setInfoBox3] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
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
    //       delay: 0.3 * (index + 1),
    //       scrollTrigger: {
    //         trigger: card,
    //         start: "top bottom-=100",
    //       },
    //     }
    //   );
    // });
  }, []);

  return (
    <>
      {domainProjects.map((domProjects, index) => (
        <div key={index} className="showcaselayout">
          {/* TOP */}
          <div ref={project1Ref} className="first-project-wrapper">
            <div
              onMouseEnter={() => setHovered1(true)}
              onMouseLeave={() => setHovered1(false)}
              className="image-wrapper info-hover-box overflow-hidden group relative"
            >
              {/* OVERLAY-INFO ON HOVER */}
              <div
                className={`top-text-content ${
                  hovered1 ? "translate-x-0" : "-translate-x-[100%]"
                }`}
              >
                {/* OVERLAY-INFO WITH BUTTON */}
                {/* <div
            className={`top-text-content ${
              infoBox1 ? "translate-x-0" : "-translate-x-[100%]"
            }`}
          > */}
                <div className="info-container">
                  <div className="h-full">
                    <div className="flex flex-col items-start  p-8 rounded-2xl">
                      <div className="flex gap-6 items-center">
                        <h2 className="text-3xl font-bold">
                          {domProjects.project1.title}
                        </h2>
                        {/* <a
                      className="size-14 rounded-full bg-zinc-800 hover:bg-zinc-600 transition-colors duration-200 flex items-center justify-center"
                      href="https://github.com/rajan-khadkaa/plan-it"
                      target="_blank"
                    >
                      {" "}
                      <FaGithub size={24} />
                    </a> */}
                      </div>

                      <p className="text-gray-400 mt-2 md:text-xl">
                        {domProjects.project1.description}
                      </p>
                    </div>
                    <div className="flex h-fit flex-wrap w-full flex-row gap-6 p-8 rounded-2xl">
                      {domProjects.project1.projectIcons.map((proj) => (
                        <div
                          key={proj.name}
                          className="flex flex-col w-12 sm:w-14 md:w-18 lg:w-22 items-center gap-2"
                        >
                          <div className="used-tech size-12 sm:size-14 md:size-18 lg:size-18 p-2 md:p-4 rounded-full">
                            <img
                              className="size-full"
                              src={proj.image}
                              alt={proj.image}
                            />
                          </div>
                          <p>{proj.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* OVERLAY-INFO ON HOVER */}
                  <div
                    className={`transition-transform duration-300 border-2 opacity-0 view-info-div`}
                  >
                    {/* OVERLAY-INFO WITH BUTTON */}
                    {/* <div
                onClick={() => setInfoBox1((prev) => !prev)}
                className={`${
                  !infoBox1 && "-translate-x-[100%]"
                } cursor-pointer transition-transform duration-300 ${
                  hovered1 && "translate-x-0"
                } view-info-div`}
              > */}
                    {infoBox1 ? (
                      <MdKeyboardArrowDown size={24} />
                    ) : (
                      <MdKeyboardArrowUp
                        className="mt-1"
                        // className={`mt-1 ${"animate-bounce"}`}
                        size={24}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* THUMBNAIL CONTENTS */}
              <div className="w-full  border-2 border-blue-400 h-[80vh] overflow-hidden rounded-2xl">
                <img
                  className="thumbnail-img object-cover w-full "
                  src={domProjects.project1.thumbnail}
                  alt="Planit-webapp"
                />
              </div>

              {/* TOP CORNER ICONS */}
              <BentoLink
                gitlink={domProjects.glink}
                github={domProjects.project1.link.githubLink}
                demo={domProjects.project1.link.projLink}
                hover={hovered1}
              />
            </div>
          </div>
          {/* BOTTOM */}
          <div className="project-list-wrapper h-[60vh]">
            {/* SECOND PROJECT */}
            <div
              ref={project2Ref}
              className="project w-full overflow-hidden h-full"
            >
              <div
                onMouseEnter={() => setHovered2(true)}
                onMouseLeave={() => setHovered2(false)}
                className="image-wrapper-bottom overflow-hidden relative group"
              >
                {/* OVERLAY-INFO ON HOVER */}
                <div
                  className={`top-text-content-bottom ${
                    hovered2 ? "translate-x-0" : "-translate-x-[100%]"
                  }`}
                >
                  {/* OVERLAY-INFO WITH BUTTON */}
                  {/* <div
              className={`top-text-content-bottom ${
                infoBox2 ? "translate-x-0" : "-translate-x-[100%]"
              }`}
            > */}
                  <div className="info-container-bottom flex flex-row">
                    <div className="h-full">
                      <div className="flex flex-col items-start  p-8 rounded-2xl">
                        <div className="flex gap-6 items-center">
                          <h2 className="text-3xl font-bold">
                            {domProjects.project2.title}
                          </h2>
                        </div>

                        <p className="text-gray-400 mt-2 md:text-xl">
                          {domProjects.project2.description}
                        </p>
                      </div>
                      <div className="flex h-fit flex-wrap w-full flex-row gap-6 p-8 rounded-2xl">
                        {domProjects.project2.projectIcons.map((proj) => (
                          <div
                            key={proj.name}
                            className="flex flex-col w-12 sm:w-14 md:w-18 lg:w-22 items-center gap-2"
                          >
                            <div className="used-tech size-12 sm:size-14 md:size-18 lg:size-18 p-2 md:p-4 rounded-full">
                              <img
                                className="size-full"
                                src={proj.image}
                                alt={proj.image}
                              />
                            </div>
                            <p>{proj.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* OVERLAY-INFO ON HOVER */}
                    <div
                      className={`transition-transform duration-300 border-2 opacity-0 view-info-div-bottom`}
                    >
                      {/* OVERLAY-INFO WITH BUTTON */}
                      {/* <div
                  onClick={() => setInfoBox2((prev) => !prev)}
                  className={`${
                    !infoBox2 && "-translate-x-[100%]"
                  } cursor-pointer transition-transform duration-300 ${
                    hovered2 && "translate-x-0"
                  } view-info-div-bottom`}
                > */}
                      {infoBox2 ? (
                        <MdKeyboardArrowDown size={24} />
                      ) : (
                        <MdKeyboardArrowUp
                          className="mt-1"
                          // className={`mt-1 ${"animate-bounce"}`}
                          size={24}
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* THUMBNAIL CONTENTS */}
                <div className="w-full  border-2 border-red-400 overflow-hidden rounded-2xl">
                  <img
                    className="thumbnail-img object-cover w-full "
                    src={domProjects.project2.thumbnail}
                    alt="Planit-webapp"
                  />
                </div>
                {/* TOP CORNER ICONS */}
                <BentoLink
                  gitlink={domProjects.glink}
                  github={domProjects.project2.link.githubLink}
                  demo={domProjects.project2.link.projLink}
                  hover={hovered2}
                />
              </div>
            </div>
            {/* THIRD PROJECT */}
            <div
              ref={project3Ref}
              className="project w-full overflow-hidden h-full"
            >
              <div
                onMouseEnter={() => setHovered3(true)}
                onMouseLeave={() => setHovered3(false)}
                className="image-wrapper-bottom overflow-hidden relative group"
              >
                {/* OVERLAY-INFO ON HOVER */}
                <div
                  className={`top-text-content-bottom ${
                    hovered3 ? "translate-x-0" : "-translate-x-[100%]"
                  }`}
                >
                  {/* OVERLAY-INFO WITH BUTTON */}
                  {/* <div
              className={`top-text-content-bottom ${
                infoBox3 ? "translate-x-0" : "-translate-x-[100%]"
              }`}
            > */}
                  <div className="info-container-bottom flex flex-row">
                    <div className="h-full">
                      <div className="flex flex-col items-start  p-8 rounded-2xl">
                        <div className="flex gap-6 items-center">
                          <h2 className="text-3xl font-bold">
                            {domProjects.project3.title}
                          </h2>
                        </div>

                        <p className="text-gray-400 mt-2 md:text-xl">
                          {domProjects.project3.description}
                        </p>
                      </div>
                      <div className="flex h-fit flex-wrap w-full flex-row gap-6 p-8 rounded-2xl">
                        {domProjects.project3.projectIcons.map((proj) => (
                          <div
                            key={proj.name}
                            className="flex flex-col w-12 sm:w-14 md:w-18 lg:w-22 items-center gap-2"
                          >
                            <div className="used-tech size-12 sm:size-14 md:size-18 lg:size-18 p-2 md:p-4 rounded-full">
                              <img
                                className="size-full"
                                src={proj.image}
                                alt={proj.image}
                              />
                            </div>
                            <p>{proj.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* OVERLAY-INFO ON HOVER */}
                    <div
                      className={`transition-transform duration-300 border-2 opacity-0 view-info-div-bottom`}
                    >
                      {/* OVERLAY-INFO WITH BUTTON */}
                      {/* <div
                  onClick={() => setInfoBox3((prev) => !prev)}
                  className={`${
                    !infoBox3 && "-translate-x-[100%]"
                  } cursor-pointer transition-transform duration-300 ${
                    hovered3 && "translate-x-0"
                  } view-info-div-bottom`}
                > */}
                      {infoBox3 ? (
                        <MdKeyboardArrowDown size={24} />
                      ) : (
                        <MdKeyboardArrowUp
                          className="mt-1"
                          // className={`mt-1 ${"animate-bounce"}`}
                          size={24}
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* THUMBNAIL CONTENTS */}
                <div className="w-full overflow-hidden border-2 border-green-400 rounded-2xl">
                  <img
                    className="thumbnail-img object-cover w-full"
                    src={domProjects.project3.thumbnail}
                    alt="Planit-webapp"
                  />
                </div>
                {/* TOP CORNER ICONS */}
                <BentoLink
                  gitlink={domProjects.glink}
                  github={domProjects.project3.link.githubLink}
                  demo={domProjects.project3.link.projLink}
                  hover={hovered3}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectInfo;
