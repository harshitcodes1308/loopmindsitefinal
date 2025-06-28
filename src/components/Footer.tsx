import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  const policies = [
    { name: 'About Us', href: '/about' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Refund Policy', href: '/refund' },
    { name: 'Cancellation Policy', href: '/cancellation' }
  ];

  return (
    <footer 
      className="py-12 px-4 relative overflow-hidden border-t border-gray-700/50"
      style={{
        background: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 -8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <motion.img 
                src="/Simple Modern Minimalist Circle Design Studio Logo (3).png" 
                alt="LoopMind" 
                className="h-12 w-12"
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
            </div>
            <p 
              className="text-gray-400 mb-4"
              style={{
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'
              }}
            >
              Revolutionizing business automation with cutting-edge AI solutions.
            </p>
            <motion.a 
              href="https://www.linkedin.com/company/107899358" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors p-2 rounded-full inline-block"
              style={{
                background: 'rgba(147, 51, 234, 0.1)',
                border: '1px solid rgba(147, 51, 234, 0.3)'
              }}
              whileHover={{ 
                scale: 1.1,
                background: 'rgba(147, 51, 234, 0.2)',
                boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
          </motion.div>

          {/* Policies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 
              className="text-lg font-semibold text-white mb-4"
              style={{
                textShadow: '0 0 15px rgba(147, 51, 234, 0.6), 0 2px 8px rgba(0, 0, 0, 0.8)'
              }}
            >
              Legal
            </h3>
            <ul className="space-y-2">
              {policies.map((policy, index) => (
                <motion.li 
                  key={policy.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.a
                    href={policy.href}
                    className="text-gray-400 hover:text-white transition-colors py-1 px-2 rounded block"
                    style={{
                      textShadow: '0 2px 6px rgba(0, 0, 0, 0.8)'
                    }}
                    whileHover={{ 
                      x: 5,
                      color: '#ffffff',
                      textShadow: '0 0 10px rgba(147, 51, 234, 0.6)'
                    }}
                  >
                    {policy.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 
              className="text-lg font-semibold text-white mb-4"
              style={{
                textShadow: '0 0 15px rgba(147, 51, 234, 0.6), 0 2px 8px rgba(0, 0, 0, 0.8)'
              }}
            >
              Get in Touch
            </h3>
            <motion.a
              href="https://wa.me/+917905538458"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(34, 197, 94, 0.4)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span>WhatsApp</span>
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-700/50 mt-8 pt-8 text-center"
        >
          <p 
            className="text-gray-400"
            style={{
              textShadow: '0 2px 6px rgba(0, 0, 0, 0.8)'
            }}
          >
            © 2025 LoopMind. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;