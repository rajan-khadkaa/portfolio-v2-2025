import React, { useState, useRef } from "react";
import { counterItems } from "../constants";
import Tilt from "react-parallax-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [domain, setDomain] = useState("mobile");
  const sectionRef = useRef(null);
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
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
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
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="app-showcase">
      <div className="mx-auto grid-3-cols mb-20 w-full">
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
              borderRadius: 10,
              overflow: "hidden",
              height: "fit-content",
              cursor: "pointer",
            }}
          >
            <div
              onClick={() => setDomain(item.domain)}
              className={`${
                item.domain === domain ? "border-[1.5px] border-gray-500" : ""
              } bg-zinc-900 p-10 flex flex-col justify-center rounded-2xl`}
            >
              <div className="text-white-50 text-lg mb-4">Show me</div>
              <div className="counter-number text-white text-4xl font-bold mb-2">
                {item.label}
              </div>
              {/* <div className="counter-number text-white text-5xl font-bold mb-2">
                {item.label}
              </div> */}
              {/* <div className="text-white-50 text-lg mt-4">{item.tool}</div> */}
            </div>
          </Tilt>
        ))}
      </div>
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div ref={project1Ref} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Planit-webapp" />
            </div>
            <div className="text-content">
              <h2>
                A productivity app that lets you store your ideas, goals and
                track them. All in Planit.
              </h2>
              <p className="text-white-50 md:text-xl">
                A webapp developed using react, node,js, mongodb and tailwind
                css for a fast, user-friendly experience.
              </p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div ref={project2Ref} className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="Spendly-webapp" />
              </div>
              <h2>Spendly</h2>
            </div>
            <div ref={project3Ref} className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project3.png" alt="Rock-paper-chimp-webapp" />
              </div>
              <h2>Rock-Paper-Chimp</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
