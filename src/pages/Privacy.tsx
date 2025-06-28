import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from 'lucide-react';

const Privacy = () => {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: 'We collect information you provide directly to us, such as when you contact us for services, and information automatically collected when you use our services, including usage data and device information.'
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, communicate with you, process transactions, and comply with legal obligations.'
    },
    {
      icon: Shield,
      title: 'Information Sharing',
      content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.'
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction using industry-standard encryption and security protocols.'
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
            Privacy Policy
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

        {/* Detailed Privacy Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700 rounded-3xl p-8 md:p-12"
        >
          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">Detailed Privacy Information</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">1. Types of Data Collected</h3>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• <strong>Personal Information:</strong> Name, email address, phone number, company details</li>
                  <li>• <strong>Usage Data:</strong> How you interact with our services, features used, time spent</li>
                  <li>• <strong>Technical Data:</strong> IP address, browser type, device information, operating system</li>
                  <li>• <strong>Communication Data:</strong> Messages, feedback, and support requests</li>
                  <li>• <strong>Business Data:</strong> Information related to your AI automation requirements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">2. Legal Basis for Processing</h3>
                <p className="text-gray-300 leading-relaxed">
                  We process your personal data based on legitimate business interests, contractual necessity, legal compliance, and your consent where required. You have the right to withdraw consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-green-400 mb-3">3. Data Retention</h3>
                <p className="text-gray-300 leading-relaxed">
                  We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy. Typically, we retain data for the duration of our business relationship plus 7 years for legal and accounting purposes, unless a longer retention period is required by law.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-pink-400 mb-3">4. International Data Transfers</h3>
                <p className="text-gray-300 leading-relaxed">
                  Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place, including standard contractual clauses and adequacy decisions, to protect your data during international transfers.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-400 mb-3">5. Third-Party Services</h3>
                <p className="text-gray-300 leading-relaxed">
                  We may use third-party services for analytics, payment processing, and communication. These services have their own privacy policies, and we encourage you to review them. We only share data necessary for these services to function and require them to maintain appropriate security measures.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-red-400 mb-3">6. Cookies and Tracking</h3>
                <p className="text-gray-300 leading-relaxed">
                  We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content. You can control cookie settings through your browser, though some features may not function properly if cookies are disabled.
                </p>
              </div>
            </div>

            {/* Your Rights Section */}
            <div className="mt-12 p-6 bg-blue-600/20 border border-blue-500/50 rounded-2xl">
              <div className="flex items-center mb-4">
                <UserCheck className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Your Privacy Rights</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-white mb-2">Access & Portability</h4>
                  <p className="text-sm">Request access to your personal data and receive it in a portable format</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Rectification</h4>
                  <p className="text-sm">Request correction of inaccurate or incomplete personal data</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Erasure</h4>
                  <p className="text-sm">Request deletion of your personal data under certain circumstances</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Restriction</h4>
                  <p className="text-sm">Request limitation of processing of your personal data</p>
                </div>
              </div>
            </div>

            {/* Security Measures */}
            <div className="mt-8 p-6 bg-green-600/20 border border-green-500/50 rounded-2xl">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Security Measures</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• End-to-end encryption for data transmission</li>
                <li>• Regular security audits and vulnerability assessments</li>
                <li>• Multi-factor authentication for administrative access</li>
                <li>• Secure data centers with physical access controls</li>
                <li>• Employee training on data protection and security</li>
                <li>• Incident response procedures for data breaches</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="mt-8 p-6 bg-purple-600/20 border border-purple-500/50 rounded-2xl">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-8 w-8 text-purple-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Data Protection Contact</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                For questions about this Privacy Policy, to exercise your rights, or to report privacy concerns, please contact us:
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
              <p className="text-gray-400 text-sm mt-4">
                We will respond to your privacy requests within 30 days of receipt.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;