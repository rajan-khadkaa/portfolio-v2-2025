import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Preload } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
// import { Head } from "./Head.jsx";
import { HeadOpt } from "./HeadOpt.jsx";
// import HeroHeadLight from "./HeroHeadLight.jsx";
import { useRef } from "react";
import { Shape } from "./Shape.jsx";
// import { useGSAP } from "@gsap/react";

const HeroHead = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
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
    <Canvas
      // frameloop={"always"}  //this is for another shape
      frameloop={isMobile ? "always" : "demand"} //this is for vr-headset (in small screen it needs to rotate so it is set always but in large screen it should only rotate when user interact so 'demand')
      camera={{ position: [8, 0, 8], fov: 20 }}
      style={isMobile ? { pointerEvents: "none" } : {}}
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
        enabled={!isMobile}
        autoRotate={isMobile}
        autoRotateSpeed={5.0}
        enablePan={false}
        // maxDistance={20}
        // minDistance={8}
        maxDistance={6.4}
        minDistance={8}
        // minDistance={5}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
      <ControlsUpdater controlsRef={controlRef} />
      {/* Model */}
      <group
        ref={headRef}
        //these for another shape
        // scale={isMobile ? 0.5 : 0.7}
        // position={[0, -0.1, 0]}
        //for vr-headset
        scale={isMobile ? 0.5 : 1}
        position={[0, -0.8, 0]}
        rotation={[0, -Math.PI / 1.4, 0]}
        // remove from here to add in gsap above
      >
        <HeadOpt />
        {/* <Shape /> */}
      </group>
    </Canvas>
  );
};

export default HeroHead;
