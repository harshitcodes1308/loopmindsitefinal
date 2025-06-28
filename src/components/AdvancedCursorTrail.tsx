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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      setTrail(prev => {
        const newTrail = [
          { x: e.clientX, y: e.clientY, id: Date.now() },
          ...prev.slice(0, 6) // Optimized trail length
        ];
        return newTrail;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Optimized trail particles */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="absolute w-2 h-2 rounded-full bg-purple-400 will-change-transform"
          initial={{ 
            x: point.x - 4, 
            y: point.y - 4,
            scale: 1,
            opacity: 0.6
          }}
          animate={{ 
            scale: 0,
            opacity: 0
          }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut"
          }}
          style={{
            filter: `blur(${index * 0.1}px)`,
          }}
        />
      ))}
      
      {/* Main cursor glow - optimized */}
      <motion.div
        className="absolute w-4 h-4 rounded-full pointer-events-none bg-purple-400/40 will-change-transform"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25
        }}
      />
    </div>
  );
};

export default AdvancedCursorTrail;