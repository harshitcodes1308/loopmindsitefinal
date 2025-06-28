import React from 'react';
import { motion } from 'framer-motion';

const PremiumBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
      {/* Main deep purple gradient base */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(147, 51, 234, 0.3) 0%, rgba(147, 51, 234, 0.08) 40%, transparent 70%),
            radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.25) 0%, rgba(168, 85, 247, 0.06) 40%, transparent 70%),
            radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.03) 50%, transparent 80%),
            linear-gradient(135deg, #1a0b2e 0%, #16213e 25%, #0f3460 50%, #16213e 75%, #1a0b2e 100%)
          `
        }}
      />

      {/* Simplified animated orbs */}
      <motion.div
        className="absolute top-10 right-20 w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
          x: [0, 20, 0],
          y: [0, -15, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, transparent 70%)',
          filter: 'blur(50px)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, -15, 0],
          y: [0, 10, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Reduced floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            left: `${10 + i * 10}%`,
            top: `${15 + (i % 4) * 20}%`,
            background: `rgba(${i % 2 === 0 ? '147, 51, 234' : '168, 85, 247'}, 0.4)`,
            boxShadow: `0 0 8px rgba(${i % 2 === 0 ? '147, 51, 234' : '168, 85, 247'}, 0.6)`
          }}
          animate={{
            y: [0, -20 - (i % 2) * 5, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Subtle pulsing overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'rgba(147, 51, 234, 0.03)'
        }}
        animate={{
          opacity: [0.03, 0.08, 0.03]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default PremiumBackground;