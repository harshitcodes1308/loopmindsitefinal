import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="min-h-screen text-white pt-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Terms & Conditions
          </h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Last updated: January 2025
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-6">
              By accessing and using LoopMind's services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
            <p className="text-gray-300 mb-6">
              LoopMind provides AI automation solutions including but not limited to chatbots, voice assistants, and custom automation systems. All services are provided "as is" and we reserve the right to modify or discontinue services at any time.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
            <p className="text-gray-300 mb-6">
              Users are responsible for providing accurate information, maintaining the confidentiality of their account credentials, and using our services in compliance with applicable laws and regulations.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
            <p className="text-gray-300 mb-6">
              All content, features, and functionality of our services are owned by LoopMind and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-300 mb-6">
              LoopMind shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">6. Contact Information</h2>
            <p className="text-gray-300 mb-6">
              For questions about these Terms & Conditions, please contact us via WhatsApp at +917905538458.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;