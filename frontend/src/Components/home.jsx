//https://github.com/GimaR03/My-portfolio.git
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col lg:flex-row justify-center items-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Main Container */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center min-h-[80vh]">
        
        {/* Left Side - Text Content */}
        <motion.div 
          className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Title similar to the template */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-none">
              Full-Stack
            </h1>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-none mt-2">
              Developer
            </h1>
          </div>

          {/* Name Highlight */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-300 mb-2">
              I'm <span className="font-bold text-blue-600 dark:text-blue-400">Gimani Rajarathna</span>
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400">
              MERN Stack Specialist
            </h3>
          </div>

          {/* Description */}
          <motion.p 
            className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I specialize in building scalable, high-performance web applications for global users. 
            With expertise in <span className="font-semibold text-blue-600 dark:text-blue-400">Express</span>,{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">MongoDB</span>, and modern UI/UX design, 
            I create secure, responsive, and SEO-optimized digital solutions that deliver exceptional user experiences.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link 
              to="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
            >
              View Projects
            </Link>
            <Link 
              to="/contact"
              className="border border-gray-600 dark:border-gray-400 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
            >
              Contact Me
            </Link>
          </motion.div>

          {/* Technologies I Work With */}
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">Technologies I Work With</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              {['Express', 'MongoDB', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'AWS', 'C', 'C++', 'HTML', 'CSS'].map((tech, index) => (
                <span key={tech} className="bg-gray-700 dark:bg-gray-800 px-4 py-2 rounded-full text-gray-300 dark:text-gray-200">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div 
          className="lg:w-1/2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative">
            {/* Main Profile Image */}
            <div className="relative z-10">
              <img
                src="/images/profile.jpg"
                alt="Gimani Rajarathna"
                className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-80 h-80 md:w-96 md:h-96 border-2 border-blue-400 rounded-lg -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-80 h-80 md:w-96 md:h-96 border-2 border-gray-600 rounded-lg -z-10"></div>
          </div>
        </motion.div>
      </div>

      </motion.div>
  );
};

export default Home;