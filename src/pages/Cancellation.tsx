import React from 'react';
import { motion } from 'framer-motion';

const Cancellation = () => {
  return (
    <div className="min-h-screen text-white pt-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Cancellation Policy
          </h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Last updated: January 2025
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">1. Project Cancellation</h2>
            <p className="text-gray-300 mb-6">
              Custom development projects can be cancelled at any time before work begins. Once development has started, cancellation may result in charges for work completed up to the cancellation date.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">2. Subscription Cancellation</h2>
            <p className="text-gray-300 mb-6">
              Monthly subscription services can be cancelled at any time. Cancellations will take effect at the end of the current billing period, and you will continue to have access to services until that date.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">3. Cancellation Notice</h2>
            <p className="text-gray-300 mb-6">
              To cancel services, please contact us via WhatsApp at +917905538458 at least 48 hours before your next billing date to ensure proper processing.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Retention</h2>
            <p className="text-gray-300 mb-6">
              Upon cancellation, we will retain your data for 30 days to allow for potential service restoration. After this period, data may be permanently deleted unless otherwise required by law.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">5. Cancellation Fees</h2>
            <p className="text-gray-300 mb-6">
              Standard subscription cancellations do not incur additional fees. However, early termination of annual contracts may be subject to cancellation fees as outlined in your service agreement.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">6. Reactivation</h2>
            <p className="text-gray-300 mb-6">
              Cancelled services can be reactivated within 30 days of cancellation. After this period, reactivation may require a new setup process and associated fees.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">7. Contact Information</h2>
            <p className="text-gray-300 mb-6">
              For cancellation requests or questions about this policy, please contact us via WhatsApp at +917905538458.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cancellation;