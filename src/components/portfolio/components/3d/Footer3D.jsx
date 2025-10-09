import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center, Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Footer3D = () => {
  const footerRef = useRef();
  const textRef = useRef();

  // Rotate the footer slowly
  useFrame((state) => {
    if (footerRef.current) {
      footerRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
    if (textRef.current) {
      textRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    }
  });

  return (
    <group position={[0, -3, 0]} ref={footerRef}>
      {/* Footer base plate */}
      <mesh position={[0, -0.1, 0]} receiveShadow>
        <boxGeometry args={[8, 0.1, 0.5]} />
        <meshStandardMaterial 
          color="#1e293b" 
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>

      {/* Floating 3D text */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Center position={[0, 0, 0]}>
          <Text3D
            ref={textRef}
            font="/fonts/helvetiker_regular.typeface.json"
            bevelEnabled
            bevelSize={0.02}
            bevelThickness={0.02}
            height={0.1}
            curveSegments={12}
            position={[0, 0, 0]}
          >
            © 2023 Mohammad Ozair Khurami
            <MeshTransmissionMaterial
              color="#6366f1"
              transmission={0.9}
              roughness={0.1}
              thickness={0.2}
              ior={1.5}
              chromaticAberration={0.05}
              opacity={0.8}
              transparent
            />
          </Text3D>
        </Center>
      </Float>

      {/* Decorative elements */}
      <mesh position={[-3.5, 0, 0]} castShadow>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial 
          color="#8b5cf6" 
          emissive="#8b5cf6"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      <mesh position={[3.5, 0, 0]} castShadow>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial 
          color="#8b5cf6" 
          emissive="#8b5cf6"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Social media icons (simplified as spheres) */}
      <group position={[0, 0.2, 0]}>
        {['#64748b', '#8b5cf6', '#ec4899'].map((color, index) => (
          <mesh 
            key={index}
            position={[-0.4 + index * 0.4, 0, 0]}
            castShadow
          >
            <sphereGeometry args={[0.03, 16, 16]} />
            <meshStandardMaterial 
              color={color}
              emissive={color}
              emissiveIntensity={0.3}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
};

export default Footer3D;