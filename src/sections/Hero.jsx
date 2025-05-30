import React from "react";
import Button from "../components/Button.jsx";
import { words } from "../constants/index.js";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HeroHead from "../components/HeroModels/HeroHead.jsx";
import HeroTexts from "../components/HeroTexts.jsx";
import SecondaryButton from "../components/SecondaryButton.jsx";

const Hero = () => {
  useGSAP(() => {
    console.log("Viewport width:", window.innerWidth);
    gsap.fromTo(
      // ".hero-text",
      ".text-slide",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        duration: 3,
        // ease: "none",
        ease: "power2.inOut",
      }
    );
  });

  return (
    <section id="home" className="hero-wrapper hero-padding">
      {/* <section id="home" className="relative overflow-hidden"> */}
      <div className="absolute top-0 left-0 z-10">
        {/* <img src="/images/bg.png" alt="" /> */}
      </div>

      <div className="hero-text-wrapper">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-fit w-screen md:px-14 lg:pl-20 px-5">
          <div className="flex flex-col gap-2 lg:gap-7">
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Rajan. I am a Full-Stack Developer
            </p>
            <div className="hero-text">
              <div className="flex flex-row flex-wrap items-center">
                <h1 className="mr-5">I build</h1>
                <div className="flex flex-row -ml-10 items-center">
                  <HeroTexts />
                </div>
                {/* <span className="slide">
                  <span className="wrapper ">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2 md:w-[450px]"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span> */}
              </div>
              <h1 className="text-slide my-1 lg:my-auto">that solve</h1>
              <h1 className="text-slide">real problems.</h1>
              {/* <h1>that Deliver Results</h1> */}
            </div>

            <div className="flex lg:mt-0 mt-6 py-[3px] items-center md:h-16 h-16 gap-3">
              <Button
                text="See My Work"
                className="md:w-80 w-50"
                // className="md:w-80 w-60 mt-5 lg:mt-auto"
                id="counter"
              />
              <SecondaryButton text="Resume" />
            </div>
          </div>
        </header>
      </div>
      <div className="hero-3d-wrapper">
        <div className="model-3d">
          {/* <HeroExperience /> */}
          <HeroHead />
        </div>
      </div>
    </section>
  );
};

export default Hero;
