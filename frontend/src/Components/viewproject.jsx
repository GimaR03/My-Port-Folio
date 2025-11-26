import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const ViewProject = () => {
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [animalPlantPlaying, setAnimalPlantPlaying] = useState(false);
  const [animalPlantFullscreen, setAnimalPlantFullscreen] = useState(false);
  const [fullVideoPlaying, setFullVideoPlaying] = useState(false);
  const [fullVideoFullscreen, setFullVideoFullscreen] = useState(false);
  const videoRef = useRef(null);
  const fullscreenVideoRef = useRef(null);
  const animalPlantVideoRef = useRef(null);
  const animalPlantFullscreenRef = useRef(null);
  const fullVideoVideoRef = useRef(null);
  const fullVideoFullscreenRef = useRef(null);

  const speedOptions = [1, 1.25, 1.5, 1.75, 2];

  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed);
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
    if (fullscreenVideoRef.current) {
      fullscreenVideoRef.current.playbackRate = speed;
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const openFullscreenVideo = () => {
    setIsFullscreen(true);
    setTimeout(() => {
      if (fullscreenVideoRef.current) {
        fullscreenVideoRef.current.play();
        // Auto minimize after video ends
        fullscreenVideoRef.current.onended = () => {
          setIsFullscreen(false);
          setIsPlaying(false);
        };
      }
    }, 100);
  };

  const closeFullscreenVideo = () => {
    if (fullscreenVideoRef.current) {
      fullscreenVideoRef.current.pause();
    }
    setIsFullscreen(false);
    setIsPlaying(false);
  };

  const toggleAnimalPlantPlay = () => {
    if (animalPlantVideoRef.current) {
      if (animalPlantPlaying) {
        animalPlantVideoRef.current.pause();
      } else {
        animalPlantVideoRef.current.play();
      }
      setAnimalPlantPlaying(!animalPlantPlaying);
    }
  };

  const openAnimalPlantFullscreen = () => {
    setAnimalPlantFullscreen(true);
    setTimeout(() => {
      if (animalPlantFullscreenRef.current) {
        animalPlantFullscreenRef.current.play();
        // Auto minimize after video ends
        animalPlantFullscreenRef.current.onended = () => {
          setAnimalPlantFullscreen(false);
          setAnimalPlantPlaying(false);
        };
      }
    }, 100);
  };

  const closeAnimalPlantFullscreen = () => {
    if (animalPlantFullscreenRef.current) {
      animalPlantFullscreenRef.current.pause();
    }
    setAnimalPlantFullscreen(false);
    setAnimalPlantPlaying(false);
  };

  const handleAnimalPlantSpeedChange = (speed) => {
    if (animalPlantVideoRef.current) {
      animalPlantVideoRef.current.playbackRate = speed;
    }
    if (animalPlantFullscreenRef.current) {
      animalPlantFullscreenRef.current.playbackRate = speed;
    }
  };

  const toggleFullVideoPlay = () => {
    if (fullVideoVideoRef.current) {
      if (fullVideoPlaying) {
        fullVideoVideoRef.current.pause();
      } else {
        fullVideoVideoRef.current.play();
      }
      setFullVideoPlaying(!fullVideoPlaying);
    }
  };

  const openFullVideoFullscreen = () => {
    setFullVideoFullscreen(true);
    setTimeout(() => {
      if (fullVideoFullscreenRef.current) {
        fullVideoFullscreenRef.current.play();
        // Auto minimize after video ends
        fullVideoFullscreenRef.current.onended = () => {
          setFullVideoFullscreen(false);
          setFullVideoPlaying(false);
        };
      }
    }, 100);
  };

  const closeFullVideoFullscreen = () => {
    if (fullVideoFullscreenRef.current) {
      fullVideoFullscreenRef.current.pause();
    }
    setFullVideoFullscreen(false);
    setFullVideoPlaying(false);
  };

  const handleFullVideoSpeedChange = (speed) => {
    if (fullVideoVideoRef.current) {
      fullVideoVideoRef.current.playbackRate = speed;
    }
    if (fullVideoFullscreenRef.current) {
      fullVideoFullscreenRef.current.playbackRate = speed;
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Animal Plant Health Management Project */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
              <video
                ref={animalPlantVideoRef}
                src="/videos/AnimalPlant.mp4"
                className="w-full h-full object-cover cursor-pointer"
                onClick={openAnimalPlantFullscreen}
              />

              {/* Play Button Overlay */}
              <button
                onClick={openAnimalPlantFullscreen}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-70 transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 4l10 6-10 6V4z"/>
                </svg>
              </button>

              {/* Click to play hint */}
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                Click to play
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                Animal Plant Health Management
              </h3>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-sm text-gray-600 dark:text-gray-400">JavaScript</span>
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{width: '99.4%'}}></div>
                </div>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">99.4%</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                A comprehensive health management system for monitoring and managing animal and plant health with advanced tracking capabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs rounded-full">JavaScript</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 text-xs rounded-full">Health Management</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs rounded-full">Tracking System</span>
              </div>
            </div>
          </motion.div>
          
          {/* Additional project placeholder */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
              <video
                ref={videoRef}
                src="/videos/fitme.mp4"
                className="w-full h-full object-cover cursor-pointer"
                onClick={openFullscreenVideo}
              />
              
              {/* Play Button Overlay */}
              <button
                onClick={openFullscreenVideo}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-70 transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 4l10 6-10 6V4z"/>
                </svg>
              </button>
              
              {/* Click to play hint */}
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                Click to play
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                FitMe-app-Lab-Exam-2
              </h3>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-sm text-gray-600 dark:text-gray-400">Kotlin</span>
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">100%</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                This mobile application was developed as part of my Mobile Application Development Module – Assignment 2.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs rounded-full">Kotlin</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 text-xs rounded-full">Mobile App</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs rounded-full">Android</span>
              </div>
            </div>
          </motion.div>
          
          {/* Smart Farm Management System Project */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
              <video
                ref={fullVideoVideoRef}
                src="/videos/fullVideo.mp4"
                className="w-full h-full object-cover cursor-pointer"
                onClick={openFullVideoFullscreen}
              />

              {/* Play Button Overlay */}
              <button
                onClick={openFullVideoFullscreen}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-70 transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 4l10 6-10 6V4z"/>
                </svg>
              </button>

              {/* Click to play hint */}
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                Click to play
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                Smart Farm Management System
              </h3>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-sm text-gray-600 dark:text-gray-400">JavaScript</span>
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '97.1%'}}></div>
                </div>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">97.1%</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                A comprehensive enterprise-grade monorepo solution for integrated smart farm operations, encompassing animal management, plant management, health management, inventory control, and employee administration.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs rounded-full">JavaScript</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 text-xs rounded-full">Enterprise Solution</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs rounded-full">Monorepo</span>
                <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 text-xs rounded-full">Smart Farm</span>
                <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 text-xs rounded-full">Management System</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Fullscreen Video Modal */}
      {isFullscreen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeFullscreenVideo}
        >
          <motion.div
            className="relative max-w-4xl max-h-screen p-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={fullscreenVideoRef}
              src="/videos/fitme.mp4"
              className="w-full h-full max-h-[80vh] object-contain rounded-lg"
              controls
            />
            
            {/* Close Button */}
            <button
              onClick={closeFullscreenVideo}
              className="absolute top-6 right-6 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
              </svg>
            </button>
            
            {/* Speed Controls */}
            <div className="absolute bottom-6 right-6 bg-black bg-opacity-50 rounded-lg p-3">
              <div className="flex gap-2">
                {speedOptions.map((speed) => (
                  <button
                    key={speed}
                    onClick={() => handleSpeedChange(speed)}
                    className={`text-sm px-3 py-1 rounded transition-all ${
                      playbackSpeed === speed
                        ? 'bg-blue-500 text-white'
                        : 'text-white hover:bg-gray-700'
                    }`}
                  >
                    {speed}x
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Animal Plant Fullscreen Video Modal */}
      {animalPlantFullscreen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeAnimalPlantFullscreen}
        >
          <motion.div
            className="relative max-w-4xl max-h-screen p-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={animalPlantFullscreenRef}
              src="/videos/AnimalPlant.mp4"
              className="w-full h-full max-h-[80vh] object-contain rounded-lg"
              controls
            />

            {/* Close Button */}
            <button
              onClick={closeAnimalPlantFullscreen}
              className="absolute top-6 right-6 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
              </svg>
            </button>

            {/* Speed Controls */}
            <div className="absolute bottom-6 right-6 bg-black bg-opacity-50 rounded-lg p-3">
              <div className="flex gap-2">
                {speedOptions.map((speed) => (
                  <button
                    key={speed}
                    onClick={() => handleAnimalPlantSpeedChange(speed)}
                    className={`text-sm px-3 py-1 rounded transition-all ${
                      playbackSpeed === speed
                        ? 'bg-blue-500 text-white'
                        : 'text-white hover:bg-gray-700'
                    }`}
                  >
                    {speed}x
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* FullVideo Fullscreen Video Modal */}
      {fullVideoFullscreen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeFullVideoFullscreen}
        >
          <motion.div
            className="relative max-w-4xl max-h-screen p-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={fullVideoFullscreenRef}
              src="/videos/fullVideo.mp4"
              className="w-full h-full max-h-[80vh] object-contain rounded-lg"
              controls
            />

            {/* Close Button */}
            <button
              onClick={closeFullVideoFullscreen}
              className="absolute top-6 right-6 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
              </svg>
            </button>

            {/* Speed Controls */}
            <div className="absolute bottom-6 right-6 bg-black bg-opacity-50 rounded-lg p-3">
              <div className="flex gap-2">
                {speedOptions.map((speed) => (
                  <button
                    key={speed}
                    onClick={() => handleFullVideoSpeedChange(speed)}
                    className={`text-sm px-3 py-1 rounded transition-all ${
                      playbackSpeed === speed
                        ? 'bg-blue-500 text-white'
                        : 'text-white hover:bg-gray-700'
                    }`}
                  >
                    {speed}x
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ViewProject;