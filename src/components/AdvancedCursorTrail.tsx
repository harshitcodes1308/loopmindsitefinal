import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

const AdvancedCursorTrail = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let moveTimeout: NodeJS.Timeout;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => setIsMoving(false), 100);
      
      setTrail(prev => {
        const newTrail = [
          { x: e.clientX, y: e.clientY, id: Date.now() },
          ...prev.slice(0, 4) // Further optimized trail length
        ];
        return newTrail;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(moveTimeout);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 hidden md:block">
      {/* Only show trail when moving and on desktop */}
      {isMoving && trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="absolute w-1.5 h-1.5 rounded-full bg-purple-400/60 will-change-transform"
          initial={{ 
            x: point.x - 4, 
            y: point.y - 4,
            scale: 1,
            opacity: 0.4
          }}
          animate={{ 
            scale: 0,
            opacity: 0
          }}
          transition={{ 
            duration: 0.4,
            ease: "easeOut"
          }}
        />
      ))}
      
      {/* Main cursor glow - only on desktop */}
      <motion.div
        className="absolute w-3 h-3 rounded-full pointer-events-none bg-purple-400/30 will-change-transform hidden md:block"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      />
    </div>
  );
};

export default AdvancedCursorTrail;