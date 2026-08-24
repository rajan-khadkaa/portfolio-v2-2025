import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Preload } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
// import { Head } from "./Head.jsx";
// import { HeadOpt } from "./HeadOpt.jsx";
// import { Helmet } from "./Helmet.jsx";
// import HeroHeadLight from "./HeroHeadLight.jsx";
import { useEffect, useRef, useState } from "react";
// import { Shape } from "./Shape.jsx";
import { Helmet } from "./Helmet-optimized.jsx";
// import { useGSAP } from "@gsap/react";

const HeroHead = () => {
  // const isExtraSmall = useMediaQuery({ query: "(max-width: 639px)" }); // xs: 0-639px
  // const isSmall = useMediaQuery({
  //   query: "(min-width: 640px) and (max-width: 767px)",
  // }); // sm: 640-767px
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTabletPortrait = useMediaQuery({
    query:
      "(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)",
  });
  const isLaptop = useMediaQuery({
    query: "(min-width: 1025px) and (max-width: 1439px)", // laptops
  });
  const isLargeDesktop = useMediaQuery({
    query: "(min-width: 1440px)", // Full HD+ screens and large desktops
  });

  // const scale = isMobile ? 1.0 : isTabletPortrait ? 1.5 : 1.4; // Smaller on mobile, medium on tablet, larger on desktop

  // const scale = isExtraSmall
  //   ? 5
  //   : isSmall
  //     ? 5
  //     : isMobile
  //       ? 5
  //       : isTabletPortrait
  //         ? 5
  //         : // : 5
  //           isLarge
  //           ? 5
  //           : 5;

  //same scaling for all devices
  const scale = isLargeDesktop ? 4 : 5;
  // const scale = 5;
  //this position is for the cyberpunk headset
  // const position = isMobile
  //   ? [0, -0.3, 0]
  //   : isTabletPortrait
  //     ? [0, -0.9, 0]
  //     : [0, -1.2, 0]; // Smaller on mobile, medium on tablet, larger on desktop
  const headRef = useRef();
  const controlRef = useRef();

  const ControlsUpdater = ({ controlsRef }) => {
    useFrame(() => {
      if (controlsRef.current) {
        controlsRef.current.update();
      }
    });

    return null;
  };

  // useGSAP(() => {
  //   if (headRef.current) {
  //     headRef.current.rotation.y = -Math.PI / 4;
  //     gsap.to(headRef.current.rotation, {
  //       y: -Math.PI / 1.4,
  //       duration: 2,
  //     });
  //   }
  // }, []);

  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    // sync immediately (important for Three.js)
    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);
  // useEffect(() => {
  //   console.log("Screen width:", window.innerWidth, "Scale:", scale);
  // }, [scale]);

  return (
    <div className="w-full h-full">
      <Canvas
        // frameloop={"always"}  //this is for another shape
        frameloop="always" //it needs to rotate in all screens)
        // frameloop={isMobile || isTabletPortrait ? "always" : "demand"} //this is for vr-headset (in small screen it needs to rotate so it is set always but in large screen it should only rotate when user interact so 'demand')
        // camera={{ position: [0, 0, 0], fov: 10 }}
        // camera={{
        //   position: [0, 0, 4],
        //   fov: window.innerWidth >= 1920 ? 45 : 35, // Narrower FOV for wide screens
        // }}
        camera={{ position: [0, 0, 4], fov: 35 }}
        style={isMobile || isTabletPortrait ? { pointerEvents: "none" } : {}} // user will interact only in pc
      >
        <Preload all />
        {/* Lighting */}
        {/* <Environment preset="forest" /> */}
        {/* <Environment preset="warehouse" intensity={isDark ? 1.2 : 1.8} /> */}
        <Environment
          preset={"warehouse"}
        // preset={isDark ? "warehouse" : "city"}
        // intensity={isDark ? 40 : 50}
        // background={false}
        // intensity={0.01}
        />
        {/* <Environment preset="apartment" background={false} intensity={0.01} /> */}

        {/*custom lights can be added or modified like here below */}
        {/* <HeroHeadLight />  */}
        {/* Camera Controls */}
        <OrbitControls
          ref={controlRef}
          //these three for another shape
          // enabled={true}
          // autoRotate={true}
          // autoRotateSpeed={2.0}
          ///these three for vr-headset
          // enabled="true" //can rotate in all devices including mobile, tablets
          enabled={true} //rotatea in both in all devices
          // enabled={!isMobile && !isTabletPortrait} //can't rotate in mobile and tablets
          autoRotate={true} //rotates in pc as well
          // autoRotate={isMobile || isTabletPortrait} //rotates only in mobile and tablets
          // autoRotateSpeed={1.0} //rotates in same speed in all devices
          autoRotateSpeed={isMobile || isTabletPortrait ? 2.0 : 1.0} //rotates slow for pc and faster for mobiles and tablets
          // autoRotateSpeed={isMobile || isTabletPortrait ? 5.0 : 1.0} //rotates slow for pc and faster for mobiles and tablets
          // autoRotateSpeed={5.0} //rotates faster
          enablePan={false}
          // maxDistance={20}
          // minDistance={8}
          maxDistance={8}
          // maxDistance={6.4}
          minDistance={8}
          // minDistance={5}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        // target={[-0.3, -0.5, 0]}
        />
        <ControlsUpdater controlsRef={controlRef} />
        {/* Model */}
        <group
          ref={headRef}
          //these for another shape
          // scale={isMobile ? 0.5 : 0.7}
          // position={[0, -0.1, 0]}
          //for vr-headset
          scale={scale}
          position={[0, 0, 0]}
          // position={position}
          rotation={[0, -Math.PI / 1.4, 0]}
        // remove from here to add in gsap above
        >
          {/* <HeadOpt isDark={isDark} /> */}
          {/* <Helmet /> */}
          <Helmet />
          {/* <HeadOpt /> */}
          {/* <Shape /> */}
        </group>
      </Canvas>
    </div>
  );
};

export default HeroHead;
