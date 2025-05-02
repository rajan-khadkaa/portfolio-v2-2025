import React from "react";

const HeroLights = () => {
  return (
    <>
      {/* <spotLight
        position={[2, 5, 6]}
        intensity={100}
        angle={0.9}
        penumbra={0.9}
        color="white"
      /> */}
      {/* CYAN OVERHEAD - futuristic cool glow */}
      <spotLight
        position={[0, 7, 5]}
        intensity={130}
        angle={0.8}
        penumbra={1}
        color="#00FFFF"
        castShadow
      />

      {/* MAGENTA from left window side */}
      <spotLight
        position={[-5, 4, 0]}
        intensity={90}
        angle={0.7}
        penumbra={1}
        color="#FF00FF"
      />

      {/* PURPLE LIGHT on desk area */}
      <spotLight
        position={[2, 3.5, 3]}
        intensity={70}
        angle={0.5}
        penumbra={0.8}
        color="#8000FF"
      />

      {/* BLUE GLOW on bottom right */}
      <spotLight
        position={[4, 2, -3]}
        intensity={60}
        angle={0.5}
        penumbra={1}
        color="#0011FF"
      />
    </>
  );
};

export default HeroLights;
