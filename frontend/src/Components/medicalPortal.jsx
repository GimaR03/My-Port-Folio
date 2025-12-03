import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MedicalPortal = () => {
  const teamMembers = [
    { name: "Gimani Rajarathna", role: "Group Leader", image: "/images/gimani.jpg" },
    { name: "Randev Dulneth", role: "Member", image: "/images/randev2.jpg" },
    { name: "G.K. Rathnayaka", role: "Member", image: "/images/kokila.jpg" },
    { name: "Nimashi Tharnya", role: "Member", image: "/images/mashi.jpg" },
    { name: "Demini Jayasingha", role: "Member", image: "/images/dewmini.jpg" },
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
          Online Medical Portal
        </motion.h1>

        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg shadow-lg p-8 border border-slate-200 dark:border-slate-700 mb-8">
          <img 
            src="/images/mediacalFUll.png" 
            alt="Online Medical Portal" 
            className="w-full h-48 object-cover rounded-lg mb-6"
          />

          <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm font-semibold mb-4">
            🎓 University Group Project
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-200">Project Overview</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-6">
            A comprehensive online medical portal for patient management, appointment scheduling, and healthcare services 
            with multi-language support. This platform streamlines healthcare operations and improves patient experience.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-200">Technologies Used</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full">PHP (65.9%)</span>
            <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-300 rounded-full">CSS (24.5%)</span>
            <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-300 rounded-full">JavaScript (8.9%)</span>
            <span className="px-3 py-1 bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-300 rounded-full">Healthcare</span>
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-200">Features</h2>
          <ul className="list-disc list-inside text-slate-500 dark:text-slate-400 space-y-2 mb-6">
            <li>Patient registration and management</li>
            <li>Appointment scheduling system</li>
            <li>Doctor and staff management</li>
            <li>Multi-language support</li>
            <li>Medical records management</li>
            <li>Responsive web interface</li>
          </ul>

          <a 
            href="https://github.com/GimaR03/Online_medical_portal" 
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
                <img 
                  src={member.image} 
                  alt={member.name}
                  className={`w-20 h-20 mx-auto rounded-full object-cover mb-3 ${
                    member.role === "Group Leader" 
                      ? "ring-4 ring-yellow-300 dark:ring-yellow-600" 
                      : "ring-2 ring-blue-300 dark:ring-blue-600"
                  }`}
                />
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

export default MedicalPortal;