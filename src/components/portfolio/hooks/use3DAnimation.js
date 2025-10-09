import { useState, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import gsap from 'gsap';

// Custom hook for 3D hover effects
export const use3DHover = () => {
  const [hovered, setHovered] = useState(false);
  
  const hoverProps = {
    onPointerOver: () => setHovered(true),
    onPointerOut: () => setHovered(false)
  };
  
  return [hovered, hoverProps];
};

// Custom hook for 3D rotation animation
export const use3DRotation = (speed = 1) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * speed;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.2;
    }
  });
  
  return meshRef;
};

// Custom hook for 3D floating animation
export const use3DFloating = (amplitude = 0.5, frequency = 1) => {
  const meshRef = useRef();
  const initialPosition = useRef();
  
  useEffect(() => {
    if (meshRef.current) {
      initialPosition.current = meshRef.current.position.clone();
    }
  }, []);
  
  useFrame((state) => {
    if (meshRef.current && initialPosition.current) {
      meshRef.current.position.y = initialPosition.current.y + Math.sin(state.clock.elapsedTime * frequency) * amplitude;
    }
  });
  
  return meshRef;
};

// Custom hook for scroll-based 3D animations
export const useScroll3D = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return scrollY;
};

// Custom hook for mouse-based 3D interactions
export const useMouse3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return mousePosition;
};

// Custom hook for GSAP 3D animations
export const useGSAP3D = (targetRef, animations) => {
  useEffect(() => {
    if (targetRef.current) {
      animations.forEach(anim => {
        gsap.to(targetRef.current.position, {
          ...anim.position,
          duration: anim.duration || 1,
          ease: anim.ease || "power2.out"
        });
        
        if (anim.rotation) {
          gsap.to(targetRef.current.rotation, {
            ...anim.rotation,
            duration: anim.duration || 1,
            ease: anim.ease || "power2.out"
          });
        }
      });
    }
  }, [targetRef, animations]);
};