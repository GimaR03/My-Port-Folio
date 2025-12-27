// https://github.com/GimaR03/My-portfolio.git
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaJsSquare,
  FaGraduationCap,
  FaUniversity,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";

const gradientText =
  "bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent";

const techStack = [
  { name: "React.js", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "REST APIs", icon: <FaServer /> },
  { name: "Databases", icon: <FaDatabase /> },
];

const Home = () => {
  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "MongoDB", level: 85 },
    { name: "Express.js", level: 85 },
    { name: "Kotlin", level: 80 },
    { name: "Java", level: 80 },
    { name: "Tailwind CSS", level: 90 },
  ];

  const [animatedLevels, setAnimatedLevels] = useState({});

  useEffect(() => {
    skills.forEach((skill, index) => {
      setTimeout(() => {
        let currentLevel = 0;
        const interval = setInterval(() => {
          currentLevel += 2;
          if (currentLevel >= skill.level) {
            currentLevel = skill.level;
            clearInterval(interval);
          }
          setAnimatedLevels((prev) => ({
            ...prev,
            [skill.name]: currentLevel,
          }));
        }, 20);
      }, index * 100);
    });
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center min-h-[85vh]">
        
        {/* LEFT CONTENT */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase">
            Full-Stack
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase mt-2">
            Developer
          </h1>

          <h2 className="text-2xl mt-6 text-slate-500 dark:text-slate-400">
            I'm{" "}
            <span className={`font-bold ${gradientText}`}>
              Gimani Rajarathna
            </span>
          </h2>

          <h3 className={`text-xl font-semibold mt-2 ${gradientText}`}>
            MERN Stack Specialist
          </h3>

          <p className="mt-6 text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
            Passionate <span className={`font-semibold ${gradientText}`}>Full Stack Developer</span> and
            third-year <span className={`font-semibold ${gradientText}`}>Information Technology</span> undergraduate
            at <span className={`font-semibold ${gradientText}`}>SLIIT</span> with hands-on experience in
            building scalable, user-centric web and mobile applications using
            the <span className={`font-semibold ${gradientText}`}>MERN Stack</span> and
            <span className={`font-semibold ${gradientText}`}> Kotlin</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              to="/projects"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="border border-slate-400 px-8 py-3 rounded-lg font-semibold hover:border-blue-500 transition"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* PROFILE IMAGE */}
        <motion.div
          className="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/profile.jpg"
            alt="Gimani Rajarathna"
            className="w-96 h-96 lg:w-[450px] lg:h-[450px] object-cover rounded-full shadow-2xl border-4 border-blue-500"
          />
        </motion.div>
      </div>

      {/* EDUCATION */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border text-center">
          <FaUniversity className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className={`text-2xl font-bold ${gradientText}`}>SLIIT</h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Sri Lanka Institute of Information Technology
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border text-center">
          <FaGraduationCap className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className={`text-2xl font-bold ${gradientText}`}>Undergraduate</h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            BSc in Information Technology
          </p>
        </div>
      </motion.div>

      {/* MY TECH STACK */}
      <motion.div
        className="max-w-6xl mx-auto mt-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className={gradientText}>My Tech Stack</span>
        </h2>
        <p className="text-center text-slate-500 dark:text-slate-400 mt-2 mb-12">
          Technologies I work with to build amazing products
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border flex flex-col items-center hover:-translate-y-2 transition"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-4xl text-blue-500 mb-3">
                {tech.icon}
              </span>
              <p className={`font-semibold ${gradientText}`}>
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* SKILLS & TECHNOLOGIES */}
      <motion.div
        className="max-w-6xl mx-auto mt-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className={gradientText}>Highly proficient in a wide range of skills and technologies.</span>
        </h2>
        <p className="text-center text-slate-500 dark:text-slate-400 mt-2 mb-12">
          My expertise across various technologies and frameworks
        </p>

        <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-2xl p-8 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
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
                <p className="font-bold text-slate-800 dark:text-white text-sm mb-2">
                  {skill.name}
                </p>
                <div className="w-full bg-slate-300/50 dark:bg-slate-600/50 rounded-full h-3 mt-2 overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 h-3 rounded-full shadow-inner"
                    initial={{ width: 0 }}
                    animate={{ width: `${animatedLevels[skill.name] || 0}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                  ></motion.div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-semibold">
                  {animatedLevels[skill.name] || 0}%
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
