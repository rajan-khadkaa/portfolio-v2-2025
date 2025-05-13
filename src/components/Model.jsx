import { MeshTransmissionMaterial, Text, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";

const Model = () => {
  const meshRef = useRef();
  const { nodes } = useGLTF("/models/torrus.glb");
  const { viewport } = useThree();
  useFrame(() => {
    meshRef.current.rotation.x += 0.02;
  });

  return (
    <group scale={viewport.width / 5}>
      <Text
        fontSize={0.4}
        color="#d9ecff"
        font="font/MonaSans-Bold.ttf"
        position={[0, 0, -0.5]}
      >
        I am a developer & designer.
      </Text>
      <mesh position={[0, 0, 2]} ref={meshRef} {...nodes.Torus002}>
        <MeshTransmissionMaterial
          transmission={1}
          backside={true}
          thickness={0.1}
          ior={0.9}
        />
      </mesh>
    </group>
  );
};

export default Model;
