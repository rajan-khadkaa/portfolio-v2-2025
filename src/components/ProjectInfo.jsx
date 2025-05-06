import React, { useRef } from "react";
import { FaArrowUp, FaGithub } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ProjectInfo = () => {
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  const firstProjIcons = [
    {
      name: "React",
      image: "/images/logos/illustrator.svg",
    },
    {
      name: "Tailwind",
      image: "/images/logos/node.png",
    },
    {
      name: "Node.js",
      image: "/images/logos/react.png",
    },
    {
      name: "MongoDB",
      image: "/images/logos/photoshop.svg",
    },
    {
      name: "Firebase",
      image: "/images/logos/illustrator.svg",
    },
    {
      name: "Cloudinary",
      image: "/images/logos/node.png",
    },
  ];

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
  }, []);
  return (
    <div className="showcaselayout">
      {/* LEFT */}
      <div ref={project1Ref} className="first-project-wrapper">
        {/* <div className="image-wrapper group overflow-hidden"> */}
        <div className="image-wrapper group overflow-hidden">
          <div className="bg-zinc-800 absolute w-full p-16 bottom-0 h-full z-10 translate-y-full group-hover:translate-y-0  transition-all duration-300 ">
            {/* <div className="info-overlay absolute w-full py-20 px-10 bottom-0 h-[40%] z-10 translate-y-full group-hover:translate-y-0  transition-all duration-300 "> */}
            <div className="flex flex-col gap-8">
              <div className=" flex items-center justify-center size-24 border-2 p-3 rounded-full">
                <img
                  className="size-full"
                  src="/images/logos/nextjs.svg"
                  alt="plan-it"
                />
              </div>
              <p className="text-xl">
                Plan-It is a productivity app to save ideas, set goals, and
                track personal growth. Save your ideas and visit later to view
                and track. Plan-It is a productivity app to save ideas, set
                goals, and track personal growth. Plan-It is a productivity app
                to save ideas, set goals, and track personal growth.
              </p>
              <div className="w-full h-full flex flex-row flex-wrap gap-6 border-2 border-red-400">
                {firstProjIcons.map((proj) => (
                  <div className="flex flex-col gap-2">
                    <div className="size-12 md:size-22 p-4 border-2 border-gray-700 rounded-2xl">
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
          </div>
          <div className="w-full h-full">
            <img
              className="thumbnail-img"
              src="/images/project1.png"
              alt="Planit-webapp"
            />
          </div>
          <div className="top-icons-div  flex gap-2 justify-center items-center absolute z-20 p-3 bg-black right-0 top-0 rounded-bl-4xl ">
            <a
              className="p-3 rotate-45 rounded-full bg-white-50 text-black flex items-center justify-center"
              href="https://github.com/rajan-khadkaa/plan-it"
              target="_blank"
            >
              {" "}
              <FaArrowUp
                className="group-hover:animate-bounce group-hover:translate-x-[0px] group-hover:translate-y-1"
                size={20}
              />
            </a>
          </div>
        </div>
        <div className="text-content">
          {/* <h2>
            A productivity app that lets you store your ideas, goals and track
            them. All in Planit.
          </h2>
          <p className="text-white-50 md:text-xl">
            A webapp developed using react, node,js, mongodb and tailwind css
            for a fast, user-friendly experience.
          </p> */}
          <div className="flex justify-between">
            <h2>Plan-It</h2>
            <a
              className="size-14 rounded-full bg-zinc-800 hover:bg-zinc-600 transition-colors duration-200 flex items-center justify-center"
              // className="p-2 border-2 flex items-center justify-center"
              href="https://github.com/rajan-khadkaa/plan-it"
              target="_blank"
            >
              {" "}
              <FaGithub size={24} />
              {/* <FaGithub size={20} /> */}
              {/* <p className="md:text-xl">Github</p> */}
            </a>
          </div>
          <p className="text-gray-400 md:text-xl -mt-6"> Productivity App</p>
        </div>
      </div>
      {/* RIGHT */}
      <div className="project-list-wrapper overflow-hidden">
        <div ref={project2Ref} className="project">
          <div className="group rounded-xl relative overflow-hidden">
            <div className="bg-zinc-800 absolute w-full p-10 bottom-0 h-full z-10 translate-y-full group-hover:translate-y-0  transition-all duration-300 ">
              {/* <div className="info-overlay absolute w-full py-20 px-10 bottom-0 h-[40%] z-10 translate-y-full group-hover:translate-y-0  transition-all duration-300 "> */}
              <h2>contents here</h2>
            </div>
            <div className="image-wrapper bg-[#ffefdb]">
              <img src="/images/project2.png" alt="Spendly-webapp" />
            </div>
            <div className="top-icons-div  flex gap-2 justify-center items-center absolute z-20 p-3 bg-black right-0 top-0 rounded-bl-4xl ">
              <a
                className="p-3 rotate-45 rounded-full bg-white-50 text-black flex items-center justify-center"
                href="https://github.com/rajan-khadkaa/plan-it"
                target="_blank"
              >
                {" "}
                <FaArrowUp
                  className="group-hover:animate-bounce group-hover:translate-x-[0px] group-hover:translate-y-1"
                  size={20}
                />
              </a>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex flex-col gap-1">
              <h2>Spendly</h2>
              <p className="text-gray-400 font-normal">
                Income-Expense Tracker
              </p>
            </div>
            <a
              className="size-13 rounded-full bg-zinc-800 hover:bg-zinc-600 flex items-center justify-center"
              // className="p-2 border-2 flex items-center justify-center"
              href="https://github.com/rajan-khadkaa/plan-it"
              target="_blank"
            >
              {" "}
              <FaGithub size={22} />
              {/* <FaGithub size={20} /> */}
              {/* <p className="md:text-xl">Github</p> */}
            </a>
          </div>
        </div>
        <div ref={project3Ref} className="project">
          <div className="image-wrapper bg-[#ffefdb]">
            <img src="/images/project3.png" alt="Rock-paper-chimp-webapp" />
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex flex-col gap-1">
              <h2>Rock-Paper-Chimp</h2>
              <p className="text-gray-400 font-normal">Rock Paper Scissor</p>
            </div>
            <a
              className="size-13 rounded-full bg-zinc-800 hover:bg-zinc-600 flex items-center justify-center"
              // className="p-2 border-2 flex items-center justify-center"
              href="https://github.com/rajan-khadkaa/plan-it"
              target="_blank"
            >
              {" "}
              <FaGithub size={22} />
              {/* <FaGithub size={20} /> */}
              {/* <p className="md:text-xl">Github</p> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
