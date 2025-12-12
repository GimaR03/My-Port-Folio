import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ViewProject = () => {
  const navigate = useNavigate();

  // GitHub links for each project
  const githubLinks = {
    OnlineCakeShop: "https://github.com/GimaR03/Cake_Shop",
    VehicleSpire: "https://github.com/GimaR03/Vehicle_spare_parts",
    BloomHabits: "https://github.com/GimaR03/BloomHabits-app-Lab-Exam-3",
    OnlineMedicalPortal: "https://github.com/GimaR03/Online_medical_portal",
    AnimalPlantHealth: "https://github.com/GimaR03/animal-plant-health-management",
    FitMeApp: "https://github.com/GimaR03/FitMe-app-Lab-Exam-2-",
    SmartFarm: "https://github.com/GimaR03/smart-farm-management"
  };

  // Function to handle project details view navigation
  const handleViewDetails = (projectName) => {
    switch (projectName) {
      case "Online Cake Shop":
        navigate("/cakeShop");
        break;
      case "Vehicle Spire Parts Management":
        navigate("/vehicleSpire");
        break;
      case "BloomHabits":
        navigate("/bloomHabit");
        break;
      case "Online Medical Portal":
        navigate("/medicalPortal");
        break;
      case "Animal Plant Health Management":
        navigate("/animalPlant");
        break;
      case "FitMe App":
        navigate("/fitme");
        break;
      case "Smart Farm Management":
        navigate("/farm");
        break;
      default:
        console.log(`Unknown project: ${projectName}`);
    }
  };

  // Function to handle GitHub link
  const handleGitHubClick = (githubUrl) => {
    window.open(githubUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 px-6 py-12 transition-colors duration-300"
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
          {/* Online Cake Shop Project */}
          <motion.div 
            className="bg-slate-50 dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="/images/cakeFull.png" 
              alt="Online Cake Shop" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                Online Cake Shop
              </h3>
              <div className="space-y-2 mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-slate-500 dark:text-slate-400 w-20">JavaScript</span>
                  <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '96.5%'}}></div>
                  </div>
                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 w-10">96.5%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-slate-500 dark:text-slate-400 w-20">HTML</span>
                  <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{width: '1.9%'}}></div>
                  </div>
                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 w-10">1.9%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-slate-500 dark:text-slate-400 w-20">CSS</span>
                  <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '1.6%'}}></div>
                  </div>
                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 w-10">1.6%</span>
                </div>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                This project is a fully deployed online cake shop ordering platform that allows customers to browse available cakes and sweets, add items to their cart, and place orders easily. It is designed to provide a smooth and user-friendly online ordering experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-300 text-xs rounded-full">JavaScript</span>
                <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-300 text-xs rounded-full">HTML</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-xs rounded-full">CSS</span>
                <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-300 text-xs rounded-full">E-commerce</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300 text-xs rounded-full">Online Ordering</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <motion.button
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center space-x-2 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleViewDetails("Online Cake Shop")}
                  >
                    <span>View Details</span>
                  </motion.button>
                  <motion.button
                    className="p-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg transition-colors duration-200 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleGitHubClick(githubLinks.OnlineCakeShop)}
                    title="View on GitHub"
                  >
                    <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vehicle Spire Parts Management System Project */}
          <motion.div 
            className="bg-slate-50 dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="/images/spareParts.png" 
              alt="Vehicle Spire Parts Management System" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                Vehicle Spire Parts Management System
              </h3>
              <div className="space-y-2 mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-slate-500 dark:text-slate-400 w-20">Java</span>
                  <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '99%'}}></div>
                  </div>
                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 w-10">99%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-slate-500 dark:text-slate-400 w-20">CSS</span>
                  <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '1%'}}></div>
                  </div>
                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 w-10">1%</span>
                </div>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                A comprehensive vehicle spare parts management system developed for our 2nd Year 1st Semester OOP module. This web-based platform allows owners to upload and manage spare parts inventory while enabling customers to browse and purchase vehicle parts seamlessly.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-300 text-xs rounded-full">Java</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-xs rounded-full">CSS</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300 text-xs rounded-full">OOP Project</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 text-xs rounded-full">E-commerce</span>
                <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-300 text-xs rounded-full">Inventory Management</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <motion.button
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center space-x-2 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleViewDetails("Vehicle Spire Parts Management")}
                  >
                    <span>View Details</span>
                  </motion.button>
                  <motion.button
                    className="p-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg transition-colors duration-200 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleGitHubClick(githubLinks.VehicleSpire)}
                    title="View on GitHub"
                  >
                    <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* BloomHabits App Project */}
          <motion.div 
            className="bg-slate-50 dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="/images/habitBloomFull.png" 
              alt="BloomHabits App" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                BloomHabits-app-Lab-Exam-3
              </h3>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-sm text-slate-500 dark:text-slate-400">Kotlin</span>
                <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">100%</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                A comprehensive habit tracking mobile application that helps users build and maintain positive routines. Features include customizable alarms, smart notifications, progress analytics, and streak tracking to motivate consistent habit formation.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-xs rounded-full">Kotlin</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300 text-xs rounded-full">Mobile App</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 text-xs rounded-full">Habit Tracking</span>
                <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-300 text-xs rounded-full">Alarm System</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <motion.button
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center space-x-2 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleViewDetails("BloomHabits")}
                  >
                    <span>View Details</span>
                  </motion.button>
                  <motion.button
                    className="p-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg transition-colors duration-200 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleGitHubClick(githubLinks.BloomHabits)}
                    title="View on GitHub"
                  >
                    <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Online Medical Portal Project */}
          <motion.div 
            className="bg-slate-50 dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="/images/mediacalFUll.png" 
              alt="Online Medical Portal" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                Online Medical Portal
              </h3>
              <div className="space-y-2 mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-slate-500 dark:text-slate-400 w-20">PHP</span>
                  <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '65.9%'}}></div>
                  </div>
                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 w-10">65.9%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-slate-500 dark:text-slate-400 w-20">CSS</span>
                  <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-pink-500 h-2 rounded-full" style={{width: '24.5%'}}></div>
                  </div>
                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 w-10">24.5%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-slate-500 dark:text-slate-400 w-20">JavaScript</span>
                  <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '8.9%'}}></div>
                  </div>
                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 w-10">8.9%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-slate-500 dark:text-slate-400 w-20">Hack</span>
                  <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '0.7%'}}></div>
                  </div>
                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 w-10">0.7%</span>
                </div>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                A comprehensive online medical portal for patient management, appointment scheduling, and healthcare services with multi-language support.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-xs rounded-full">PHP</span>
                <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-300 text-xs rounded-full">CSS</span>
                <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-300 text-xs rounded-full">JavaScript</span>
                <span className="px-2 py-1 bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-300 text-xs rounded-full">Healthcare</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <motion.button
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center space-x-2 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleViewDetails("Online Medical Portal")}
                  >
                    <span>View Details</span>
                  </motion.button>
                  <motion.button
                    className="p-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg transition-colors duration-200 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleGitHubClick(githubLinks.OnlineMedicalPortal)}
                    title="View on GitHub"
                  >
                    <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Animal Plant Health Management Project */}
          <motion.div 
            className="bg-slate-50 dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="/images/animalplantFull.png" 
              alt="Animal Plant Health Management" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                Animal Plant Health Management
              </h3>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-sm text-slate-500 dark:text-slate-400">JavaScript</span>
                <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{width: '99.4%'}}></div>
                </div>
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">99.4%</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                A comprehensive health management system for monitoring and managing animal and plant health with advanced tracking capabilities.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-xs rounded-full">JavaScript</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300 text-xs rounded-full">Health Management</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 text-xs rounded-full">Tracking System</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <motion.button
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center space-x-2 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleViewDetails("Animal Plant Health Management")}
                  >
                    <span>View Details</span>
                  </motion.button>
                  <motion.button
                    className="p-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg transition-colors duration-200 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleGitHubClick(githubLinks.AnimalPlantHealth)}
                    title="View on GitHub"
                  >
                    <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* FitMe App Project */}
          <motion.div 
            className="bg-slate-50 dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="/images/fitmeFull.png" 
              alt="FitMe App" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                FitMe-app-Lab-Exam-2
              </h3>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-sm text-slate-500 dark:text-slate-400">Kotlin</span>
                <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">100%</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                This mobile application was developed as part of my Mobile Application Development Module – Assignment 2.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-xs rounded-full">Kotlin</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300 text-xs rounded-full">Mobile App</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 text-xs rounded-full">Android</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <motion.button
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center space-x-2 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleViewDetails("FitMe App")}
                  >
                    <span>View Details</span>
                  </motion.button>
                  <motion.button
                    className="p-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg transition-colors duration-200 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleGitHubClick(githubLinks.FitMeApp)}
                    title="View on GitHub"
                  >
                    <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Smart Farm Management System Project */}
          <motion.div
            className="bg-slate-50 dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="/images/FramFull.png" 
              alt="Smart Farm Management System" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                Smart Farm Management System
              </h3>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-sm text-slate-500 dark:text-slate-400">JavaScript</span>
                <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '97.1%'}}></div>
                </div>
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">97.1%</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                A comprehensive enterprise-grade monorepo solution for integrated smart farm operations, encompassing animal management, plant management, health management, inventory control, and employee administration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-xs rounded-full">JavaScript</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300 text-xs rounded-full">Enterprise Solution</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 text-xs rounded-full">Monorepo</span>
                <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-300 text-xs rounded-full">Smart Farm</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <motion.button
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center space-x-2 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleViewDetails("Smart Farm Management")}
                  >
                    <span>View Details</span>
                  </motion.button>
                  <motion.button
                    className="p-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg transition-colors duration-200 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleGitHubClick(githubLinks.SmartFarm)}
                    title="View on GitHub"
                  >
                    <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ViewProject;