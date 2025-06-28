import React from 'react';
import { motion } from 'framer-motion';
import { Phone, User, Zap, Cpu, Radar } from 'lucide-react';

const ComingSoon = () => {
  const features = [
    {
      icon: Phone,
      title: 'AI Receptionist',
      description: 'Never miss a call with our intelligent virtual receptionist',
      chipColor: 'from-blue-500 to-cyan-500',
    },
    {
      icon: User,
      title: 'AI Personal Assistant',
      description: 'Your dedicated AI companion for productivity and organization',
      chipColor: 'from-purple-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Smart Automations',
      description: 'More intelligent workflows and process automation',
      chipColor: 'from-green-500 to-teal-500',
    }
  ];

  return (
    <section id="coming-soon" className="py-20 px-4 relative overflow-hidden">
      {/* Radar scan background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(139, 92, 246, 0.3) 45deg, transparent 90deg, transparent 360deg)',
            'conic-gradient(from 90deg at 50% 50%, transparent 0deg, rgba(139, 92, 246, 0.3) 45deg, transparent 90deg, transparent 360deg)',
            'conic-gradient(from 180deg at 50% 50%, transparent 0deg, rgba(139, 92, 246, 0.3) 45deg, transparent 90deg, transparent 360deg)',
            'conic-gradient(from 270deg at 50% 50%, transparent 0deg, rgba(139, 92, 246, 0.3) 45deg, transparent 90deg, transparent 360deg)',
            'conic-gradient(from 360deg at 50% 50%, transparent 0deg, rgba(139, 92, 246, 0.3) 45deg, transparent 90deg, transparent 360deg)'
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            style={{
              textShadow: '0 0 50px rgba(147, 51, 234, 1), 0 0 100px rgba(168, 85, 247, 0.8), 0 4px 25px rgba(0, 0, 0, 0.9)',
              filter: 'drop-shadow(0 0 30px rgba(147, 51, 234, 0.9)) drop-shadow(0 4px 15px rgba(0, 0, 0, 0.8)) brightness(1.3) saturate(1.2)'
            }}
          >
            What's Coming Next
          </h2>
          <motion.p 
            className="text-xl text-gray-300 mb-6"
            style={{
              textShadow: '0 0 25px rgba(147, 51, 234, 0.7), 0 2px 12px rgba(0, 0, 0, 0.9), 0 0 50px rgba(168, 85, 247, 0.5)',
              filter: 'drop-shadow(0 2px 10px rgba(0, 0, 0, 0.8)) brightness(1.1)'
            }}
            animate={{
              textShadow: [
                '0 0 10px rgba(139, 92, 246, 0.3)',
                '0 0 20px rgba(139, 92, 246, 0.6)',
                '0 0 10px rgba(139, 92, 246, 0.3)'
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            The future of AI automation is almost here
          </motion.p>
          
          {/* Enhanced "INCOMING" tag with tilt on hover */}
          <motion.div
            className="inline-flex items-center mt-6 px-6 py-3 bg-gradient-to-r from-orange-500/30 to-red-500/30 border border-orange-500/50 rounded-full relative overflow-hidden cursor-pointer"
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                '0 0 20px rgba(239, 68, 68, 0.4)',
                '0 0 40px rgba(239, 68, 68, 0.7)',
                '0 0 20px rgba(239, 68, 68, 0.4)'
              ]
            }}
            whileHover={{
              rotateZ: -2,
              scale: 1.08,
              boxShadow: '0 0 50px rgba(239, 68, 68, 0.8)'
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="w-3 h-3 bg-orange-500 rounded-full mr-3 relative"
              animate={{
                scale: [1, 1.5, 1],
                boxShadow: [
                  '0 0 5px rgba(249, 115, 22, 0.6)',
                  '0 0 15px rgba(249, 115, 22, 0.9)',
                  '0 0 5px rgba(249, 115, 22, 0.6)'
                ]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-full border border-orange-400"
                animate={{
                  scale: [1, 2, 3],
                  opacity: [0.8, 0.3, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            </motion.div>
            <span className="text-orange-400 font-semibold flex items-center space-x-2">
              <Radar className="h-4 w-4" />
              <span>INCOMING</span>
            </span>
            
            {/* Scan line effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
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
                style={{
                  perspective: '1000px'
                }}
              >
                {/* AI consciousness pattern - RESTORED */}
                <motion.div
                  className="absolute inset-0 opacity-5"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                                     radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
                    backgroundSize: '50px 50px'
                  }}
                />

                {/* AI Chip Icon with enhanced effects */}
                <div className="flex items-center mb-6">
                  <motion.div 
                    className={`w-20 h-20 rounded-full bg-gradient-to-r ${feature.chipColor} flex items-center justify-center relative overflow-hidden`}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.15,
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <feature.icon className="h-10 w-10 text-white z-10" />
                    
                    {/* Enhanced chip circuit pattern */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-white/30"
                      animate={{
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <div className="absolute top-1 left-1/2 w-2 h-2 bg-white/60 rounded-full transform -translate-x-1/2" />
                      <div className="absolute bottom-1 left-1/2 w-2 h-2 bg-white/60 rounded-full transform -translate-x-1/2" />
                      <div className="absolute left-1 top-1/2 w-2 h-2 bg-white/60 rounded-full transform -translate-y-1/2" />
                      <div className="absolute right-1 top-1/2 w-2 h-2 bg-white/60 rounded-full transform -translate-y-1/2" />
                    </motion.div>
                    
                    {/* Quantum field */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(139, 92, 246, 0.4)',
                          '0 0 40px rgba(139, 92, 246, 0.7)',
                          '0 0 20px rgba(139, 92, 246, 0.4)'
                        ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  
                  {/* Enhanced AI Chip label */}
                  <motion.div
                    className="ml-4 px-4 py-2 bg-gradient-to-r from-gray-800/90 to-gray-700/90 border border-gray-600/50 rounded-full relative overflow-hidden"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    <div className="flex items-center space-x-2">
                      <motion.div
                        animate={{
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <Cpu className="h-4 w-4 text-cyan-400" />
                      </motion.div>
                      <span className="text-xs text-cyan-400 font-medium">AI CHIP</span>
                    </div>
                    
                    {/* Data flow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </motion.div>
                </div>
                
                <h3 
                  className="text-2xl font-bold text-white mb-4"
                  style={{
                    textShadow: '0 0 25px rgba(147, 51, 234, 0.7), 0 0 50px rgba(168, 85, 247, 0.5), 0 2px 12px rgba(0, 0, 0, 0.9)',
                    filter: 'drop-shadow(0 0 15px rgba(147, 51, 234, 0.8)) drop-shadow(0 2px 10px rgba(0, 0, 0, 0.8)) brightness(1.1)'
                  }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-gray-300"
                  style={{
                    textShadow: '0 0 15px rgba(147, 51, 234, 0.4), 0 2px 8px rgba(0, 0, 0, 0.8)'
                  }}
                >
                  {feature.description}
                </p>
                
                {/* Enhanced scan line effect */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: '100%' }}
                  whileHover={{ y: '-100%' }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                </motion.div>

                {/* Enhanced holographic effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  animate={{
                    background: [
                      'linear-gradient(45deg, rgba(139, 92, 246, 0.1) 0%, transparent 50%, rgba(59, 130, 246, 0.1) 100%)',
                      'linear-gradient(225deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(139, 92, 246, 0.1) 100%)',
                      'linear-gradient(45deg, rgba(139, 92, 246, 0.1) 0%, transparent 50%, rgba(59, 130, 246, 0.1) 100%)'
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;