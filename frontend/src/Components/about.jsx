// Importing React to create and use components
import React from "react";
// Importing motion from Framer Motion for animations
import { motion } from "framer-motion";

const About = () => {
  const timeline = [
    {
      year: "2017",
      title: "Represented in the 44th Pesta Hockey International Tournament.",
      description:
        "I served as the captain of my hockey team during a match held in Penang City, Malaysia, in 2017.",
      icon: "🏑",
    },
    {
      year: "2022",
      title: "Completed studies in the G.C.E. Advanced Level (A/L) Physical Science Stream.",
      description:
        "Completed Advanced Level examinations in Physical Science stream, building a strong foundation in mathematics and physics.",
      icon: "📚",
    },
    {
      year: "2023",
      title: "Embarked on my university journey.",
      description:
        "Joined Sri Lanka Institute of Information Technology (SLIIT) and chose software engineering specialization, marking the beginning of my formal computer science education.",
      icon: "🎓",
    },
    {
      year: "2024",
      title: "Initiated my journey in full-stack development.",
      description:
        "Dived deep into modern web development, mastering React, Next.js, and backend technologies while maintaining excellent academic performance.",
      icon: "💻",
    },
    {
      year: "2026",
      title: "I am eager to commence my internship in the future.",
      description:
        "Embarking on my first professional internship, applying academic knowledge to real-world projects, collaborating with industry experts, and gaining hands-on experience in full-stack software development.",
      icon: "💼",
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 px-6 py-12 transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - My Journey */}
          <div className="space-y-6">
            {/* Profile Card */}
            <motion.div
              className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-2xl p-8 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm"
              initial={{ scale: 0.95, rotate: -1 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex flex-col items-center mb-6">
                <motion.img
                  src="/images/gimani.jpg"
                  alt="Gimani Rajarathna"
                  className="w-32 h-32 rounded-full object-cover border-4 border-cyan-400 shadow-2xl ring-4 ring-cyan-400/20 mb-4"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-1 drop-shadow-sm">
                  Gimani Rajarathna
                </h2>
                <p className="font-semibold text-lg tracking-wide 
                bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent 
                dark:from-blue-400 dark:to-cyan-400">
                  Full-Stack Developer
                </p>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-center text-sm leading-relaxed italic">
                From Hockey fields to code repositories, my journey has been
                about passion, dedication, and continuous learning. Here's my
                story of transformation and growth.
              </p>
            </motion.div>

            {/* My Journey Card */}
            <motion.div
              className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-2xl p-8 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  My Journey
                </h3>
                <span className="text-yellow-400 text-2xl animate-pulse">
                  🏆
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                My journey into technology began unexpectedly. As a hockey
                player for the Sri Lanka Under 15 team in 2017, I learned the
                importance of teamwork, strategy, and continuous improvement.
                These values became the foundation of my approach to software
                development.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                After completing my A/Ls in the Physical Science stream, I was
                drawn to the logical thinking and problem-solving aspects of
                mathematics and physics. This naturally led me to choose
                software engineering as my specialization at SLIIT.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Today, I'm a passionate full-stack developer who loves building
                innovative web applications. My background in physical sciences
                gives me a unique perspective on problem-solving, while my
                hockey experience has taught me the value of collaboration and
                persistence in achieving goals.
              </p>
            </motion.div>

            {/* Current Education Card */}
            <motion.div
              className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-cyan-500 text-3xl animate-bounce">
                  🎓
                </span>
                <h3 className="text-xl font-bold 
                bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent 
                dark:from-blue-400 dark:to-cyan-400">
                  Current Education
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-1 font-medium">
                Sri Lanka Institute of Information Technology
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-3 justify-center">
                <span>📍 Malabe, Sri Lanka</span>
              </div>
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-4 shadow-inner w-full max-w-xs">
                <p className="text-white font-semibold text-center">
                  BSc (Hons) in Information Technology 
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Timeline */}
          <motion.div
            className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-2xl p-8 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Timeline
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div
                className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-transparent to-cyan-400/50"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, transparent 0%, #0ea5e9 20%, transparent 40%, #0ea5e9 60%, transparent 80%, #0ea5e9 100%)",
                  backgroundSize: "2px 4px",
                }}
              ></div>

              {/* Timeline Items */}
              <div className="space-y-6 pb-0">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-8"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <div className="absolute left-3.5 top-1 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transform -translate-x-1/2 shadow-lg ring-2 ring-cyan-400/30 animate-pulse-slow"></div>

                    <span className="text-cyan-500 font-bold text-lg block relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-cyan-500 after:to-transparent after:rounded-full">
                      {item.year}
                    </span>

                    <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mt-1 mb-2 rounded-full"></div>

                    <div className="flex justify-center mb-2">
                      <span className="text-2xl animate-bounce">
                        {item.icon}
                      </span>
                    </div>

                    <h4 className="text-slate-800 dark:text-white font-bold text-lg mb-2 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent text-center">
                      {item.title}
                    </h4>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-6 tracking-wide text-center">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
};

export default About;