import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Users, AlertCircle } from 'lucide-react';

const Terms = () => {
  const sections = [
    {
      icon: FileText,
      title: 'Acceptance of Terms',
      content: 'By accessing and using LoopMind\'s services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      icon: Shield,
      title: 'Services Description',
      content: 'LoopMind provides AI automation solutions including but not limited to chatbots, voice assistants, and custom automation systems. All services are provided "as is" and we reserve the right to modify or discontinue services at any time with reasonable notice.'
    },
    {
      icon: Users,
      title: 'User Responsibilities',
      content: 'Users are responsible for providing accurate information, maintaining the confidentiality of their account credentials, and using our services in compliance with applicable laws and regulations. You agree not to use our services for any unlawful or prohibited activities.'
    },
    {
      icon: AlertCircle,
      title: 'Limitation of Liability',
      content: 'LoopMind shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid by you for the services in the preceding 12 months.'
    }
  ];

  return (
    <div className="min-h-screen text-white pt-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            style={{
              textShadow: '0 0 30px rgba(147, 51, 234, 0.8)',
              filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.7))'
            }}
          >
            Terms & Conditions
          </h1>
          <p className="text-gray-400 text-lg">
            Last updated: January 29, 2025
          </p>
        </motion.div>

        {/* Key Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mr-4">
                  <section.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{section.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Terms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700 rounded-3xl p-8 md:p-12"
        >
          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">Detailed Terms</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">1. Service Availability</h3>
                <p className="text-gray-300 leading-relaxed">
                  We strive to maintain 99.9% uptime for our services. However, we do not guarantee uninterrupted access and may perform maintenance that temporarily affects service availability. We will provide advance notice of scheduled maintenance whenever possible.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">2. Intellectual Property</h3>
                <p className="text-gray-300 leading-relaxed">
                  All content, features, and functionality of our services are owned by LoopMind and are protected by international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-green-400 mb-3">3. Payment Terms</h3>
                <p className="text-gray-300 leading-relaxed">
                  Payment for services is due according to the agreed schedule. Late payments may result in service suspension. All fees are non-refundable except as specifically outlined in our Refund Policy. Prices may change with 30 days notice.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-pink-400 mb-3">4. Data Privacy</h3>
                <p className="text-gray-300 leading-relaxed">
                  We are committed to protecting your privacy and data security. Our data handling practices are outlined in our Privacy Policy. We will not share your data with third parties without your consent, except as required by law.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-400 mb-3">5. Termination</h3>
                <p className="text-gray-300 leading-relaxed">
                  Either party may terminate services with 30 days written notice. We reserve the right to immediately terminate services for breach of these terms. Upon termination, you will lose access to all services and data may be deleted after a 30-day grace period.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-red-400 mb-3">6. Governing Law</h3>
                <p className="text-gray-300 leading-relaxed">
                  These terms are governed by the laws of India. Any disputes will be resolved through binding arbitration in accordance with the rules of the Indian Arbitration and Conciliation Act, 2015.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">7. Changes to Terms</h3>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the modified terms. We will notify users of significant changes via email or service notifications.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-purple-600/20 border border-purple-500/50 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3">Contact Information</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                For questions about these Terms & Conditions or to report violations, please contact us:
              </p>
              <motion.a
                href="https://wa.me/+917905538458"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>WhatsApp: +91 7905538458</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;