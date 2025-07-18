import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Play, Pause } from 'lucide-react';

const ProjectShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef([]);

  const videos = [
    { 
      id: 1, 
      title: 'AI Chatbot Demo',
      url: 'https://res.cloudinary.com/dv0w2nfnw/video/upload/v1751143993/grnzjxhovbyzjdrx0oom.mp4',
      thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      id: 2, 
      title: 'Voice Assistant Demo',
      url: 'https://res.cloudinary.com/dv0w2nfnw/video/upload/v1751144003/kld7pr7b7gkpivqux9kt.mp4',
      thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      id: 3, 
      title: 'Automation Demo',
      url: 'https://res.cloudinary.com/dv0w2nfnw/video/upload/v1751144015/klqub5b2qpzwhn3kjbe0.mp4',
      thumbnail: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const togglePlayPause = () => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      if (isPlaying) {
        currentVideo.pause();
        setIsPlaying(false);
      } else {
        currentVideo.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      currentVideo.muted = !currentVideo.muted;
      setIsMuted(currentVideo.muted);
    }
  };

  // Auto-play center video when it changes
  useEffect(() => {
    // Pause all videos first
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentIndex) {
        video.pause();
      }
    });

    // Play the center video
    const timer = setTimeout(() => {
      const currentVideo = videoRefs.current[currentIndex];
      if (currentVideo) {
        currentVideo.muted = isMuted;
        currentVideo.play().then(() => {
          setIsPlaying(true);
        }).catch(err => {
          console.log('Auto-play prevented:', err);
          setIsPlaying(false);
        });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [currentIndex, isMuted]);

  // Handle video events
  const handleVideoLoad = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.addEventListener('play', () => {
        if (index === currentIndex) setIsPlaying(true);
      });
      video.addEventListener('pause', () => {
        if (index === currentIndex) setIsPlaying(false);
      });
      video.addEventListener('ended', () => {
        if (index === currentIndex) {
          video.currentTime = 0;
          video.play();
        }
      });
    }
  };

  return (
    <section id="demos" className="py-20 px-4 relative overflow-hidden">
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
            Concept Demos That Got Teams Talking
          </h2>
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            style={{
              textShadow: '0 0 25px rgba(147, 51, 234, 0.7), 0 2px 12px rgba(0, 0, 0, 0.9), 0 0 50px rgba(168, 85, 247, 0.5)',
              filter: 'drop-shadow(0 2px 10px rgba(0, 0, 0, 0.8)) brightness(1.1)'
            }}
          >
            Watch our AI solutions in action — built to impress and designed to deliver.
          </p>
        </motion.div>

        <div className="relative flex items-center justify-center">
          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 z-20 p-4 rounded-full bg-gradient-to-r from-purple-600/30 to-blue-600/30 border border-purple-500/50 text-white hover:border-purple-400 transition-all group"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
            whileHover={{ 
              scale: 1.1, 
              x: -8,
              boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="h-6 w-6 group-hover:text-purple-300 transition-colors" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-4 z-20 p-4 rounded-full bg-gradient-to-r from-purple-600/30 to-blue-600/30 border border-purple-500/50 text-white hover:border-purple-400 transition-all group"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
            whileHover={{ 
              scale: 1.1, 
              x: 8,
              boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="h-6 w-6 group-hover:text-purple-300 transition-colors" />
          </motion.button>

          {/* Mobile-First Video Player - EXACTLY like your reference */}
          <div className="flex items-center justify-center w-full max-w-6xl overflow-hidden">
            {videos.map((video, index) => {
              const isCenter = index === currentIndex;
              const isAdjacent = Math.abs(index - currentIndex) === 1 || 
                                (currentIndex === 0 && index === videos.length - 1) ||
                                (currentIndex === videos.length - 1 && index === 0);

              return (
                <motion.div
                  key={video.id}
                  className={`relative cursor-pointer gpu-accelerated ${
                    isCenter 
                      ? 'w-[280px] h-[500px] sm:w-[320px] sm:h-[600px] md:w-[380px] md:h-[680px] opacity-100 z-10 mx-2 md:mx-4' 
                      : isAdjacent 
                        ? 'w-[240px] h-[420px] sm:w-[280px] sm:h-[520px] md:w-[320px] md:h-[580px] opacity-60 z-5 mx-1 md:mx-2' 
                        : 'w-[200px] h-[360px] sm:w-[240px] sm:h-[440px] md:w-[280px] md:h-[500px] opacity-30 z-0 mx-1'
                  }`}
                  animate={{
                    scale: isCenter ? 1 : isAdjacent ? 0.85 : 0.7,
                    opacity: isCenter ? 1 : isAdjacent ? 0.6 : 0.3,
                    rotateY: isCenter ? 0 : isAdjacent ? (index < currentIndex ? -10 : 10) : 0,
                    filter: isCenter ? 'blur(0px)' : isAdjacent ? 'blur(1px)' : 'blur(3px)'
                  }}
                  transition={{ 
                    duration: 0.5, 
                    ease: "easeOut",
                    type: "tween"
                  }}
                  whileHover={isCenter ? { 
                    scale: 1.01
                  } : {}}
                  onClick={() => setCurrentIndex(index)}
                  style={{
                    transformStyle: 'preserve-3d',
                    willChange: 'transform, opacity, filter'
                  }}
                >
                  {/* Phone-like Video Container - EXACTLY like your reference */}
                  <div className="relative w-full h-full bg-black rounded-[24px] sm:rounded-[32px] overflow-hidden border-2 sm:border-4 border-gray-800 shadow-2xl video-container">
                    {/* Video */}
                    <video
                      ref={el => {
                        videoRefs.current[index] = el;
                        if (el) handleVideoLoad(index);
                      }}
                      className="w-full h-full object-cover rounded-[20px] sm:rounded-[28px]"
                      src={video.url}
                      poster={video.thumbnail}
                      loop
                      muted={isMuted}
                      playsInline
                      preload="metadata"
                      onLoadedData={() => handleVideoLoad(index)}
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />

                    {/* Top Controls Overlay - EXACTLY like your reference */}
                    {isCenter && (
                      <div className="absolute top-3 right-3 sm:top-6 sm:right-6 z-30 flex space-x-2 sm:space-x-3">
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            togglePlayPause();
                          }}
                          className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-purple-600/80 backdrop-blur-md border border-purple-400/30 text-white hover:bg-purple-600/90 smooth-transition flex items-center justify-center"
                          style={{
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)'
                          }}
                          whileHover={{ 
                            scale: 1.05
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isPlaying ? <Pause className="h-4 w-4 sm:h-6 sm:w-6" /> : <Play className="h-4 w-4 sm:h-6 sm:w-6" />}
                        </motion.button>

                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleMute();
                          }}
                          className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-purple-600/80 backdrop-blur-md border border-purple-400/30 text-white hover:bg-purple-600/90 smooth-transition flex items-center justify-center"
                          style={{
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)'
                          }}
                          whileHover={{ 
                            scale: 1.05
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isMuted ? <VolumeX className="h-4 w-4 sm:h-6 sm:w-6" /> : <Volume2 className="h-4 w-4 sm:h-6 sm:w-6" />}
                        </motion.button>
                      </div>
                    )}

                    {/* Bottom Overlay - EXACTLY like your reference */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 sm:p-6 rounded-b-[20px] sm:rounded-b-[28px]"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: isCenter ? 1 : 0.8, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white text-sm sm:text-xl font-bold mb-1">{video.title}</h3>
                          {isCenter && (
                            <motion.div
                              className="flex items-center space-x-2 text-purple-300"
                              animate={{ opacity: [0.8, 1, 0.8] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <span className="text-xs sm:text-sm font-medium">
                                {isPlaying ? 'Playing' : 'Paused'}
                              </span>
                              {isPlaying ? <Play className="h-3 w-3 sm:h-4 sm:w-4" /> : <Pause className="h-3 w-3 sm:h-4 sm:w-4" />}
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>

                    {/* Green Playing Indicator Dot - EXACTLY like your reference */}
                    {isCenter && isPlaying && (
                      <motion.div
                        className="absolute top-3 left-3 sm:top-6 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{
                          boxShadow: '0 0 10px rgba(34, 197, 94, 0.8)'
                        }}
                      />
                    )}
                    
                    {/* Glow for center video */}
                    {isCenter && (
                      <motion.div
                        className="absolute inset-0 rounded-[24px] sm:rounded-[32px] border border-purple-500/40 pointer-events-none"
                        animate={{
                          opacity: [0.6, 0.8, 0.6]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{
                          boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)'
                        }}
                      />
                    )}

                    {/* Loading indicator */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-[20px] sm:rounded-[28px]"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 0 }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                    >
                      <motion.div
                        className="w-8 h-8 sm:w-12 sm:h-12 border-2 sm:border-4 border-purple-500/30 border-t-purple-500 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center mt-8 sm:mt-12 space-x-3 sm:space-x-4">
          {videos.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full smooth-transition ${
                index === currentIndex 
                  ? 'bg-purple-500' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={index === currentIndex ? {
                opacity: [0.8, 1, 0.8]
              } : {}}
              transition={{
                opacity: { duration: 1.5, repeat: Infinity }
              }}
              style={index === currentIndex ? {
                boxShadow: '0 0 10px rgba(139, 92, 246, 0.6)'
              } : {}}
            />
          ))}
        </div>

        {/* Instructions */}
        <motion.div
          className="text-center mt-6 sm:mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p 
            className="text-gray-400 text-xs sm:text-sm mb-2"
            style={{
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'
            }}
          >
            Videos auto-play when selected • Use controls to play/pause and mute/unmute
          </p>
          <div className="flex justify-center items-center space-x-4 sm:space-x-6 text-xs text-gray-500">
            <div className="flex items-center space-x-2">
              <Play className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Auto-play</span>
            </div>
            <div className="flex items-center space-x-2">
              <Volume2 className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Audio Controls</span>
            </div>
            <div className="flex items-center space-x-2">
              <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Navigate</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase;