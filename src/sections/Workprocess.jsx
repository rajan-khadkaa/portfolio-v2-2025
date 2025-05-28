import React, { useEffect, useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import { workProcess } from "../constants/index.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Workprocess = () => {
  const numRef = useRef();
  const timelineWrapperRef = useRef();
  const [timelineLeft, setTimelineLeft] = useState(0);

  // Update position on resize and initially
  useEffect(() => {
    const updatePosition = () => {
      if (numRef.current && timelineWrapperRef.current) {
        const logoRect = numRef.current.getBoundingClientRect();
        const containerRect =
          timelineWrapperRef.current.parentElement.getBoundingClientRect();
        const relativeLeft = logoRect.left - containerRect.left;
        setTimelineLeft(relativeLeft);

        // const leftPosition = numRef.current.getBoundingClientRect();
        // setTimelineLeft(leftPosition);
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);

    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray(".desc-card").forEach((workCard) => {
      gsap.from(workCard, {
        opacity: 0,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: workCard,
          start: "top 70%",
        },
      });
    });
  }, []);

  return (
    <section className="w-full section-padding">
      <div className="w-full h-full">
        {/* <div className="w-full h-full md:px-20 px-5"> */}
        <TitleHeader title="How I work" sub="Work Process" />
        <div className="relative">
          <div
            style={{ left: `${timelineLeft}px` }}
            className="timeline-wrapper translate-x-[20px] md:translate-x-[30px] lg:translate-x-9 absolute top-2 h-[97%] rounded-full mt-4 w-[2px] z-0 bg-gray-500"
          />
          <div className="relative z-20 xl:space-y-32 space-y-10 pt-5">
            {workProcess.map((process, index) => (
              <div
                key={process.title}
                className="exp-card-wrapper flex flex-col-reverse xl:flex-row xl:gap-5 gap-10 justify-between"
              >
                <div className="xl:w-2/6 flex justify-baseline items-start w-full -mt-4">
                  <div className="timeline-card flex flex-row justify-end w-fit gap-12  ml-16 md:ml-18 lg:ml-0 md:mb-0 mb-14">
                    {process.techLogo.map((img) => (
                      <div
                        className="flex flex-col gap-2 justify-center items-center"
                        key={img.name}
                      >
                        <div
                          style={{ border: "2px solid #303030" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.borderColor = img.color)
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.borderColor = "#303030")
                          }
                          className="size-14 lg:size-16 overflow-visible p-2  transition-colors duration-300 flex flex-col items-center rounded-full"
                        >
                          <img
                            className="size-full"
                            src={img.path}
                            alt={img.name}
                          />
                        </div>
                        <p className="text-center w-full">{img.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="xl:w-4/6">
                  <div className="work-card flex items-start">
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative">
                      <div
                        ref={index === 0 ? numRef : null}
                        className="timeline-logo md:size-18 size-14 flex-none rounded-full flex justify-center items-center bg-black-50 relative z-0 -translate-y-1 -translate-x-4 lg:-translate-x-2 md:-translate-y-5"
                      >
                        <p className="text-xl md:text-2xl font-bold">
                          {index + 1}
                        </p>
                      </div>
                      <div className="desc-card">
                        <h1 className="font-semibold text-2xl lg:text-3xl">
                          {process.title}
                        </h1>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5">
                          {process.processWork.map((work) => (
                            <li key={work} className="text-lg">
                              {work}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Single Vertical Timeline */}
          <div
            ref={timelineWrapperRef}
            style={{ left: `${timelineLeft}px` }}
            className="timeline-wrapper translate-x-[20px] md:translate-x-[30px] lg:translate-x-10 absolute top-0 h-full z-20"
          >
            <div className="timeline absolute bg-black top-0 left-1/2 w-20 md:w-24 h-full z-30 transform -translate-x-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workprocess;
