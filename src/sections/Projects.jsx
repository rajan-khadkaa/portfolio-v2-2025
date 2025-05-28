import React, { useState, useRef } from "react";
import {
  counterItems,
  // mobProjects,
  webProjects,
  designProjects,
} from "../constants";
import Tilt from "react-parallax-tilt";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import ProjectInfo from "../components/ProjectInfo";

const Projects = () => {
  const sectionRef = useRef(null);
  const [domain, setDomain] = useState("web");

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 4.5,
      }
    );
  });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="app-showcase section-padding"
    >
      <div className="mx-auto grid-3-cols header-margin-proj w-full">
        {counterItems.map((item) => (
          <Tilt
            key={item.label}
            glareEnable={true}
            glareMaxOpacity={0.3}
            glarePosition="all"
            transitionSpeed={1500}
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            style={{
              borderRadius: 12,
              overflow: "hidden",
              height: "fit-content",
              cursor: "pointer",
            }}
          >
            <div
              onClick={() => setDomain(item.domain)}
              className={`${
                item.domain === domain ? "border-zinc-700" : "border-zinc-900"
              } border-[1.5px] bg-zinc-900 p-10 flex flex-col justify-center rounded-2xl`}
            >
              <div className="text-white-50 text-lg mb-4">Let's see</div>
              <div className="counter-number text-white text-4xl font-bold mb-2">
                {item.label}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
      <div className="w-full">
        {/* {domain === "mobile" && <ProjectInfo domainProjects={mobProjects} />} */}
        {domain === "web" && <ProjectInfo domainProjects={webProjects} />}
        {domain === "design" && <ProjectInfo domainProjects={designProjects} />}
      </div>
    </section>
  );
};

export default Projects;
