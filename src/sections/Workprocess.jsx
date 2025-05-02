import React from "react";
import TitleHeader from "../components/TitleHeader";
// import { div } from "three/tsl";
import { workProcess } from "../constants/index.js";

const Workprocess = () => {
  return (
    <section className="w-full md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5 ">
        <TitleHeader title="How I work" sub="Work Process" />
        <div className="mt-32 relative">
          <div className="realtive z-50 xl:space-y-32 space-y-10">
            {workProcess.map((process) => (
              <div key={process.logoPath} className="exp-card-wrapper ">
                <div className="xl:w-2/6 ">
                  {/* {process.title} */}
                  <div className="flex flex-row ">
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
                        className={`w-20 h-20 p-2 mr-6 transition-colors duration-300  rounded-full`}
                      >
                        <img
                          className="size-full"
                          src={img.path}
                          alt={img.name}
                        />
                        <p className="mt-4">{img.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper ">
                      <div className="timeline" />{" "}
                      {/* rectangular box containing the lines and the images */}
                      <div className="gradient-line w-1 h-[90%] relative z-10" />{" "}
                      {/*the thin line */}
                      {/* <div className="gradient-line w-1 h-full" /> */}
                    </div>
                    {/* <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20"> */}
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      {" "}
                      {/* each rectangular box  on right side */}
                      <div
                        className={` ${
                          process.gap
                            ? "md:-translate-y-16"
                            : "md:-translate-y-5"
                        } timeline-logo -translate-y-1`}
                      >
                        <img src={process.logoPath} alt="logo" />
                      </div>
                      <div className="">
                        <h1 className="font-semibold text-3xl">
                          {process.title}
                        </h1>
                        {/* <p></p> */}
                        {/* <p className="text-[#839cb5] italic">Process</p> */}
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
        </div>
      </div>
    </section>
  );
};

export default Workprocess;
