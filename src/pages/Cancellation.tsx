import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, Calendar, AlertTriangle, RotateCcw, Clock, Shield } from 'lucide-react';

const Cancellation = () => {
  const cancellationTypes = [
    {
      icon: Calendar,
      title: 'Subscription Services',
      description: 'Monthly or annual recurring services',
      notice: '48 hours before next billing',
      effect: 'End of current billing period',
      color: 'blue'
    },
    {
      icon: XCircle,
      title: 'Custom Projects',
      description: 'One-time development projects',
      notice: 'Before development begins',
      effect: 'Immediate with full refund',
      color: 'green'
    },
    {
      icon: AlertTriangle,
      title: 'Active Projects',
      description: 'Ongoing development work',
      notice: '7 days written notice',
      effect: 'Charges for completed work',
      color: 'orange'
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
            Cancellation Policy
          </h1>
          <p className="text-gray-400 text-lg">
            Last updated: January 29, 2025
          </p>
        </motion.div>

        {/* Cancellation Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {cancellationTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${
                  type.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  type.color === 'green' ? 'from-green-500 to-green-600' :
                  'from-orange-500 to-orange-600'
                } flex items-center justify-center mr-4`}>
                  <type.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">{type.title}</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">{type.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-xs">Notice Required:</span>
                  <span className="text-white text-xs font-semibold">{type.notice}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-xs">Takes Effect:</span>
                  <span className="text-white text-xs font-semibold">{type.effect}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Cancellation Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700 rounded-3xl p-8 md:p-12"
        >
          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">Cancellation Process & Guidelines</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">1. How to Cancel Services</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  To cancel any service, please contact us via WhatsApp at +91 7905538458 with the following information:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Your account or project reference number</li>
                  <li>• Service(s) you wish to cancel</li>
                  <li>• Reason for cancellation (optional but helpful)</li>
                  <li>• Preferred effective date of cancellation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">2. Subscription Cancellations</h3>
                <div className="bg-blue-600/20 border border-blue-500/50 rounded-xl p-6 mb-4">
                  <h4 className="font-semibold text-white mb-3">Monthly Subscriptions</h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Can be cancelled at any time with 48 hours notice</li>
                    <li>• Service continues until the end of current billing period</li>
                    <li>• No refund for the current month</li>
                    <li>• Automatic renewal stops after current period</li>
                  </ul>
                </div>
                <div className="bg-purple-600/20 border border-purple-500/50 rounded-xl p-6">
                  <h4 className="font-semibold text-white mb-3">Annual Subscriptions</h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• 30 days written notice required</li>
                    <li>• Early termination may incur cancellation fees</li>
                    <li>• Prorated refunds considered on case-by-case basis</li>
                    <li>• Option to downgrade to monthly billing</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-green-400 mb-3">3. Project Cancellations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-600/20 border border-green-500/50 rounded-xl p-6">
                    <h4 className="font-semibold text-white mb-3">Before Development Starts</h4>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• Full refund available</li>
                      <li>• No cancellation fees</li>
                      <li>• Immediate processing</li>
                      <li>• Consultation fees may apply</li>
                    </ul>
                  </div>
                  <div className="bg-orange-600/20 border border-orange-500/50 rounded-xl p-6">
                    <h4 className="font-semibold text-white mb-3">During Development</h4>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• Charges for completed work</li>
                      <li>• Partial refund for remaining work</li>
                      <li>• 7 days notice required</li>
                      <li>• Delivery of completed components</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-pink-400 mb-3">4. Data Retention After Cancellation</h3>
                <div className="bg-pink-600/20 border border-pink-500/50 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <Clock className="h-8 w-8 text-pink-400 mx-auto mb-2" />
                      <h4 className="font-semibold text-white mb-1">30 Days</h4>
                      <p className="text-gray-300 text-sm">Data retention period for potential reactivation</p>
                    </div>
                    <div className="text-center">
                      <Shield className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                      <h4 className="font-semibold text-white mb-1">Secure Storage</h4>
                      <p className="text-gray-300 text-sm">Encrypted and access-controlled during retention</p>
                    </div>
                    <div className="text-center">
                      <XCircle className="h-8 w-8 text-red-400 mx-auto mb-2" />
                      <h4 className="font-semibold text-white mb-1">Permanent Deletion</h4>
                      <p className="text-gray-300 text-sm">Complete data removal after retention period</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-400 mb-3">5. Cancellation Fees</h3>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 border border-gray-600 rounded-xl p-4">
                    <h4 className="font-semibold text-white mb-2">No Cancellation Fees</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Monthly subscription services</li>
                      <li>• Projects cancelled before development</li>
                      <li>• Services cancelled due to our failure to deliver</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-600 rounded-xl p-4">
                    <h4 className="font-semibold text-white mb-2">Potential Cancellation Fees</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Early termination of annual contracts (up to 25% of remaining value)</li>
                      <li>• Custom projects with significant resource allocation</li>
                      <li>• Third-party service commitments made on your behalf</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">6. Reactivation Options</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Cancelled services can be reactivated under the following conditions:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-cyan-600/20 border border-cyan-500/50 rounded-xl p-4">
                    <h4 className="font-semibold text-white mb-2">Within 30 Days</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Full data restoration</li>
                      <li>• No setup fees</li>
                      <li>• Previous configuration maintained</li>
                    </ul>
                  </div>
                  <div className="bg-gray-600/20 border border-gray-500/50 rounded-xl p-4">
                    <h4 className="font-semibold text-white mb-2">After 30 Days</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• New setup process required</li>
                      <li>• Setup fees may apply</li>
                      <li>• Data recovery not guaranteed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-12 p-6 bg-purple-600/20 border border-purple-500/50 rounded-2xl">
              <div className="flex items-center mb-4">
                <RotateCcw className="h-8 w-8 text-purple-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Need to Cancel a Service?</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                We're here to make the cancellation process as smooth as possible. Our team will guide you through the process and ensure all your questions are answered.
              </p>
              <motion.a
                href="https://wa.me/+917905538458"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Contact Us: +91 7905538458</span>
              </motion.a>
              <p className="text-gray-400 text-sm mt-4">
                We'll process your cancellation request within 24 hours of receipt.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cancellation;