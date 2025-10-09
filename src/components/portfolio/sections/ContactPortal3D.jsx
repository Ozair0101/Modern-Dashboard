import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

const ContactPortal3D = () => {
  const portalRef = useRef();
  const textRef = useRef();

  // Animate the portal
  useFrame((state) => {
    if (portalRef.current) {
      portalRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
    
    if (textRef.current) {
      textRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group position={[-3, 0, -3]} ref={portalRef}>
      {/* Portal frame */}
      <mesh castShadow receiveShadow>
        <ringGeometry args={[1.2, 1, 64]} />
        <meshStandardMaterial 
          color="#6366f1" 
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.7}
        />
      </mesh>
      
      {/* Inner glow */}
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial 
          color="#8b5cf6" 
          emissive="#8b5cf6"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Contact text */}
      <Center position={[0, 0, 0]}>
        <Text3D
          ref={textRef}
          font="/fonts/helvetiker_regular.typeface.json"
          bevelEnabled
          bevelSize={0.02}
          bevelThickness={0.02}
          height={0.1}
          curveSegments={12}
        >
          CONTACT
          <meshStandardMaterial 
            color="#ffffff" 
            metalness={0.5}
            roughness={0.2}
          />
        </Text3D>
      </Center>
      
      {/* Decorative particles */}
      <group>
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const x = Math.cos(angle) * 1.1;
          const z = Math.sin(angle) * 1.1;
          
          return (
            <mesh key={i} position={[x, 0, z]} castShadow>
              <sphereGeometry args={[0.05, 16, 16]} />
              <meshStandardMaterial 
                color="#00ffff" 
                emissive="#00ffff"
                emissiveIntensity={0.5}
              />
            </mesh>
          );
        })}
      </group>
    </group>
  );
};

export default ContactPortal3D;