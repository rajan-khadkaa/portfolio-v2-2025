import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const HeroTexts = () => {
  const childRef1 = useRef();
  const childRef2 = useRef();
  const parentRef = useRef();
  const textRef = useRef();

  useGSAP(() => {
    if (
      parentRef.current &&
      childRef1.current &&
      childRef2.current &&
      textRef.current
    ) {
      const textWidth = textRef.current.offsetWidth;

      const gsaptimeline1 = gsap.timeline({ repeat: -1 });
      const gsaptimeline2 = gsap.timeline({ repeat: -1 });

      gsaptimeline1
        .to(childRef1.current, {
          x: -textWidth,
          duration: 2,
          delay: 2,
        })
        .to(childRef1.current, {
          x: -textWidth * 2,
          duration: 2,
          delay: 2,
        })
        .to(childRef1.current, {
          x: -textWidth * 3,
          duration: 2,
          delay: 2,
          repeatDelay: 0,
        });

      gsaptimeline2
        .to(childRef2.current, {
          x: textWidth,
          duration: 2,
          delay: 2,
        })
        .to(childRef2.current, {
          x: textWidth * 2,
          duration: 2,
          delay: 2,
        })
        .to(childRef2.current, {
          x: textWidth * 3,
          duration: 2,
          delay: 2,
          repeatDelay: 0,
        });
    }
  }, []);

  //   gsap.to(childRef.current, {
  //     x: parentWidth/2 +
  //   })

  return (
    <div
      ref={parentRef}
      className="w-[200px] lg:w-[400px]  box-border ml-10 h-[60px] relative overflow-hidden"
    >
      <div
        ref={childRef1}
        className={`md:text-[60px] h-full text-[36px] font-semibold z-20 pointer-events-none flex bg-black -translate-y-[50%] text-white overflow-hidden absolute gap-0 top-0 left-0 `}
      >
        <div className="flex translate-y-[50%]">
          {/* <h1
            ref={textRef}
            className="flex flex-auto w-[200px] lg:w-[400px] justify-baseline items-center"
          >
            Mobile Apps
          </h1> */}
          <h1
            ref={textRef}
            className="flex flex-auto w-[200px] lg:w-[400px] justify-baseline items-center"
          >
            Web Apps
          </h1>
          <h1 className="flex flex-auto w-[200px] lg:w-[400px] justify-baseline items-center">
            Products
          </h1>
          <h1 className="flex flex-auto w-[200px] lg:w-[400px] justify-baseline items-center">
            Interfaces
          </h1>
          <h1 className="flex flex-auto w-[200px] lg:w-[400px] justify-baseline items-center">
            Web Apps
          </h1>
        </div>
      </div>
      <div
        ref={childRef2}
        className={`md:text-[60px] h-full text-[36px] font-semibold z-10 pointer-events-none flex text-white absolute gap-0 right-0 bottom-0 overflow-hidden`}
      >
        {/* <h1 className="flex flex-auto w-[200px] lg:w-[400px] justify-baseline items-center">
          Mobile Apps
        </h1> */}
        <h1 className="flex flex-auto w-[200px] lg:w-[400px] justify-baseline items-center">
          Web Apps
        </h1>
        <h1 className="flex flex-auto w-[200px] lg:w-[400px] justify-baseline items-center">
          Interfaces
        </h1>
        <h1 className="flex flex-auto w-[200px] lg:w-[400px] justify-baseline items-center">
          Products
        </h1>
        <h1 className="flex flex-auto w-[200px] lg:w-[400px] justify-baseline items-center">
          Web Apps
        </h1>
      </div>
    </div>
  );
};

export default HeroTexts;
