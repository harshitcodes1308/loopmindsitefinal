import React from 'react';
import { motion } from 'framer-motion';

const Refund = () => {
  return (
    <div className="min-h-screen text-white pt-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Refund Policy
          </h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Last updated: January 2025
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">1. Refund Eligibility</h2>
            <p className="text-gray-300 mb-6">
              Refunds may be requested within 30 days of service commencement if the delivered solution does not meet the agreed specifications or if there are significant technical issues that cannot be resolved.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">2. Refund Process</h2>
            <p className="text-gray-300 mb-6">
              To request a refund, contact us via WhatsApp at +917905538458 with your project details and reason for the refund request. We will review your case within 5-7 business days.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">3. Partial Refunds</h2>
            <p className="text-gray-300 mb-6">
              For projects that are partially completed, refunds will be calculated based on the work completed and resources utilized. Custom development work that has been delivered and accepted may not be eligible for full refunds.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">4. Non-Refundable Services</h2>
            <p className="text-gray-300 mb-6">
              Consultation fees, setup costs, and third-party service fees are generally non-refundable. Monthly subscription services can be cancelled but are not refundable for the current billing period.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">5. Processing Time</h2>
            <p className="text-gray-300 mb-6">
              Approved refunds will be processed within 10-15 business days and will be credited back to the original payment method used for the transaction.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">6. Contact Information</h2>
            <p className="text-gray-300 mb-6">
              For refund requests or questions about this policy, please contact us via WhatsApp at +917905538458.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Refund;