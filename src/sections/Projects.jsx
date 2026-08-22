import React, { useState, useRef, useEffect } from "react";
import { counterItems } from "../constants";
import Tilt from "react-parallax-tilt";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ProjectInfo from "../components/ProjectInfo";
import TitleHeader from "../components/TitleHeader";

const Projects = () => {
  const sectionRef = useRef(null);
  const [domain, setDomain] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get("tab");
    if (tabParam && ["mobile", "web", "design"].includes(tabParam)) {
      localStorage.setItem("selectedTab", tabParam);
      return tabParam;
    }
    const savedTab = localStorage.getItem("selectedTab");
    if (savedTab && ["mobile", "web", "design"].includes(savedTab)) {
      return savedTab;
    }
    return "mobile";
  });

  const changeTab = (newDomain) => {
    setDomain(newDomain);
    localStorage.setItem("selectedTab", newDomain);
    const url = new URL(window.location.href);
    url.searchParams.set("tab", newDomain);
    window.history.replaceState({}, "", url.toString());
  };

  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setIsDark(isDarkMode);
    };

    // Check initially
    checkTheme();

    // Watch for changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 4.5,
      },
    );
  });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-white dark:bg-black app-showcase section-padding"
    >
      <TitleHeader title="My Works" sub="Projects" />
      <div className="mx-auto grid-3-cols header-margin-proj w-full">
        {counterItems.map((item) => {
          const active = domain === item.domain;

          return (
            <Tilt
              // key={item.label}
              key={`${item.label}-${active}`} //this remounts the card (as it will have new key each time) to hide/disable the glare
              glareEnable={!active}
              glareMaxOpacity={isDark ? 0.3 : 0.2} // Darker in light mode
              glareColor={isDark ? "white" : "rgba(0, 0, 0, 0.9)"} // White vs dark glare
              glarePosition="all"
              transitionSpeed={1500}
              tiltMaxAngleX={active ? 0 : 3.5}
              tiltMaxAngleY={active ? 0 : 3.5}
              style={{
                // borderRadius: 12,
                overflow: "hidden",
                height: "fit-content",
                cursor: active ? "default" : "pointer",
              }}
            >
              <div
                onClick={() => changeTab(item.domain)}
                className={`${
                  item.domain === domain
                    ? "blue-gradient"
                    : // ? "bg-gradient-to-br from-orange-500 via-[#0191FF] to-black border-zinc-700"
                      "border-white-50 dark:border-black-50"
                } border-[1px] bg-white-50 dark:bg-black-50 p-10 flex flex-col justify-center transition-all duration-300`}
              >
                {/* <div
              onClick={() => setDomain(item.domain)}
              className={`${
                item.domain === domain ? "border-zinc-700" : "border-zinc-900"
              } border-[1.5px] bg-zinc-900 p-10 flex flex-col justify-center rounded-2xl`}
            > */}
                <div className="text-black-400 dark:text-white-400 text-base lg:text-lg mb-4">
                  Let's see
                </div>
                <div className="counter-number text-black-200 dark:text-white-200 text-2xl lg:text-3xl font-bold mb-2">
                  {item.label}
                </div>
              </div>
            </Tilt>
          );
        })}
      </div>
      <div className="w-full">
        {domain === "mobile" && <ProjectInfo domainType="mobile" />}
        {domain === "web" && <ProjectInfo domainType="web" />}
        {domain === "design" && <ProjectInfo domainType="design" />}
      </div>
    </section>
  );
};

export default Projects;
