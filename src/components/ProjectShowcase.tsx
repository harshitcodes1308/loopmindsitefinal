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

          {/* 3D Video Carousel */}
          <div className="flex items-center justify-center space-x-8 w-full max-w-6xl perspective-1000">
            {videos.map((video, index) => {
              const isCenter = index === currentIndex;
              const isAdjacent = Math.abs(index - currentIndex) === 1 || 
                                (currentIndex === 0 && index === videos.length - 1) ||
                                (currentIndex === videos.length - 1 && index === 0);

              return (
                <motion.div
                  key={video.id}
                  className={`relative rounded-2xl overflow-hidden transition-all duration-700 cursor-pointer group ${
                    isCenter 
                      ? 'w-[600px] h-[340px] opacity-100 scale-100 z-10' 
                      : isAdjacent 
                        ? 'w-[480px] h-[270px] opacity-70 scale-90 z-5' 
                        : 'w-[360px] h-[200px] opacity-40 scale-75 z-0'
                  }`}
                  animate={{
                    scale: isCenter ? 1 : isAdjacent ? 0.9 : 0.75,
                    opacity: isCenter ? 1 : isAdjacent ? 0.7 : 0.4,
                    rotateY: isCenter ? 0 : isAdjacent ? (index < currentIndex ? -25 : 25) : 0,
                    z: isCenter ? 50 : isAdjacent ? 25 : 0,
                    filter: isCenter ? 'blur(0px)' : isAdjacent ? 'blur(2px)' : 'blur(4px)'
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  whileHover={isCenter ? { 
                    scale: 1.02,
                    rotateX: 2,
                    boxShadow: '0 20px 60px rgba(139, 92, 246, 0.4)'
                  } : {}}
                  onClick={() => setCurrentIndex(index)}
                  style={{
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Video Container */}
                  <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden">
                    {/* HTML5 Video */}
                    <video
                      ref={el => {
                        videoRefs.current[index] = el;
                        if (el) handleVideoLoad(index);
                      }}
                      className="w-full h-full object-cover"
                      src={video.url}
                      poster={video.thumbnail}
                      loop
                      muted={isMuted}
                      playsInline
                      preload="metadata"
                      onLoadedData={() => handleVideoLoad(index)}
                    />

                    {/* Controls Overlay for center video */}
                    {isCenter && (
                      <div className="absolute top-4 right-4 z-30 flex space-x-2">
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            togglePlayPause();
                          }}
                          className="p-3 rounded-full bg-purple-600/60 backdrop-blur-md border border-purple-400/30 text-white hover:bg-purple-600/80 transition-all group"
                          style={{
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)'
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)'
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                        </motion.button>

                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleMute();
                          }}
                          className="p-3 rounded-full bg-purple-600/60 backdrop-blur-md border border-purple-400/30 text-white hover:bg-purple-600/80 transition-all group"
                          style={{
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)'
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)'
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                        </motion.button>
                      </div>
                    )}
                  </div>
                  
                  {/* Overlay gradient for non-center videos */}
                  {!isCenter && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none rounded-2xl" />
                  )}
                  
                  {/* Glow for center video */}
                  {isCenter && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-purple-500/60 pointer-events-none"
                      animate={{
                        boxShadow: [
                          '0 0 30px rgba(139, 92, 246, 0.6)',
                          '0 0 50px rgba(139, 92, 246, 0.8)',
                          '0 0 30px rgba(139, 92, 246, 0.6)',
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  )}

                  {/* Video title overlay */}
                  <motion.div
                    className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 pointer-events-none"
                    style={{
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isCenter ? 1 : 0.7, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-between">
                      <span>{video.title}</span>
                      {isCenter && (
                        <motion.span
                          className="text-xs text-purple-300 flex items-center space-x-1 ml-2"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <span>{isPlaying ? 'Playing' : 'Paused'}</span>
                          {isPlaying ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
                        </motion.span>
                      )}
                    </div>
                  </motion.div>

                  {/* Simple green dot indicator for playing video */}
                  {isCenter && isPlaying && (
                    <motion.div
                      className="absolute top-4 left-4 w-4 h-4 bg-green-500 rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        boxShadow: [
                          '0 0 10px rgba(34, 197, 94, 0.6)',
                          '0 0 20px rgba(34, 197, 94, 0.9)',
                          '0 0 10px rgba(34, 197, 94, 0.6)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}

                  {/* Loading indicator */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-2xl"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <motion.div
                      className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center mt-12 space-x-4">
          {videos.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-purple-500' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              animate={index === currentIndex ? {
                boxShadow: [
                  '0 0 10px rgba(139, 92, 246, 0.6)',
                  '0 0 20px rgba(139, 92, 246, 0.9)',
                  '0 0 10px rgba(139, 92, 246, 0.6)'
                ]
              } : {}}
              transition={{
                boxShadow: { duration: 2, repeat: Infinity }
              }}
            />
          ))}
        </div>

        {/* Instructions */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p 
            className="text-gray-400 text-sm mb-2"
            style={{
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'
            }}
          >
            Videos auto-play when selected • Use controls to play/pause and mute/unmute
          </p>
          <div className="flex justify-center items-center space-x-6 text-xs text-gray-500">
            <div className="flex items-center space-x-2">
              <Play className="h-4 w-4" />
              <span>Auto-play</span>
            </div>
            <div className="flex items-center space-x-2">
              <Volume2 className="h-4 w-4" />
              <span>Audio Controls</span>
            </div>
            <div className="flex items-center space-x-2">
              <ChevronLeft className="h-4 w-4" />
              <span>Navigate</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase;