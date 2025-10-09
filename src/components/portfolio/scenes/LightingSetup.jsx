import React from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const LightingSetup = () => {
  return (
    <>
      {/* Ambient light */}
      <ambientLight intensity={0.2} />
      
      {/* Directional light (sun) */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      
      {/* Fill light */}
      <directionalLight position={[-10, 5, -5]} intensity={0.5} color="#6366f1" />
      
      {/* Rim light */}
      <directionalLight position={[0, -5, -10]} intensity={0.3} color="#8b5cf6" />
      
      {/* Point lights for accent */}
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#00ffff" distance={10} />
      <pointLight position={[-5, 5, 5]} intensity={0.5} color="#ec4899" distance={10} />
      
      {/* Hemisphere light for natural outdoor feel */}
      <hemisphereLight 
        intensity={0.1} 
        groundColor="#1e293b" 
        color="#93c5fd" 
      />
    </>
  );
};

export default LightingSetup;