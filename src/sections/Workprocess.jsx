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
    <section className="w-full md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="How I work" sub="Work Process" />
        <div className="mt-32 relative">
          <div
            style={{ left: `${timelineLeft}px` }}
            className="timeline-wrapper translate-x-[20px] md:translate-x-[30px] absolute top-0 h-[97%] rounded-full mt-4 w-[2px] z-0 bg-gray-500"
          />
          <div className="relative z-20 xl:space-y-32 space-y-10 pt-5">
            {workProcess.map((process, index) => (
              <div
                key={process.title}
                className="exp-card-wrapper flex flex-col-reverse xl:flex-row xl:gap-20 gap-10 justify-between"
              >
                <div className="xl:w-2/6">
                  <div className="timeline-card flex flex-row justify-end -mr-8 md:-mt-4 -mt-3 md:mb-0 mb-14">
                    {process.techLogo.map((img) => (
                      <div
                        key={img.name}
                        style={{ border: "2px solid #303030" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.borderColor = img.color)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.borderColor = "#303030")
                        }
                        className="w-20 overflow-visible h-20 p-2 mr-14 transition-colors duration-300 flex flex-col items-center rounded-full"
                      >
                        <img
                          className="size-full"
                          src={img.path}
                          alt={img.name}
                        />
                        <p className="mt-4 text-center w-[80px]">{img.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="xl:w-4/6">
                  <div className="work-card flex items-start">
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative">
                      <div
                        ref={index === 0 ? numRef : null}
                        className="timeline-logo  md:size-20 size-14 flex-none rounded-full flex justify-center items-center bg-black-50 relative z-0 -translate-y-1 -translate-x-2 md:-translate-x-1 md:-translate-y-5"
                      >
                        <p className="text-xl md:text-3xl font-bold">
                          {index + 1}
                        </p>
                      </div>
                      <div className="desc-card">
                        <h1 className="font-semibold text-3xl">
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
            className="timeline-wrapper translate-x-[20px] md:translate-x-[30px] absolute top-0 h-full z-20"
          >
            <div className="timeline absolute top-0 left-1/2 w-20 md:w-24 h-full z-30 transform -translate-x-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workprocess;
