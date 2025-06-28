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
          ...prev.slice(0, 4) // Reduced trail length for performance
        ];
        return newTrail;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Simplified trail particles */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="absolute w-1 h-1 rounded-full bg-purple-400"
          initial={{ 
            x: point.x - 2, 
            y: point.y - 2,
            scale: 1,
            opacity: 0.4
          }}
          animate={{ 
            scale: 0,
            opacity: 0
          }}
          transition={{ 
            duration: 0.5,
            ease: "easeOut"
          }}
        />
      ))}
      
      {/* Simplified main cursor glow */}
      <motion.div
        className="absolute w-3 h-3 rounded-full pointer-events-none bg-purple-400/30"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
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