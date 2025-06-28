import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppFloat = () => {
  return (
    <motion.a
      href="https://wa.me/+917905538458"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-600 blur-lg opacity-60"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Main button */}
      <motion.div
        className="relative bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm border border-green-400/50"
        animate={{
          boxShadow: [
            '0 4px 20px rgba(34, 197, 94, 0.4)',
            '0 8px 30px rgba(34, 197, 94, 0.6)',
            '0 4px 20px rgba(34, 197, 94, 0.4)'
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <MessageCircle className="h-6 w-6" />
        
        {/* Notification dot */}
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.a>
  );
};

export default WhatsAppFloat;