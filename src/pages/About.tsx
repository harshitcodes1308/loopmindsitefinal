import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen text-white pt-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About LoopMind
          </h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-6">
              LoopMind is at the forefront of AI automation, revolutionizing how businesses operate through intelligent solutions that seamlessly integrate into existing workflows.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              We believe in creating AI solutions that don't just automate tasks, but truly understand and enhance business processes. Our mission is to make advanced AI accessible to businesses of all sizes, enabling them to focus on what matters most - growth and innovation.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-gray-300 mb-6">
              From intelligent chatbots that provide exceptional customer service to voice assistants that streamline operations, we develop custom AI solutions tailored to your specific needs. Our expertise spans natural language processing, machine learning, and automation technologies.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">Why Choose LoopMind</h2>
            <ul className="text-gray-300 space-y-2 mb-6">
              <li>• Cutting-edge AI technology tailored to your business</li>
              <li>• Seamless integration with existing systems</li>
              <li>• 24/7 support and continuous optimization</li>
              <li>• Scalable solutions that grow with your business</li>
              <li>• Proven track record of successful implementations</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;