import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  const [glitchText, setGlitchText] = useState(text);
  const [hasGlitched, setHasGlitched] = useState(false);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
  const triggerGlitch = () => {
    if (hasGlitched) return;
    
    setHasGlitched(true);
    let iterations = 0;
    
    const interval = setInterval(() => {
      setGlitchText(
        text
          .split('')
          .map((char, index) => {
            if (index < iterations) {
              return text[index];
            }
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join('')
      );
      
      if (iterations >= text.length) {
        clearInterval(interval);
        setGlitchText(text);
      }
      
      iterations += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    const timer = setTimeout(triggerGlitch, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.span
      className={`${className} ${!hasGlitched ? 'animate-pulse' : ''}`}
      style={{
        textShadow: !hasGlitched 
          ? '0.05em 0 0 #00ffff, -0.03em -0.04em 0 #ff00ff, 0.025em 0.04em 0 #ffff00'
          : 'none'
      }}
    >
      {glitchText}
    </motion.span>
  );
};

export default GlitchText;