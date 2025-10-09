import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

const SkillsSphere3D = () => {
  const sphereRef = useRef();
  const skillRefs = useRef([]);

  // Animate the sphere
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    
    // Animate individual skills
    skillRefs.current.forEach((skill, index) => {
      if (skill) {
        skill.rotation.y = -sphereRef.current.rotation.y;
        skill.position.y = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.05;
      }
    });
  });

  // Sample skills data
  const skills = [
    { name: "React", position: [1.5, 0, 0] },
    { name: "Node.js", position: [0, 1.5, 0] },
    { name: "Python", position: [-1.5, 0, 0] },
    { name: "UI/UX", position: [0, -1.5, 0] },
    { name: "Three.js", position: [1, 1, 0] },
    { name: "GSAP", position: [-1, 1, 0] }
  ];

  return (
    <group position={[3, 0, -3]} ref={sphereRef}>
      {/* Central sphere */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#1e293b" 
          metalness={0.7}
          roughness={0.3}
          transparent
          opacity={0.5}
        />
      </mesh>
      
      {/* Orbit rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[1.8, 0.02, 16, 100]} />
        <meshStandardMaterial 
          color="#6366f1" 
          transparent
          opacity={0.3}
        />
      </mesh>
      
      <mesh rotation={[0, Math.PI / 2, 0]} castShadow>
        <torusGeometry args={[1.8, 0.02, 16, 100]} />
        <meshStandardMaterial 
          color="#8b5cf6" 
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Skills floating around the sphere */}
      {skills.map((skill, index) => (
        <group
          key={skill.name}
          ref={el => skillRefs.current[index] = el}
          position={skill.position}
        >
          <Center>
            <Text3D
              font="/fonts/helvetiker_regular.typeface.json"
              bevelEnabled
              bevelSize={0.01}
              bevelThickness={0.01}
              height={0.05}
              curveSegments={12}
            >
              {skill.name}
              <meshStandardMaterial 
                color="#ffffff" 
                metalness={0.5}
                roughness={0.2}
              />
            </Text3D>
          </Center>
          
          {/* Decorative point */}
          <mesh castShadow>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial 
              color={index % 2 === 0 ? "#00ffff" : "#ec4899"} 
              emissive={index % 2 === 0 ? "#00ffff" : "#ec4899"}
              emissiveIntensity={0.5}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
};

export default SkillsSphere3D;