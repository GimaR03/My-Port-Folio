import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Farm = () => {
  const teamMembers = [
    { name: "Randev Dulneth", role: "Group Leader", image: "/images/randev2.jpg" },
    { name: "Gimani Rajarathna", role: "Member", image: "/images/gimani.jpg" },
    { name: "G.K. Rathnayaka", role: "Member", image: "/images/kokila.jpg" },
    { name: "Piusha", role: "Member", image: "/images/piusha.jpg" },
    { name: "Bulumulla", role: "Member", image: "/images/danushka.jpg" },
  ];

  return (
    <motion.div
      className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 px-6 py-12 transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <Link to="/projects" className="text-blue-600 dark:text-blue-400 hover:underline mb-6 inline-block">
          ← Back to Projects
        </Link>
        
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 text-blue-600 dark:text-blue-400"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          Smart Farm Management System
        </motion.h1>

        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg shadow-lg p-8 border border-slate-200 dark:border-slate-700 mb-8">
          <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mb-6">
            <span className="text-white text-8xl">🌾</span>
          </div>

          <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm font-semibold mb-4">
            🎓 University Group Project
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-200">Project Overview</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-6">
            A comprehensive enterprise-grade monorepo solution for integrated smart farm operations, 
            encompassing animal management, plant management, health management, inventory control, and employee administration.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-200">Technologies Used</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full">JavaScript</span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300 rounded-full">Enterprise Solution</span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full">Monorepo</span>
            <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-300 rounded-full">Smart Farm</span>
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-200">Features</h2>
          <ul className="list-disc list-inside text-slate-500 dark:text-slate-400 space-y-2 mb-6">
            <li>Animal management and tracking</li>
            <li>Plant management system</li>
            <li>Health monitoring and management</li>
            <li>Inventory control</li>
            <li>Employee administration</li>
          </ul>

          <a 
            href="https://github.com/GimaR03/smart-farm-management" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            View on GitHub
          </a>
        </div>

        {/* Team Section */}
        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg shadow-lg p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-200 text-center">👥 Project Team</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className={`w-20 h-20 mx-auto rounded-full object-cover mb-3 ${
                      member.role === "Group Leader" 
                        ? "ring-4 ring-yellow-300 dark:ring-yellow-600" 
                        : "ring-2 ring-blue-300 dark:ring-blue-600"
                    }`}
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      const initials = member.name
                        .split(' ')
                        .map(word => word[0])
                        .join('')
                        .substring(0, 2)
                        .toUpperCase();
                      
                      e.target.style.display = 'none';
                      const parentDiv = e.target.parentElement;
                      const fallbackDiv = document.createElement('div');
                      fallbackDiv.className = `w-20 h-20 mx-auto rounded-full flex items-center justify-center text-white text-2xl font-bold mb-3 ${
                        member.role === "Group Leader" 
                          ? "bg-gradient-to-br from-yellow-400 to-orange-500 ring-4 ring-yellow-300 dark:ring-yellow-600" 
                          : "bg-gradient-to-br from-blue-400 to-purple-500 ring-2 ring-blue-300 dark:ring-blue-600"
                      }`;
                      fallbackDiv.textContent = initials;
                      parentDiv.appendChild(fallbackDiv);
                    }}
                  />
                </div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{member.name}</h3>
                <p className={`text-xs ${
                  member.role === "Group Leader" 
                    ? "text-yellow-600 dark:text-yellow-400 font-semibold" 
                    : "text-slate-500 dark:text-slate-400"
                }`}>
                  {member.role === "Group Leader" ? "👑 " : ""}{member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Farm;