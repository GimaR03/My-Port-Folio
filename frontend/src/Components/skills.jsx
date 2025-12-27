import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaCogs,
  FaPaintBrush,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaPlug,
  FaGitAlt,
  FaTools,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <FaCode />,
    items: ["C", "C++", "Java", "Python", "Kotlin"],
  },
  {
    title: "Software Engineering Fundamentals",
    icon: <FaCogs />,
    items: [
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms",
      "Software Development Life Cycle (SDLC)",
      "MVC Architecture",
      "Design Patterns (Basic)",
      "Agile & Scrum Methodology",
    ],
  },
  {
    title: "Frontend Development",
    icon: <FaPaintBrush />,
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
      "Figma (UI/UX Design)",
    ],
  },
  {
    title: "Backend Development",
    icon: <FaServer />,
    items: ["Node.js", "Express.js", "Java", "PHP", "REST APIs"],
  },
  {
    title: "Databases",
    icon: <FaDatabase />,
    items: [
      "MySQL",
      "SQLite",
      "MongoDB",
      "Database Design (ER Diagrams)",
    ],
  },
  {
    title: "Mobile Development",
    icon: <FaMobileAlt />,
    items: ["Android Studio", "Kotlin", "Java"],
  },
  {
    title: "API Development & Testing",
    icon: <FaPlug />,
    items: ["Postman"],
  },
  {
    title: "Version Control & Collaboration",
    icon: <FaGitAlt />,
    items: [
      "Git",
      "GitHub",
      "GitHub Desktop",
      "Branching & Pull Requests",
    ],
  },
  {
    title: "Development Tools & IDEs",
    icon: <FaTools />,
    items: [
      "Visual Studio Code",
      "Eclipse",
      "Android Studio",
      "Dev C++",
      "R Studio",
    ],
  },
];

const Skills = () => {
  return (
    <motion.div
      className="min-h-screen bg-white dark:bg-slate-900 px-6 py-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-4
          bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h1>

        {/* Description */}
        <p className="text-center text-black dark:text-slate-300 max-w-3xl mx-auto mb-12 text-base md:text-lg">
          Passionate Full Stack Developer and SLIIT IT undergraduate with
          experience in MERN Stack and Kotlin, focused on building scalable,
          user-centric web and mobile applications.
        </p>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6
              shadow-lg border border-slate-200 dark:border-slate-700"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl text-cyan-500">
                  {category.icon}
                </span>
                <h3
                  className="text-xl font-semibold
                  bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
                >
                  {category.title}
                </h3>
              </div>

              {/* Items */}
              <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
