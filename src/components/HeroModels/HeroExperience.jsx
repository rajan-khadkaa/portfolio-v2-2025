import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLights from "./HeroLights";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768)" });
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      {/* canvas is require to 3dmodel, camera is on 0 on x-axis, 0 on y-axis and 15 on z-axis to frame the model nicely, fov is field of view to frame it nicely with in the camera. */}

      <OrbitControls
        enablePan={false}
        // enableZoom={!isTablet}
        // maxDistance={20} {/*to how much it can be Zoomed */}
        maxDistance={20}
        minDistance={5}
        // minPolarAngle={Math.PI/5} {/* upto what angle can it be moved upward and not have a full view down */}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <HeroLights />
      <group
        scale={isMobile ? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Room />
      </group>
    </Canvas>
  );
};

export default HeroExperience;

// initially this was used for 3d demo
// <mesh>
// {/* mesh is needd to add 3d object  */}
// <boxGeometry args={[2, 2, 2]} />
// {/* 1,1,1 is for how big and wide the 3d material is  */}
// <meshStandardMaterial color="teal" />
// </mesh>

{
  /* <ambientLight intensity={0.2} color="#1a1a40" />{" "} */
}
{
  /* here ambientLight is the light to 3d effect and color of the light is added.*/
}
// <directionalLight position={[5, 5, 5]} intensity={2} />{" "}
// this shows teal box well, and high intesity will have more bright light on 3d object
