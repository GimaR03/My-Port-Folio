import React from "react";
import { motion } from "framer-motion";

const Achievement = () => {
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
          Achievements
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Best Project Award", description: "Won first place in university hackathon 2024", icon: "🏆" },
            { title: "Open Source Contributor", description: "Active contributor to 10+ open source projects", icon: "💻" },
            { title: "Technical Blog Writer", description: "Published 50+ technical articles with 100K+ views", icon: "📝" },
            { title: "Mentorship Program", description: "Mentored 20+ junior developers", icon: "🎓" }
          ].map((achievement, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{achievement.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;