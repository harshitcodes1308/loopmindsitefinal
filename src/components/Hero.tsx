import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import TypewriterText from './TypewriterText';
import GlitchText from './GlitchText';
import AIOrb from './AIOrb';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 px-4 relative">
        <AIOrb />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.img 
            src="/Simple Modern Minimalist Circle Design Studio Logo (3).png" 
            alt="LoopMind" 
            className="h-32 w-32 mx-auto mb-6 opacity-90"
            whileHover={{ 
              scale: 1.15,
              filter: 'drop-shadow(0 0 50px rgba(139, 92, 246, 1)) drop-shadow(0 0 100px rgba(168, 85, 247, 0.8))'
            }}
            animate={{
              filter: [
                'drop-shadow(0 0 30px rgba(139, 92, 246, 0.9)) drop-shadow(0 0 60px rgba(168, 85, 247, 0.7)) drop-shadow(0 0 100px rgba(147, 51, 234, 0.5))',
                'drop-shadow(0 0 50px rgba(168, 85, 247, 1)) drop-shadow(0 0 80px rgba(139, 92, 246, 0.9)) drop-shadow(0 0 120px rgba(147, 51, 234, 0.7))',
                'drop-shadow(0 0 30px rgba(139, 92, 246, 0.9)) drop-shadow(0 0 60px rgba(168, 85, 247, 0.7)) drop-shadow(0 0 100px rgba(147, 51, 234, 0.5))'
              ],
              scale: [1, 1.05, 1],
              y: [0, -5, 0]
            }}
            transition={{ 
              hover: { duration: 0.3 },
              filter: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              background: 'radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 70%)',
              borderRadius: '50%',
              padding: '10px'
            }}
          />
          
          {/* Enhanced glow ring around logo */}
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              width: '160px',
              height: '160px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'conic-gradient(from 0deg, rgba(147, 51, 234, 0.6), rgba(168, 85, 247, 0.8), rgba(139, 92, 246, 0.6), rgba(147, 51, 234, 0.6))',
              filter: 'blur(20px)',
              zIndex: -1
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.9, 0.6]
            }}
            transition={{
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            style={{
              textShadow: '0 0 40px rgba(147, 51, 234, 0.8), 0 0 80px rgba(168, 85, 247, 0.6), 0 4px 20px rgba(0, 0, 0, 0.9)',
              filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.7)) drop-shadow(0 4px 10px rgba(0, 0, 0, 0.8))'
            }}
          >
            <GlitchText text="Welcome to the Loop" />
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-300 mb-12"
        >
          <div
            style={{
              textShadow: '0 0 20px rgba(147, 51, 234, 0.6), 0 2px 10px rgba(0, 0, 0, 0.9), 0 0 40px rgba(168, 85, 247, 0.4)',
              filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.8))'
            }}
          >
            <TypewriterText 
              text="Where AI meets infinite possibilities"
              className="font-light"
              delay={1200}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ 
              y: [0, 15, 0],
            }}
            transition={{ 
              y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="cursor-pointer"
            style={{
              filter: 'drop-shadow(0 0 15px rgba(147, 51, 234, 0.8))'
            }}
          >
            <ChevronDown className="h-8 w-8 text-purple-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;