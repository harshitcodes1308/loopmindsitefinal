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
        className="absolute top-10 right-20 w-96 h-96 rounded-full opacity-30 will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.6) 0%, rgba(147, 51, 234, 0.2) 40%, transparent 70%)',
          filter: 'blur(80px)'
        }}
        animate={{
          transform: [
            'translate3d(0, 0, 0) scale(1)',
            'translate3d(30px, -20px, 0) scale(1.1)',
            'translate3d(0, 0, 0) scale(1)'
          ],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-25 will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.7) 0%, rgba(168, 85, 247, 0.3) 40%, transparent 70%)',
          filter: 'blur(60px)'
        }}
        animate={{
          transform: [
            'translate3d(0, 0, 0) scale(1)',
            'translate3d(-25px, 15px, 0) scale(1.2)',
            'translate3d(0, 0, 0) scale(1)'
          ],
          opacity: [0.25, 0.35, 0.25]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full opacity-20 will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, rgba(139, 92, 246, 0.4) 30%, transparent 60%)',
          filter: 'blur(70px)'
        }}
        animate={{
          transform: [
            'translate3d(0, 0, 0) scale(1)',
            'translate3d(40px, -30px, 0) scale(1.3)',
            'translate3d(0, 0, 0) scale(1)'
          ],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      {/* Animated gradient waves - OPTIMIZED */}
      <motion.div
        className="absolute inset-0 will-change-auto"
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
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating particles with glow - OPTIMIZED */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full will-change-transform"
          style={{
            width: `${2 + (i % 3) * 1}px`,
            height: `${2 + (i % 3) * 1}px`,
            left: `${10 + i * 10}%`,
            top: `${15 + (i % 4) * 20}%`,
            background: `rgba(${i % 2 === 0 ? '147, 51, 234' : '168, 85, 247'}, ${0.5 + (i % 3) * 0.2})`,
            boxShadow: `0 0 ${10 + i}px rgba(${i % 2 === 0 ? '147, 51, 234' : '168, 85, 247'}, 0.6)`
          }}
          animate={{
            transform: [
              'translate3d(0, 0, 0) scale(1)',
              `translate3d(${Math.sin(i) * 15}px, ${-25 - (i % 3) * 5}px, 0) scale(${1.2 + (i % 2) * 0.1})`,
              'translate3d(0, 0, 0) scale(1)'
            ],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + i * 0.2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Optimized animated lines */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute w-full will-change-transform"
          style={{
            height: '1px',
            top: `${20 + i * 15}%`,
            background: `linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.5), rgba(168, 85, 247, 0.4), transparent)`,
            boxShadow: '0 0 6px rgba(147, 51, 234, 0.3)'
          }}
          animate={{
            transform: [
              'translate3d(-100%, 0, 0) scaleX(0)',
              'translate3d(0%, 0, 0) scaleX(1.2)',
              'translate3d(100%, 0, 0) scaleX(0)'
            ],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 5 + i * 0.8,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Vertical streams - OPTIMIZED */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`vertical-${i}`}
          className="absolute h-full will-change-transform"
          style={{
            width: '1px',
            left: `${30 + i * 20}%`,
            background: `linear-gradient(180deg, transparent, rgba(168, 85, 247, 0.5), rgba(147, 51, 234, 0.4), transparent)`,
            boxShadow: '0 0 6px rgba(168, 85, 247, 0.3)'
          }}
          animate={{
            transform: [
              'translate3d(0, -100%, 0) scaleY(0)',
              'translate3d(0, 0%, 0) scaleY(1.2)',
              'translate3d(0, 100%, 0) scaleY(0)'
            ],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 6 + i * 1,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Pulsing overlay for depth */}
      <motion.div
        className="absolute inset-0 will-change-opacity"
        style={{
          background: 'rgba(147, 51, 234, 0.05)'
        }}
        animate={{
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Neural network grid pattern - OPTIMIZED */}
      <motion.div
        className="absolute inset-0 opacity-8 will-change-transform"
        animate={{
          transform: [
            'translate3d(0, 0, 0)',
            'translate3d(20px, 20px, 0)',
            'translate3d(0, 0, 0)'
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      />
    </div>
  );
};

export default PremiumBackground;