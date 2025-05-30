import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Preload } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
// import { Head } from "./Head.jsx";
import { HeadOpt } from "./HeadOpt.jsx";
// import HeroHeadLight from "./HeroHeadLight.jsx";
import { useEffect, useRef } from "react";
import { Shape } from "./Shape.jsx";
// import { useGSAP } from "@gsap/react";

const HeroHead = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTabletPortrait = useMediaQuery({
    query:
      "(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)",
  });

  const scale = isMobile ? 1.0 : isTabletPortrait ? 1.5 : 1.6; // Smaller on mobile, medium on tablet, larger on desktop
  const position = isMobile
    ? [0, -0.3, 0]
    : isTabletPortrait
    ? [0, -0.9, 0]
    : [0, -1.2, 0]; // Smaller on mobile, medium on tablet, larger on desktop
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

  return (
    <div className="w-full h-full">
      <Canvas
        // frameloop={"always"}  //this is for another shape
        frameloop={isMobile || isTabletPortrait ? "always" : "demand"} //this is for vr-headset (in small screen it needs to rotate so it is set always but in large screen it should only rotate when user interact so 'demand')
        camera={{ position: [8, 0, 8], fov: 20 }}
        style={isMobile || isTabletPortrait ? { pointerEvents: "none" } : {}}
      >
        <Preload all />
        {/* Lighting */}
        {/* <Environment preset="forest" /> */}
        <Environment preset="warehouse" background={false} intensity={0.01} />
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
          enabled={!isMobile && !isTabletPortrait}
          autoRotate={isMobile || isTabletPortrait}
          autoRotateSpeed={5.0}
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
          position={position}
          rotation={[0, -Math.PI / 1.4, 0]}
          // remove from here to add in gsap above
        >
          <HeadOpt />
          {/* <Shape /> */}
        </group>
      </Canvas>
    </div>
  );
};

export default HeroHead;
