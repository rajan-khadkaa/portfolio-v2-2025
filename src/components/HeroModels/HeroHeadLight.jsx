import React from "react";

const HeroHeadLight = () => {
  return (
    <>
      {/* Low ambient to keep overall scene dark */}
      <ambientLight intensity={0.2} color="#111111" />

      {/* Strong blue key light from upper right */}
      <spotLight
        position={[4, 6, 4]}
        intensity={2.5}
        angle={0.4}
        penumbra={0.3}
        color="#00bfff"
        castShadow
      />

      {/* Purple fill light from lower left */}
      <spotLight
        position={[-3, -1, 2]}
        intensity={1.8}
        angle={0.5}
        penumbra={0.2}
        color="#8a00ff"
      />

      {/* Teal rim light from behind to define edges */}
      <directionalLight position={[0, 2, -5]} intensity={1.2} color="#00ffc8" />

      {/* Subtle cool point light near base for accent glow */}
      <pointLight
        position={[0, -2, 0]}
        intensity={0.6}
        distance={5}
        decay={2}
        color="#005577"
      />
    </>
  );
};

export default HeroHeadLight;
