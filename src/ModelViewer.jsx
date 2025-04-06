import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Environment } from "@react-three/drei";
import * as THREE from "three"; // Import THREE explicitly
const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);

  // Normalize model size by calculating bounding box and scaling
  const normalizeScale = () => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 2.5 / maxDim; // Target size relative to petal (adjust 2.5 as needed)
    return [scale, scale, scale];
  };

  return (
    <Center>
      <primitive object={scene} scale={normalizeScale()} />
    </Center>
  );
};

const ModelViewer = ({ modelPath }) => {
  return (
    <div className="w-full h-full bg-transparent rounded-full overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 35 }} // Adjusted FOV and position
        className="cursor-grab"
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 3, 2]} intensity={1.2} />
        <Suspense fallback={null}>
          <Environment preset="studio" />
          <Model modelPath={modelPath} />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={2}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default ModelViewer;