import React, { useState } from 'react';
import { Menu, X, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            onClick={() => window.location.href = '/'}
            style={{ cursor: 'pointer' }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.img 
              src="/Simple Modern Minimalist Circle Design Studio Logo (3).png" 
              alt="LoopMind" 
              className="h-10 w-10"
              animate={{
                filter: [
                  'drop-shadow(0 0 10px rgba(147, 51, 234, 0.6))',
                  'drop-shadow(0 0 20px rgba(168, 85, 247, 0.8))',
                  'drop-shadow(0 0 10px rgba(147, 51, 234, 0.6))'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <span 
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5))',
                textShadow: '0 0 20px rgba(147, 51, 234, 0.5)'
              }}
            >
              LoopMind
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Demos', 'Pricing', "What's Coming"].map((item, index) => (
              <motion.a 
                key={item}
                href={item === 'Home' ? '/' : `#${item.toLowerCase().replace("'", '').replace(' ', '-')}`} 
                className="text-gray-200 hover:text-white transition-all duration-300 relative font-medium"
                style={{
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 0 15px rgba(147, 51, 234, 0.3)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  textShadow: '0 0 20px rgba(147, 51, 234, 0.8)'
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
            <motion.a 
              href="https://www.linkedin.com/company/107899358" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white transition-all duration-300 p-2 rounded-full"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
              whileHover={{ 
                scale: 1.1,
                background: 'rgba(147, 51, 234, 0.3)',
                boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
          </nav>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
            whileHover={{ 
              scale: 1.05,
              background: 'rgba(147, 51, 234, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-white/10"
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(20px)',
              borderRadius: '0 0 16px 16px',
              margin: '0 -1rem'
            }}
          >
            <div className="flex flex-col space-y-4 px-4">
              {['Home', 'Demos', 'Pricing', "What's Coming"].map((item, index) => (
                <motion.a 
                  key={item}
                  href={item === 'Home' ? '/' : `#${item.toLowerCase().replace("'", '').replace(' ', '-')}`} 
                  className="text-gray-200 hover:text-white transition-all duration-300 py-2 px-4 rounded-lg"
                  style={{
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
                    background: 'rgba(255, 255, 255, 0.05)'
                  }}
                  whileHover={{ 
                    background: 'rgba(147, 51, 234, 0.2)',
                    x: 10
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
              <motion.a 
                href="https://www.linkedin.com/company/107899358" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-all duration-300 flex items-center space-x-2 py-2 px-4 rounded-lg"
                style={{
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
                  background: 'rgba(255, 255, 255, 0.05)'
                }}
                whileHover={{ 
                  background: 'rgba(147, 51, 234, 0.2)',
                  x: 10
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;