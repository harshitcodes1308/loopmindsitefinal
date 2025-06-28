import React from 'react';
import { motion } from 'framer-motion';

const AIOrb = () => {
  return (
    <motion.div
      className="absolute top-8 right-8 w-16 h-16"
      animate={{
        y: [0, -10, 0],
        rotate: [0, 360],
      }}
      transition={{
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        },
        rotate: {
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }
      }}
    >
      <div className="relative w-full h-full">
        {/* Core orb */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-80"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Outer glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 blur-md opacity-50"
          animate={{
            scale: [1.2, 1.5, 1.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Inner pulse */}
        <motion.div
          className="absolute inset-2 rounded-full bg-white opacity-30"
          animate={{
            scale: [0.8, 1, 0.8],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
};

export default AIOrb;