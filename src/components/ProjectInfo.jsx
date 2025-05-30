import React, { useEffect, useRef, useState } from "react";
import { FaArrowUp, FaGithub } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import BentoLink from "./BentoLink";
import ProjectIcons from "./ProjectIcons";

gsap.registerPlugin(ScrollTrigger);

const ProjectInfo = ({ domainProjects }) => {
  //three infoBox required for btn click info box
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
    const projCards = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    projCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          // delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
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
              className="image-wrapper info-hover-box group relative"
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
                  <div className="h-full p-6 lg:p-8">
                    <div className="flex flex-col px-0 pb-5 pt-2 lg:pb-8 lg:px-2 lg:pt-0 items-start">
                      {/* <div className="flex flex-col mb-4 lg:mb-8 items-start rounded-2xl"> */}
                      <div className="flex gap-6 items-center">
                        <h2 className="text-2xl font-bold">
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

                      <p className="text-gray-400 mt-2 md:text-lg">
                        {domProjects.project1.description}
                      </p>
                    </div>
                    <div className="flex h-[50%] overflow-auto scrollbar-thin flex-wrap w-full flex-row gap-x-6 gap-y-4 lg:px-2">
                      {domProjects.project1.projectIcons.map((proj) => (
                        <ProjectIcons
                          key={proj.name}
                          name={proj.name}
                          image={proj.image}
                        />
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
              <div className="thumbnail-img-wrapper">
                <img
                  className="thumbnail-img"
                  src={domProjects.project1.thumbnail}
                  alt="Planit-webapp"
                />
              </div>

              {/* TOP CORNER ICONS */}
              <BentoLink
                gitlink={domProjects.glink}
                github={domProjects.project1.link.githubLink}
                demo={domProjects.project1.link.demoLink}
                hover={hovered1}
              />
            </div>
          </div>
          {/* BOTTOM */}
          <div className="project-list-wrapper">
            {/* SECOND PROJECT */}
            <div ref={project2Ref} className="project w-full overflow-hidden">
              <div
                onMouseEnter={() => setHovered2(true)}
                onMouseLeave={() => setHovered2(false)}
                className="image-wrapper-bottom relative group"
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
                    <div className="h-full p-6">
                      <div className="flex flex-col items-start px-0 pb-5 pt-2">
                        <div className="flex gap-6 items-center">
                          <h2 className="text-2xl font-bold">
                            {domProjects.project2.title}
                          </h2>
                        </div>

                        <p className="text-gray-400 mt-2 md:text-base">
                          {domProjects.project2.description}
                        </p>
                      </div>
                      <div className="flex h-[50%] overflow-auto scrollbar-thin flex-wrap w-full flex-row gap-x-6 gap-y-4">
                        {domProjects.project2.projectIcons.map((proj) => (
                          <ProjectIcons
                            key={proj.name}
                            name={proj.name}
                            image={proj.image}
                          />
                        ))}
                      </div>
                    </div>
                    {/* OVERLAY-INFO ON HOVER */}
                    <div
                      className={`transition-transform duration-300 opacity-0 view-info-div-bottom`}
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
                <div className="thumbnail-img-wrapper">
                  <img
                    className="thumbnail-img"
                    src={domProjects.project2.thumbnail}
                    alt="Planit-webapp"
                  />
                </div>
                {/* TOP CORNER ICONS */}
                <BentoLink
                  gitlink={domProjects.glink}
                  github={domProjects.project2.link.githubLink}
                  demo={domProjects.project2.link.demoLink}
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
                    <div className="h-full p-6">
                      <div className="flex flex-col items-start px-0 pb-5 pt-2">
                        <div className="flex gap-6 items-center">
                          <h2 className="text-2xl font-bold">
                            {domProjects.project3.title}
                          </h2>
                        </div>

                        <p className="text-gray-400 mt-2 md:text-base">
                          {domProjects.project3.description}
                        </p>
                      </div>
                      <div className="flex h-[50%] overflow-auto scrollbar-thin flex-wrap w-full flex-row gap-x-6 gap-y-4">
                        {domProjects.project3.projectIcons.map((proj) => (
                          <ProjectIcons
                            key={proj.name}
                            name={proj.name}
                            image={proj.image}
                          />
                        ))}
                      </div>
                    </div>
                    {/* OVERLAY-INFO ON HOVER */}
                    <div
                      className={`transition-transform duration-300 opacity-0 view-info-div-bottom`}
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
                <div className="thumbnail-img-wrapper">
                  <img
                    className="thumbnail-img"
                    src={domProjects.project3.thumbnail}
                    alt="Planit-webapp"
                  />
                </div>
                {/* TOP CORNER ICONS */}
                <BentoLink
                  gitlink={domProjects.glink}
                  github={domProjects.project3.link.githubLink}
                  demo={domProjects.project3.link.demoLink}
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
