import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center, Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Hero3D = () => {
  const heroRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();

  // Animate the hero section
  useFrame((state) => {
    if (heroRef.current) {
      heroRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
    
    if (titleRef.current) {
      titleRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    
    if (subtitleRef.current) {
      subtitleRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.05;
    }
  });

  return (
    <group position={[0, 2, 0]} ref={heroRef}>
      {/* Floating title */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Center position={[0, 1, 0]}>
          <Text3D
            ref={titleRef}
            font="/fonts/helvetiker_regular.typeface.json"
            bevelEnabled
            bevelSize={0.05}
            bevelThickness={0.05}
            height={0.3}
            curveSegments={12}
            position={[0, 0, 0]}
          >
            PORTFOLIO
            <MeshTransmissionMaterial
              color="#6366f1"
              transmission={0.9}
              roughness={0.1}
              thickness={0.5}
              ior={1.5}
              chromaticAberration={0.05}
              opacity={0.8}
            />
          </Text3D>
        </Center>
      </Float>
      
      {/* Floating subtitle */}
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.3}>
        <Center position={[0, -0.5, 0]}>
          <Text3D
            ref={subtitleRef}
            font="/fonts/helvetiker_regular.typeface.json"
            bevelEnabled
            bevelSize={0.02}
            bevelThickness={0.02}
            height={0.1}
            curveSegments={12}
            position={[0, 0, 0]}
          >
            MOHAMMAD OZAIR KHURAMI
            <meshStandardMaterial 
              color="#8b5cf6" 
              metalness={0.5}
              roughness={0.2}
            />
          </Text3D>
        </Center>
      </Float>
      
      {/* Decorative floating shapes */}
      <group position={[0, 0, 0]}>
        <mesh position={[-2, 0, -1]} castShadow>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial 
            color="#00ffff" 
            emissive="#00ffff"
            emissiveIntensity={0.5}
            transparent
            opacity={0.7}
          />
        </mesh>
        
        <mesh position={[2, 0, 1]} castShadow>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial 
            color="#ec4899" 
            emissive="#ec4899"
            emissiveIntensity={0.5}
            transparent
            opacity={0.7}
          />
        </mesh>
        
        <mesh position={[0, -1, 0]} castShadow>
          <torusGeometry args={[0.5, 0.1, 16, 100]} />
          <meshStandardMaterial 
            color="#10b981" 
            emissive="#10b981"
            emissiveIntensity={0.5}
            transparent
            opacity={0.7}
          />
        </mesh>
      </group>
    </group>
  );
};

export default Hero3D;