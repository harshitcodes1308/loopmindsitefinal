import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Users, Award, Zap, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Innovation',
      description: 'Cutting-edge artificial intelligence solutions tailored to your business needs'
    },
    {
      icon: Target,
      title: 'Precision Focus',
      description: 'Targeted automation that addresses your specific operational challenges'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced developers and AI specialists dedicated to your success'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Track record of successful implementations across various industries'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Quick implementation with minimal disruption to your existing workflows'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    }
  ];

  return (
    <div className="min-h-screen text-white pt-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            style={{
              textShadow: '0 0 30px rgba(147, 51, 234, 0.8)',
              filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.7))'
            }}
          >
            About LoopMind
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Pioneering the future of business automation through intelligent AI solutions that transform how companies operate, communicate, and grow.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              At LoopMind, we believe that artificial intelligence should enhance human potential, not replace it. Our mission is to create AI solutions that seamlessly integrate into your business ecosystem, automating repetitive tasks while empowering your team to focus on strategic growth and innovation.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We're committed to making advanced AI technology accessible to businesses of all sizes, from startups to enterprises, ensuring that everyone can benefit from the transformative power of intelligent automation.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Why Choose LoopMind</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What We Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-4">AI Chatbots & Virtual Assistants</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Intelligent conversational AI that provides 24/7 customer support, handles inquiries, and guides users through complex processes with natural language understanding.
                </p>
                
                <h3 className="text-xl font-bold text-blue-400 mb-4">Voice-Enabled Solutions</h3>
                <p className="text-gray-300 leading-relaxed">
                  Advanced voice recognition and synthesis technology that enables hands-free interaction, voice commands, and audio-based automation workflows.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-400 mb-4">Custom Automation</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Bespoke automation solutions that integrate with your existing systems, streamline workflows, and eliminate manual processes across your organization.
                </p>
                
                <h3 className="text-xl font-bold text-pink-400 mb-4">Enterprise Integration</h3>
                <p className="text-gray-300 leading-relaxed">
                  Seamless integration with popular business tools, CRMs, databases, and third-party services to create a unified, intelligent ecosystem.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Our Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your unique business needs and challenges' },
                { step: '02', title: 'Design', desc: 'Creating tailored AI solutions that fit your workflow' },
                { step: '03', title: 'Develop', desc: 'Building and testing your custom AI automation' },
                { step: '04', title: 'Deploy', desc: 'Seamless implementation with ongoing support' }
              ].map((phase, index) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700 rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-purple-400 mb-3">{phase.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{phase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how LoopMind's AI solutions can revolutionize your operations and drive unprecedented growth.
            </p>
            <motion.a
              href="https://wa.me/+917905538458"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Start Your AI Journey</span>
              <Zap className="h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;