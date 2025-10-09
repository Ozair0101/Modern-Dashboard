import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useProgress } from '@react-three/drei';
import * as THREE from 'three';
import FloatingNavigation from '../components/3d/FloatingNavigation3D';
import Hero3D from '../sections/Hero3D';
import PortfolioTunnel from '../sections/PortfolioTunnel3D';
import SkillsSphere from '../sections/SkillsSphere3D';
import ContactPortal from '../sections/ContactPortal3D';
import ParticleSystem from '../components/3d/ParticleSystem3D';
import LightingSetup from './LightingSetup';

// Loading component
const Loader = () => {
  const { progress } = useProgress();
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white text-lg">Loading 3D Experience... {Math.round(progress)}%</p>
      </div>
    </div>
  );
};

const MainScene = () => {
  return (
    <div className="w-full h-screen relative">
      <Suspense fallback={<Loader />}>
        <Canvas
          shadows
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance"
          }}
          onCreated={({ gl }) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.toneMappingExposure = 1;
            gl.shadowMap.enabled = true;
            gl.shadowMap.type = THREE.PCFSoftShadowMap;
          }}
        >
          {/* Lighting */}
          <LightingSetup />
          
          {/* Background particles */}
          <ParticleSystem />
          
          {/* 3D World */}
          <group position={[0, 0, 0]}>
            {/* Floating Navigation */}
            <FloatingNavigation />
            
            {/* Hero Section */}
            <Hero3D position={[0, 2, 0]} />
            
            {/* Portfolio Tunnel */}
            <PortfolioTunnel position={[0, -1, -5]} />
            
            {/* Skills Sphere */}
            <SkillsSphere position={[3, 0, -3]} />
            
            {/* Contact Portal */}
            <ContactPortal position={[-3, 0, -3]} />
          </group>
          
          {/* Camera Controls */}
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.6}
            panSpeed={0.5}
            rotateSpeed={0.4}
            minDistance={2}
            maxDistance={20}
            autoRotate={false}
            autoRotateSpeed={0.5}
          />
          
          {/* Preload all assets */}
          <Preload all />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default MainScene;