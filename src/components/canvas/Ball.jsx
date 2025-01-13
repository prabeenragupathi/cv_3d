import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../Loader";
import {
  OrbitControls,
  Preload,
  useGLTF,
  useTexture,
  Decal,
  Float,
} from "@react-three/drei";

const Ball = (props) => {
  const ball = useGLTF("./planet/scene.gltf");
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <primitive object={ball.scene} />
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <hemisphereLight intensity={3.15} groundColor="black" />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={"#fff8eb"}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          flatShading
          rotation={[2 * Math.PI, 0, 6.25]}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      // camera={{ position: [20, 3, 5], fov: 25 }} //fov - field of view
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
        />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
