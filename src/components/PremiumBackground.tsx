import React from 'react';
import { motion } from 'framer-motion';

const PremiumBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
      {/* Main deep purple gradient base - exactly like first image */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(147, 51, 234, 0.4) 0%, rgba(147, 51, 234, 0.1) 40%, transparent 70%),
            radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.3) 0%, rgba(168, 85, 247, 0.08) 40%, transparent 70%),
            radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 80%),
            linear-gradient(135deg, #1a0b2e 0%, #16213e 25%, #0f3460 50%, #16213e 75%, #1a0b2e 100%)
          `
        }}
      />

      {/* Large animated purple orbs - like in first image */}
      <motion.div
        className="absolute top-10 right-20 w-96 h-96 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.6) 0%, rgba(147, 51, 234, 0.2) 40%, transparent 70%)',
          filter: 'blur(80px)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.7) 0%, rgba(168, 85, 247, 0.3) 40%, transparent 70%)',
          filter: 'blur(60px)'
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.4, 0.25],
          x: [0, -25, 0],
          y: [0, 15, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, rgba(139, 92, 246, 0.4) 30%, transparent 60%)',
          filter: 'blur(70px)'
        }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.35, 0.2],
          x: [0, 40, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      {/* Animated gradient waves - OPTIMIZED */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(circle at 25% 25%, rgba(147, 51, 234, 0.3) 0%, rgba(147, 51, 234, 0.1) 40%, transparent 70%),
             radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.25) 0%, rgba(168, 85, 247, 0.08) 40%, transparent 70%)`,
            `radial-gradient(circle at 75% 25%, rgba(168, 85, 247, 0.3) 0%, rgba(168, 85, 247, 0.1) 40%, transparent 70%),
             radial-gradient(circle at 25% 75%, rgba(147, 51, 234, 0.25) 0%, rgba(147, 51, 234, 0.08) 40%, transparent 70%)`,
            `radial-gradient(circle at 50% 80%, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%),
             radial-gradient(circle at 50% 20%, rgba(168, 85, 247, 0.25) 0%, rgba(168, 85, 247, 0.08) 40%, transparent 70%)`
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating particles with glow - OPTIMIZED */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full will-change-transform"
          style={{
            width: `${2 + (i % 3) * 1}px`,
            height: `${2 + (i % 3) * 1}px`,
            left: `${5 + i * 6}%`,
            top: `${10 + (i % 5) * 18}%`,
            background: `rgba(${i % 2 === 0 ? '147, 51, 234' : '168, 85, 247'}, ${0.5 + (i % 3) * 0.2})`,
            boxShadow: `0 0 ${10 + i}px rgba(${i % 2 === 0 ? '147, 51, 234' : '168, 85, 247'}, 0.6)`
          }}
          animate={{
            y: [0, -30 - (i % 3) * 8, 0],
            x: [0, Math.sin(i) * 20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.3 + (i % 2) * 0.2, 1]
          }}
          transition={{
            duration: 5 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Optimized animated lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute w-full will-change-transform"
          style={{
            height: '1px',
            top: `${15 + i * 12}%`,
            background: `linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.5), rgba(168, 85, 247, 0.4), transparent)`,
            boxShadow: '0 0 6px rgba(147, 51, 234, 0.3)'
          }}
          animate={{
            scaleX: [0, 1.5, 0],
            opacity: [0, 0.6, 0],
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 6 + i * 1.2,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Vertical streams - OPTIMIZED */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`vertical-${i}`}
          className="absolute h-full will-change-transform"
          style={{
            width: '1px',
            left: `${25 + i * 15}%`,
            background: `linear-gradient(180deg, transparent, rgba(168, 85, 247, 0.5), rgba(147, 51, 234, 0.4), transparent)`,
            boxShadow: '0 0 6px rgba(168, 85, 247, 0.3)'
          }}
          animate={{
            scaleY: [0, 1.5, 0],
            opacity: [0, 0.6, 0],
            y: ['-100%', '100%']
          }}
          transition={{
            duration: 8 + i * 1.5,
            repeat: Infinity,
            delay: i * 1.2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Pulsing overlay for depth */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'rgba(147, 51, 234, 0.05)'
        }}
        animate={{
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Neural network grid pattern - OPTIMIZED */}
      <motion.div
        className="absolute inset-0 opacity-8"
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px', '0px 0px']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};

export default PremiumBackground;