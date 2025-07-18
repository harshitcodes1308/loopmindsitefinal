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
                      ? 'w-[280px] h-[500px] sm:w-[300px] sm:h-[533px] md:w-[350px] md:h-[622px] opacity-100 z-10 mx-2 md:mx-4' 
                      : isAdjacent 
                        ? 'w-[220px] h-[391px] sm:w-[240px] sm:h-[427px] md:w-[280px] md:h-[498px] opacity-60 z-5 mx-1 md:mx-2' 
                        : 'w-[180px] h-[320px] sm:w-[200px] sm:h-[356px] md:w-[240px] md:h-[427px] opacity-30 z-0 mx-1'
                  }`}
                  initial={{
                    scale: isCenter ? 1 : isAdjacent ? 0.85 : 0.7,
                    opacity: isCenter ? 1 : isAdjacent ? 0.6 : 0.3,
                    rotateY: isCenter ? 0 : isAdjacent ? (index < currentIndex ? -8 : 8) : 0,
                    filter: isCenter ? 'blur(0px)' : isAdjacent ? 'blur(2px)' : 'blur(4px)'
                  }}
                  animate={{
                    scale: isCenter ? 1 : isAdjacent ? 0.85 : 0.7,
                    opacity: isCenter ? 1 : isAdjacent ? 0.6 : 0.3,
                    rotateY: isCenter ? 0 : isAdjacent ? (index < currentIndex ? -8 : 8) : 0,
                    filter: isCenter ? 'blur(0px)' : isAdjacent ? 'blur(2px)' : 'blur(4px)'
                  }}
                  transition={{ 
                    duration: 0.4, 
                    ease: "easeOut"
                  }}
                  whileHover={isCenter ? { 
                    scale: 1.02
                  } : {}}
                  onClick={() => setCurrentIndex(index)}
                  style={{
                    willChange: 'transform, opacity, filter',
                    aspectRatio: '9/16'
                  }}
                >
                  {/* Phone-like Video Container - EXACTLY like your reference */}
                  <div className="relative w-full h-full bg-black rounded-[20px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden border-2 sm:border-3 border-gray-800 shadow-2xl video-container">
                    {/* Video */}
                    <video
                      ref={el => {
                        videoRefs.current[index] = el;
                        if (el) handleVideoLoad(index);
                      }}
                      className="w-full h-full object-cover rounded-[16px] sm:rounded-[20px] md:rounded-[24px]"
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
                      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-30 flex space-x-1 sm:space-x-2">
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            togglePlayPause();
                          }}
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-purple-600/80 backdrop-blur-md border border-purple-400/30 text-white hover:bg-purple-600/90 smooth-transition flex items-center justify-center"
                          style={{
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)'
                          }}
                          whileHover={{ 
                            scale: 1.05
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isPlaying ? <Pause className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" /> : <Play className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />}
                        </motion.button>

                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleMute();
                          }}
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-purple-600/80 backdrop-blur-md border border-purple-400/30 text-white hover:bg-purple-600/90 smooth-transition flex items-center justify-center"
                          style={{
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)'
                          }}
                          whileHover={{ 
                            scale: 1.05
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isMuted ? <VolumeX className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" /> : <Volume2 className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />}
                        </motion.button>
                      </div>
                    )}

                    {/* Bottom Overlay - EXACTLY like your reference */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-2 sm:p-4 rounded-b-[16px] sm:rounded-b-[20px] md:rounded-b-[24px]"
                      initial={{ opacity: isCenter ? 1 : 0.8 }}
                      animate={{ opacity: isCenter ? 1 : 0.8 }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white text-sm sm:text-base md:text-lg font-bold mb-1">{video.title}</h3>
                          {isCenter && (
                            <motion.div
                              className="flex items-center space-x-2 text-purple-300"
                            >
                              <span className="text-xs sm:text-sm font-medium">
                                {isPlaying ? 'Playing' : 'Paused'}
                              </span>
                              <span className="text-xs">▷</span>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>

                    {/* Green Playing Indicator Dot - EXACTLY like your reference */}
                    {isCenter && isPlaying && (
                      <motion.div
                        className="absolute top-2 left-2 sm:top-4 sm:left-4 w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"
                        style={{
                          boxShadow: '0 0 10px rgba(34, 197, 94, 0.8)'
                        }}
                      />
                    )}
                    
                    {/* Glow for center video */}
                    {isCenter && (
                      <motion.div
                        className="absolute inset-0 rounded-[20px] sm:rounded-[24px] md:rounded-[28px] border border-purple-500/40 pointer-events-none"
                        style={{
                          boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)'
                        }}
                      />
                    )}
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
              style={index === currentIndex ? {
                boxShadow: '0 0 10px rgba(139, 92, 246, 0.6)'
              } : {}}
            />
          ))}
        </div>

        {/* Instructions */}
        <motion.div
          className="text-center mt-6 sm:mt-8"
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