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
                <p className="text-cyan-500 font-semibold text-lg tracking-wide">
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
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
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

        {/* Skills Section */}
        <motion.div
          className="mt-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-2xl p-8 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "JavaScript", level: "95%" },
              { name: "React", level: "90%" },
              { name: "Node.js", level: "85%" },
              { name: "MongoDB", level: "85%" },
              { name: "Express.js", level: "85%" },
              { name: "Kotlin", level: "80%" },
              { name: "Java", level: "80%" },
              { name: "Tailwind CSS", level: "90%" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-slate-200/50 to-slate-300/50 dark:from-slate-700/50 dark:to-slate-600/50 p-4 rounded-xl text-center border border-slate-300/30 dark:border-slate-600/30 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -3,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
              >
                <p className="font-bold text-slate-800 dark:text-white text-sm">
                  {skill.name}
                </p>
                <div className="w-full bg-slate-300/50 dark:bg-slate-600/50 rounded-full h-2 mt-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full shadow-inner animate-pulse-slow"
                    style={{ width: skill.level }}
                  ></div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {skill.level}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="mt-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-2xl p-8 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Get In Touch
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/GimaR03"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-xl hover:from-slate-600 hover:to-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg
                className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>

            <a
              href="mailto:gimani@example.com"
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email
            </a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </motion.div>
  );
};

export default About;