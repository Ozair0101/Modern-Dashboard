import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center, Float } from '@react-three/drei';
import * as THREE from 'three';

const FloatingNavigation3D = () => {
  const navRef = useRef();
  const textRefs = useRef([]);

  // Animate the navigation
  useFrame((state) => {
    if (navRef.current) {
      navRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
    
    // Animate individual text items
    textRefs.current.forEach((text, index) => {
      if (text) {
        text.position.y = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.05;
      }
    });
  });

  const navItems = ['Home', 'Work', 'About', 'Contact'];

  return (
    <group position={[0, 3, 0]} ref={navRef}>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
        <Center>
          <group position={[0, 0, 0]}>
            {navItems.map((item, index) => (
              <Text3D
                key={item}
                ref={el => textRefs.current[index] = el}
                font="/fonts/helvetiker_regular.typeface.json"
                bevelEnabled
                bevelSize={0.02}
                bevelThickness={0.01}
                height={0.1}
                curveSegments={12}
                position={[-3 + index * 2, 0, 0]}
              >
                {item}
                <meshStandardMaterial 
                  color={index === 0 ? "#6366f1" : "#94a3b8"} 
                  metalness={0.7}
                  roughness={0.3}
                />
              </Text3D>
            ))}
          </group>
        </Center>
      </Float>
    </group>
  );
};

export default FloatingNavigation3D;