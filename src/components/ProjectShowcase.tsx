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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            style={{
              textShadow: '0 0 30px rgba(147, 51, 234, 0.8), 0 4px 15px rgba(0, 0, 0, 0.9)',
              filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.7)) brightness(1.2)'
            }}
          >
            Concept Demos That Got Teams Talking
          </h2>
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            style={{
              textShadow: '0 0 15px rgba(147, 51, 234, 0.5), 0 2px 8px rgba(0, 0, 0, 0.8)'
            }}
          >
            Watch our AI solutions in action — built to impress and designed to deliver.
          </p>
        </motion.div>

        {/* Mobile Layout */}
        <div className="block md:hidden">
          <div className="relative max-w-sm mx-auto">
            {/* Mobile Video Container */}
            <motion.div
              className="relative w-full bg-black rounded-3xl overflow-hidden shadow-2xl"
              style={{
                aspectRatio: '9/19.5', // iPhone-like aspect ratio
                maxHeight: '70vh'
              }}
              animate={{
                boxShadow: [
                  '0 20px 60px rgba(139, 92, 246, 0.4)',
                  '0 25px 80px rgba(139, 92, 246, 0.6)',
                  '0 20px 60px rgba(139, 92, 246, 0.4)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {/* Video */}
              <video
                ref={el => {
                  videoRefs.current[currentIndex] = el;
                  if (el) handleVideoLoad(currentIndex);
                }}
                className="w-full h-full object-cover"
                src={videos[currentIndex].url}
                poster={videos[currentIndex].thumbnail}
                loop
                muted={isMuted}
                playsInline
                preload="metadata"
                onLoadedData={() => handleVideoLoad(currentIndex)}
              />

              {/* Mobile Controls Overlay */}
              <div className="absolute top-6 right-6 z-30 flex space-x-3">
                <motion.button
                  onClick={togglePlayPause}
                  className="p-4 rounded-full bg-purple-600/70 backdrop-blur-md border border-purple-400/30 text-white"
                  whileTap={{ scale: 0.9 }}
                >
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </motion.button>

                <motion.button
                  onClick={toggleMute}
                  className="p-4 rounded-full bg-purple-600/70 backdrop-blur-md border border-purple-400/30 text-white"
                  whileTap={{ scale: 0.9 }}
                >
                  {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
                </motion.button>
              </div>

              {/* Playing indicator - simple green dot */}
              {isPlaying && (
                <motion.div
                  className="absolute top-6 left-6 w-4 h-4 bg-green-500 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      '0 0 8px rgba(34, 197, 94, 0.6)',
                      '0 0 16px rgba(34, 197, 94, 0.9)',
                      '0 0 8px rgba(34, 197, 94, 0.6)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}

              {/* Mobile Video Title */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/80 backdrop-blur-sm rounded-2xl px-4 py-3">
                  <h3 className="text-white text-lg font-semibold mb-1">
                    {videos[currentIndex].title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-300 text-sm">
                      {isPlaying ? 'Playing' : 'Paused'}
                    </span>
                    <div className="flex space-x-2">
                      <motion.button
                        onClick={() => setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length)}
                        className="p-2 rounded-full bg-purple-600/50 text-white"
                        whileTap={{ scale: 0.9 }}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </motion.button>
                      <motion.button
                        onClick={() => setCurrentIndex((prev) => (prev + 1) % videos.length)}
                        className="p-2 rounded-full bg-purple-600/50 text-white"
                        whileTap={{ scale: 0.9 }}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile Indicator dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {videos.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-purple-500 scale-125' 
                      : 'bg-gray-600'
                  }`}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative">
          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-purple-600/30 border border-purple-500/50 text-white hover:border-purple-400 transition-all"
            style={{ backdropFilter: 'blur(10px)' }}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-purple-600/30 border border-purple-500/50 text-white hover:border-purple-400 transition-all"
            style={{ backdropFilter: 'blur(10px)' }}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>

          {/* Desktop 3D Video Carousel */}
          <div className="flex items-center justify-center space-x-8 w-full max-w-6xl mx-auto">
            {videos.map((video, index) => {
              const isCenter = index === currentIndex;
              const isAdjacent = Math.abs(index - currentIndex) === 1 || 
                                (currentIndex === 0 && index === videos.length - 1) ||
                                (currentIndex === videos.length - 1 && index === 0);

              return (
                <motion.div
                  key={video.id}
                  className={`relative rounded-2xl overflow-hidden cursor-pointer ${
                    isCenter 
                      ? 'w-[600px] h-[340px]' 
                      : isAdjacent 
                        ? 'w-[480px] h-[270px]' 
                        : 'w-[360px] h-[200px]'
                  }`}
                  animate={{
                    scale: isCenter ? 1 : isAdjacent ? 0.9 : 0.75,
                    opacity: isCenter ? 1 : isAdjacent ? 0.7 : 0.4,
                    rotateY: isCenter ? 0 : isAdjacent ? (index < currentIndex ? -15 : 15) : 0,
                    z: isCenter ? 50 : isAdjacent ? 25 : 0,
                    filter: isCenter ? 'blur(0px)' : isAdjacent ? 'blur(1px)' : 'blur(2px)'
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  whileHover={isCenter ? { scale: 1.02 } : {}}
                  onClick={() => setCurrentIndex(index)}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Video Container */}
                  <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden">
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

                    {/* Desktop Controls for center video */}
                    {isCenter && (
                      <div className="absolute top-4 right-4 z-30 flex space-x-2">
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            togglePlayPause();
                          }}
                          className="p-3 rounded-full bg-purple-600/60 backdrop-blur-md border border-purple-400/30 text-white"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                        </motion.button>

                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleMute();
                          }}
                          className="p-3 rounded-full bg-purple-600/60 backdrop-blur-md border border-purple-400/30 text-white"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                        </motion.button>
                      </div>
                    )}

                    {/* Playing indicator - simple green dot */}
                    {isCenter && isPlaying && (
                      <motion.div
                        className="absolute top-4 left-4 w-4 h-4 bg-green-500 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          boxShadow: [
                            '0 0 8px rgba(34, 197, 94, 0.6)',
                            '0 0 16px rgba(34, 197, 94, 0.9)',
                            '0 0 8px rgba(34, 197, 94, 0.6)'
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>
                  
                  {/* Overlay for non-center videos */}
                  {!isCenter && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-2xl" />
                  )}
                  
                  {/* Glow for center video */}
                  {isCenter && (
                    <div className="absolute inset-0 rounded-2xl border-2 border-purple-500/60 pointer-events-none" />
                  )}

                  {/* Video title overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
                    <span>{video.title}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop Indicator dots */}
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
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Instructions */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-400 text-sm mb-2">
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