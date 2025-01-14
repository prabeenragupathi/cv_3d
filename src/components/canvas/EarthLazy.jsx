import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";

const Earth = () => {
  const { scene } = useGLTF("./planet/scene.gltf");
  const modelRef = useRef();
  const { gl } = useThree();

  useEffect(() => {
    if (!modelRef.current) return;

    // Initialize geometries
    scene.traverse((child) => {
      if (child.isMesh) {
        child.geometry.computeBoundingSphere();
        child.geometry.computeBoundingBox();
        child.geometry.computeVertexNormals();
      }
    });

    // Cleanup function
    return () => {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.geometry.dispose();
          child.material.dispose();
        }
      });
      gl.dispose();
    };
  }, [scene, gl]);

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={2.5}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  );
};
useGLTF.preload("./planet/scene.gltf");

export default Earth;
