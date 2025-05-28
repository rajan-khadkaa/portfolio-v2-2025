import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Preload } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
// import { Head } from "./Head.jsx";
import { HeadOpt } from "./HeadOpt.jsx";
// import HeroHeadLight from "./HeroHeadLight.jsx";
import { useRef } from "react";
// import { useGSAP } from "@gsap/react";

const HeroHead = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const headRef = useRef();

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
    <Canvas frameloop="demand" camera={{ position: [8, 0, 8], fov: 20 }}>
      <Preload all />
      {/* Lighting */}
      {/* <Environment preset="forest" /> */}
      <Environment preset="warehouse" background={false} intensity={0.01} />
      {/*custom lights can be added or modified like here below */}
      {/* <HeroHeadLight />  */}
      {/* Camera Controls */}
      <OrbitControls
        enablePan={false}
        maxDistance={6.4}
        minDistance={8}
        // minDistance={5}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
      {/* Model */}
      <group
        ref={headRef}
        scale={isMobile ? 0.6 : 1}
        position={[0, -0.8, 0]}
        rotation={[0, -Math.PI / 1.4, 0]}
        // remove from here to add in gsap above
      >
        <HeadOpt />
      </group>
    </Canvas>
  );
};

export default HeroHead;
