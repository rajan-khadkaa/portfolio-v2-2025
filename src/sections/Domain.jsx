import React, { useState } from "react";
import { counterItems } from "../constants";
import Tilt from "react-parallax-tilt";

const Domain = () => {
  const [domain, setDomain] = useState("mobile");
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      {/* <div className="mt-4 mb-8 bg-zinc-800 w-fit py-3 px-6 rounded-full">
        <h4 className="text-white-50 text-lg">I want to see</h4>
      </div> */}
      <div className="mx-auto grid-3-cols">
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
            }}
          >
            <div
              onClick={() => setDomain(item.domain)}
              className={`${
                item.domain === domain ? "border-[1.5px] border-gray-500" : ""
              } bg-zinc-900 p-10 flex flex-col justify-center rounded-2xl`}
            >
              <div className="text-white-50 text-lg mb-4">Show me</div>
              {/* <div className="counter-number text-white text-4xl font-bold mb-2">
                {item.label}
              </div> */}
              <div className="counter-number text-white text-5xl font-bold mb-2">
                {item.label}
              </div>
              {/* <div className="text-white-50 text-lg mt-4">{item.tool}</div> */}
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Domain;
