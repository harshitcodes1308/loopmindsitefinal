import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Clock, CheckCircle, XCircle, DollarSign, FileText } from 'lucide-react';

const Refund = () => {
  const refundTypes = [
    {
      icon: CheckCircle,
      title: 'Full Refund Eligible',
      items: [
        'Service not delivered within agreed timeframe',
        'Technical issues preventing service functionality',
        'Significant deviation from agreed specifications',
        'Cancellation within 48 hours of initial payment'
      ],
      color: 'green'
    },
    {
      icon: RefreshCw,
      title: 'Partial Refund Eligible',
      items: [
        'Partially completed custom development projects',
        'Service interruptions exceeding 72 hours',
        'Feature limitations not disclosed upfront',
        'Early termination of annual contracts'
      ],
      color: 'blue'
    },
    {
      icon: XCircle,
      title: 'Non-Refundable',
      items: [
        'Consultation and discovery session fees',
        'Third-party service integration costs',
        'Completed and delivered custom work',
        'Monthly subscriptions (current billing period)'
      ],
      color: 'red'
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
            Refund Policy
          </h1>
          <p className="text-gray-400 text-lg">
            Last updated: January 29, 2025
          </p>
        </motion.div>

        {/* Refund Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {refundTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${
                  type.color === 'green' ? 'from-green-500 to-green-600' :
                  type.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  'from-red-500 to-red-600'
                } flex items-center justify-center mr-4`}>
                  <type.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">{type.title}</h3>
              </div>
              <ul className="space-y-2">
                {type.items.map((item, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-start">
                    <span className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Detailed Refund Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700 rounded-3xl p-8 md:p-12"
        >
          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">Refund Process & Timeline</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">1. Refund Request Submission</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  To request a refund, contact us via WhatsApp at +91 7905538458 with the following information:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Project or service reference number</li>
                  <li>• Detailed reason for refund request</li>
                  <li>• Supporting documentation (if applicable)</li>
                  <li>• Preferred refund method</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">2. Review Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-blue-600/20 border border-blue-500/50 rounded-xl p-4 text-center">
                    <Clock className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-white mb-1">Initial Review</h4>
                    <p className="text-gray-300 text-sm">1-2 Business Days</p>
                  </div>
                  <div className="bg-purple-600/20 border border-purple-500/50 rounded-xl p-4 text-center">
                    <FileText className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-white mb-1">Investigation</h4>
                    <p className="text-gray-300 text-sm">3-5 Business Days</p>
                  </div>
                  <div className="bg-green-600/20 border border-green-500/50 rounded-xl p-4 text-center">
                    <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-white mb-1">Decision</h4>
                    <p className="text-gray-300 text-sm">1 Business Day</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Our team will thoroughly review your request, examine project deliverables, and assess the situation against our refund policy criteria.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-green-400 mb-3">3. Refund Processing</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Once approved, refunds are processed according to the following timeline:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 border border-gray-600 rounded-xl p-4">
                    <h4 className="font-semibold text-white mb-2">Bank Transfer</h4>
                    <p className="text-gray-300 text-sm">3-5 business days</p>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-600 rounded-xl p-4">
                    <h4 className="font-semibold text-white mb-2">Digital Wallets</h4>
                    <p className="text-gray-300 text-sm">1-2 business days</p>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-600 rounded-xl p-4">
                    <h4 className="font-semibold text-white mb-2">Credit Card</h4>
                    <p className="text-gray-300 text-sm">5-10 business days</p>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-600 rounded-xl p-4">
                    <h4 className="font-semibold text-white mb-2">International</h4>
                    <p className="text-gray-300 text-sm">7-15 business days</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-pink-400 mb-3">4. Partial Refund Calculation</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  For partially completed projects, refunds are calculated based on:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Percentage of work completed and delivered</li>
                  <li>• Resources and time invested in the project</li>
                  <li>• Third-party costs already incurred</li>
                  <li>• Intellectual property and custom development delivered</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-400 mb-3">5. Special Circumstances</h3>
                <div className="space-y-4">
                  <div className="bg-orange-600/20 border border-orange-500/50 rounded-xl p-4">
                    <h4 className="font-semibold text-white mb-2">Emergency Situations</h4>
                    <p className="text-gray-300 text-sm">
                      In cases of business closure, medical emergencies, or other extraordinary circumstances, we may offer expedited refund processing and flexible terms.
                    </p>
                  </div>
                  <div className="bg-cyan-600/20 border border-cyan-500/50 rounded-xl p-4">
                    <h4 className="font-semibold text-white mb-2">Service Credits</h4>
                    <p className="text-gray-300 text-sm">
                      As an alternative to monetary refunds, we may offer service credits for future projects or extended service periods of equal value.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-12 p-6 bg-purple-600/20 border border-purple-500/50 rounded-2xl">
              <div className="flex items-center mb-4">
                <DollarSign className="h-8 w-8 text-purple-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Need Help with a Refund?</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our customer service team is here to help you through the refund process. We're committed to fair and transparent handling of all refund requests.
              </p>
              <motion.a
                href="https://wa.me/+917905538458"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Contact Support: +91 7905538458</span>
              </motion.a>
              <p className="text-gray-400 text-sm mt-4">
                Available Monday-Friday, 9 AM - 6 PM IST
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Refund;