import { useState, useEffect, useRef } from 'react';

// Custom hook for interactive background movement
export const useInteractiveBackground = (sensitivity = 0.05, maxOffset = 50) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef();
  
  // Handle mouse movement for parallax effect
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Apply sensitivity and constrain movement
    const offsetX = Math.max(-maxOffset, Math.min(maxOffset, mouseX * sensitivity));
    const offsetY = Math.max(-maxOffset, Math.min(maxOffset, mouseY * sensitivity));
    
    setOffset({ x: offsetX, y: offsetY });
  };
  
  // Handle device orientation for mobile gyroscope
  const handleDeviceOrientation = (e) => {
    if (!e.gamma || !e.beta) return;
    
    // Normalize gamma (-90 to 90) and beta (-180 to 180) to offset values
    const offsetX = Math.max(-maxOffset, Math.min(maxOffset, (e.gamma / 90) * maxOffset));
    const offsetY = Math.max(-maxOffset, Math.min(maxOffset, (e.beta / 180) * maxOffset));
    
    setOffset({ x: offsetX, y: offsetY });
  };
  
  // Handle drag start
  const handleDragStart = (e) => {
    setIsDragging(true);
    const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    const clientY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;
    setDragStart({ x: clientX, y: clientY });
  };
  
  // Handle dragging
  const handleDragging = (e) => {
    if (!isDragging) return;
    
    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const clientY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;
    
    const deltaX = clientX - dragStart.x;
    const deltaY = clientY - dragStart.y;
    
    // Apply sensitivity and constrain movement
    const offsetX = Math.max(-maxOffset, Math.min(maxOffset, offset.x + deltaX * sensitivity));
    const offsetY = Math.max(-maxOffset, Math.min(maxOffset, offset.y + deltaY * sensitivity));
    
    setOffset({ x: offsetX, y: offsetY });
    setDragStart({ x: clientX, y: clientY });
  };
  
  // Handle drag end
  const handleDragEnd = () => {
    setIsDragging(false);
    
    // Return to center with spring-like animation
    const returnToCenter = () => {
      setOffset(prev => {
        const newX = prev.x * 0.9;
        const newY = prev.y * 0.9;
        
        // Stop animation when close to center
        if (Math.abs(newX) < 0.1 && Math.abs(newY) < 0.1) {
          return { x: 0, y: 0 };
        }
        
        return { x: newX, y: newY };
      });
      
      // Continue animation if not at center
      if (Math.abs(offset.x) > 0.1 || Math.abs(offset.y) > 0.1) {
        requestAnimationFrame(returnToCenter);
      }
    };
    
    requestAnimationFrame(returnToCenter);
  };
  
  // Magnetic cursor effect
  const handleMagneticEffect = (e) => {
    if (isDragging) return;
    
    handleMouseMove(e);
  };
  
  // Set up event listeners
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    
    // Mouse events
    container.addEventListener('mousemove', handleMagneticEffect);
    container.addEventListener('mousedown', handleDragStart);
    window.addEventListener('mousemove', handleDragging);
    window.addEventListener('mouseup', handleDragEnd);
    
    // Touch events
    container.addEventListener('touchstart', handleDragStart);
    window.addEventListener('touchmove', handleDragging);
    window.addEventListener('touchend', handleDragEnd);
    
    // Device orientation
    window.addEventListener('deviceorientation', handleDeviceOrientation);
    
    return () => {
      container.removeEventListener('mousemove', handleMagneticEffect);
      container.removeEventListener('mousedown', handleDragStart);
      window.removeEventListener('mousemove', handleDragging);
      window.removeEventListener('mouseup', handleDragEnd);
      
      container.removeEventListener('touchstart', handleDragStart);
      window.removeEventListener('touchmove', handleDragging);
      window.removeEventListener('touchend', handleDragEnd);
      
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, [isDragging, dragStart, offset, sensitivity, maxOffset]);
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      setIsDragging(false);
    };
  }, []);
  
  return {
    offset,
    isDragging,
    containerRef
  };
};