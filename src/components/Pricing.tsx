import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mic, Cog, Sparkles, Cpu } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      title: 'ChatBot',
      icon: MessageCircle,
      features: ['AI-powered conversations', 'Natural language processing', '24/7 availability', 'Custom responses'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'ChatBot + Voice Assistant',
      icon: Mic,
      features: ['Everything in ChatBot', 'Voice recognition', 'Speech synthesis', 'Multi-language support'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'ChatBot + Voice + Custom Automation',
      icon: Cog,
      features: ['Everything in Voice', 'Workflow automation', 'API integrations', 'Custom triggers'],
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'Fully Custom Plan',
      icon: Sparkles,
      features: ['Bespoke AI solutions', 'Enterprise integration', 'Dedicated support', 'Unlimited customization'],
      gradient: 'from-orange-500 to-red-500',
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            style={{
              textShadow: '0 0 50px rgba(147, 51, 234, 1), 0 0 100px rgba(168, 85, 247, 0.8), 0 4px 25px rgba(0, 0, 0, 0.9)',
              filter: 'drop-shadow(0 0 30px rgba(147, 51, 234, 0.9)) drop-shadow(0 4px 15px rgba(0, 0, 0, 0.8)) brightness(1.3) saturate(1.2)'
            }}
          >
            Choose Your AI Solution
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.03, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group h-full"
            >
              <motion.div 
                className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700 rounded-2xl p-8 h-full hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  y: -15,
                  rotateX: 5,
                  rotateY: 5,
                  boxShadow: '0 25px 50px rgba(139, 92, 246, 0.3)',
                  transformStyle: 'preserve-3d'
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  perspective: '1000px'
                }}
              >
                {/* AI circuit pattern background - RESTORED */}
                <motion.div 
                  className="absolute inset-0 opacity-10"
                  animate={{
                    backgroundPosition: ['0px 0px', '50px 50px', '0px 0px']
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(139, 92, 246, 0.4) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(139, 92, 246, 0.4) 1px, transparent 1px)
                    `,
                    backgroundSize: '25px 25px'
                  }}
                />

                {/* Quantum ripple effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ 
                    scale: [0, 1.2, 1],
                    opacity: [0, 0.4, 0],
                  }}
                  transition={{ duration: 0.8 }}
                  style={{
                    background: `radial-gradient(circle, ${plan.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.3)' : 
                      plan.gradient.includes('purple') ? 'rgba(139, 92, 246, 0.3)' :
                      plan.gradient.includes('green') ? 'rgba(34, 197, 94, 0.3)' :
                      'rgba(239, 68, 68, 0.3)'} 0%, transparent 70%)`
                  }}
                />
                
                {/* Enhanced AI chip icon with same animations as before */}
                <motion.div 
                  className={`w-20 h-20 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mb-6 relative overflow-hidden`}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.15,
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <plan.icon className="h-10 w-10 text-white z-10" />
                  
                  {/* AI chip circuit pattern */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <div className="absolute top-2 left-1/2 w-1 h-1 bg-white/60 rounded-full transform -translate-x-1/2" />
                    <div className="absolute bottom-2 left-1/2 w-1 h-1 bg-white/60 rounded-full transform -translate-x-1/2" />
                    <div className="absolute left-2 top-1/2 w-1 h-1 bg-white/60 rounded-full transform -translate-y-1/2" />
                    <div className="absolute right-2 top-1/2 w-1 h-1 bg-white/60 rounded-full transform -translate-y-1/2" />
                  </motion.div>
                  
                  {/* Quantum field around icon */}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-white/30"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                
                <h3 
                  className="text-2xl font-bold text-white mb-6"
                  style={{
                    textShadow: '0 0 25px rgba(147, 51, 234, 0.7), 0 0 50px rgba(168, 85, 247, 0.5), 0 2px 12px rgba(0, 0, 0, 0.9)',
                    filter: 'drop-shadow(0 0 15px rgba(147, 51, 234, 0.8)) drop-shadow(0 2px 10px rgba(0, 0, 0, 0.8)) brightness(1.1)'
                  }}
                >
                  {plan.title}
                </h3>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      className="text-gray-300 flex items-center"
                      style={{
                        textShadow: '0 0 15px rgba(147, 51, 234, 0.4), 0 2px 8px rgba(0, 0, 0, 0.8)'
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="w-3 h-3 rounded-full mr-3 relative"
                        style={{
                          background: `linear-gradient(45deg, ${plan.gradient.includes('blue') ? '#3b82f6' : 
                            plan.gradient.includes('purple') ? '#8b5cf6' :
                            plan.gradient.includes('green') ? '#22c55e' :
                            '#ef4444'}, ${plan.gradient.includes('blue') ? '#06b6d4' : 
                            plan.gradient.includes('purple') ? '#ec4899' :
                            plan.gradient.includes('green') ? '#14b8a6' :
                            '#f97316'})`
                        }}
                        animate={{ 
                          scale: [1, 1.3, 1],
                          boxShadow: [
                            '0 0 5px rgba(139, 92, 246, 0.3)',
                            '0 0 15px rgba(139, 92, 246, 0.6)',
                            '0 0 5px rgba(139, 92, 246, 0.3)'
                          ]
                        }}
                        transition={{ 
                          duration: 2.5,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 rounded-full border border-white/40"
                          animate={{
                            rotate: [0, 360]
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      </motion.div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                
                <motion.a
                  href="https://wa.me/+917905538458"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full bg-gradient-to-r ${plan.gradient} text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 block text-center relative overflow-hidden group`}
                  whileHover={{ 
                    scale: 1.03,
                    y: -2
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span
                    className="relative z-10 flex items-center justify-center space-x-2"
                    animate={{
                      y: [0, -2, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <span>Get a Quote on WhatsApp</span>
                    <Cpu className="h-4 w-4" />
                  </motion.span>
                  
                  {/* Button quantum field */}
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Data flow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    animate={{
                      background: [
                        'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                        'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
                      ],
                      backgroundPosition: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;