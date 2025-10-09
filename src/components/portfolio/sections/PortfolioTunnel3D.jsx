import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

const PortfolioTunnel3D = () => {
  const tunnelRef = useRef();
  const segmentRefs = useRef([]);

  // Animate the tunnel
  useFrame((state) => {
    if (tunnelRef.current) {
      tunnelRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
    
    // Animate individual segments
    segmentRefs.current.forEach((segment, index) => {
      if (segment) {
        segment.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + index * 0.2) * 0.2;
        segment.position.y = Math.sin(state.clock.elapsedTime * 0.3 + index) * 0.1;
      }
    });
  });

  // Sample projects data
  const projects = [
    { title: "E-Commerce", tech: "React + Node" },
    { title: "Dashboard", tech: "Vue + D3" },
    { title: "Mobile App", tech: "React Native" },
    { title: "AI Platform", tech: "Python + TensorFlow" },
    { title: "Blockchain", tech: "Solidity + Web3" }
  ];

  return (
    <group position={[0, -1, -5]} ref={tunnelRef}>
      {/* Tunnel segments */}
      {projects.map((project, index) => (
        <group
          key={index}
          ref={el => segmentRefs.current[index] = el}
          position={[0, 0, -index * 2]}
        >
          {/* Tunnel ring */}
          <mesh castShadow receiveShadow>
            <torusGeometry args={[2, 0.1, 16, 100]} />
            <meshStandardMaterial 
              color={index % 2 === 0 ? "#6366f1" : "#8b5cf6"} 
              transparent
              opacity={0.3}
            />
          </mesh>
          
          {/* Project title */}
          <Center position={[0, 0.5, 0]}>
            <Text3D
              font="/fonts/helvetiker_regular.typeface.json"
              bevelEnabled
              bevelSize={0.01}
              bevelThickness={0.01}
              height={0.05}
              curveSegments={12}
              position={[0, 0, 0]}
            >
              {project.title}
              <meshStandardMaterial 
                color="#ffffff" 
                metalness={0.5}
                roughness={0.2}
              />
            </Text3D>
          </Center>
          
          {/* Project tech */}
          <Center position={[0, -0.5, 0]}>
            <Text3D
              font="/fonts/helvetiker_regular.typeface.json"
              bevelEnabled
              bevelSize={0.005}
              bevelThickness={0.005}
              height={0.02}
              curveSegments={12}
              position={[0, 0, 0]}
            >
              {project.tech}
              <meshStandardMaterial 
                color="#94a3b8" 
                metalness={0.3}
                roughness={0.4}
              />
            </Text3D>
          </Center>
          
          {/* Decorative spheres */}
          <mesh position={[1.5, 0, 0]} castShadow>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial 
              color="#00ffff" 
              emissive="#00ffff"
              emissiveIntensity={0.5}
            />
          </mesh>
          
          <mesh position={[-1.5, 0, 0]} castShadow>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial 
              color="#ec4899" 
              emissive="#ec4899"
              emissiveIntensity={0.5}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
};

export default PortfolioTunnel3D;