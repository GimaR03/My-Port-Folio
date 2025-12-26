import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const VehicleSpire = () => {
  const teamMembers = [
    { name: "Gimani Rajarathna", role: "Group Leader", image: "/images/gimani.jpg" },
    { name: "R.G.N.T Rankoth", role: "Member", image: "/images/mashi.jpg" },
    { name: "T.G.C.N Karunathilaka", role: "Member", image: "/images/chamodi.jpg" },
    { name: "A.A.P.D Amarasingaha", role: "Member", image: "/images/diwyanjali.jpg" },
  ];

  return (
    <motion.div
      className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 px-6 py-12 transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <Link
          to="/projects"
          className="text-blue-600 dark:text-blue-400 hover:underline mb-6 inline-block"
        >
          ← Back to Projects
        </Link>

        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 text-blue-600 dark:text-blue-400"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          Vehicle Spire Parts Management System
        </motion.h1>

        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg shadow-lg p-8 border border-slate-200 dark:border-slate-700 mb-8">
          <img
            src="/images/spareParts.png"
            alt="Vehicle Spire Parts Management System"
            className="w-full h-48 object-cover rounded-lg mb-6"
          />

          <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm font-semibold mb-4">
            🎓 University Group Project
          </div>

          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-6">
            A comprehensive vehicle spare parts management system developed for our
            2nd Year 1st Semester OOP module. This web-based platform allows owners
            to upload and manage spare parts inventory while enabling customers to
            browse and purchase vehicle parts seamlessly.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-300 rounded-full">
              Java (99%)
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full">
              CSS (1%)
            </span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300 rounded-full">
              OOP Project
            </span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full">
              E-commerce
            </span>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside text-slate-500 dark:text-slate-400 space-y-2 mb-6">
            <li>Spare parts inventory management</li>
            <li>Owner dashboard for uploading parts</li>
            <li>Customer browsing and purchasing</li>
            <li>Search and filter functionality</li>
            <li>Order management system</li>
            <li>Object-Oriented Programming principles</li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/GimaR03/Vehicle_spare_parts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View on GitHub
            </a>

            <a
              href="https://vimeo.com/1149270247?share=copy&fl=sv&fe=ci"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              ▶ View Video
            </a>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg shadow-lg p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            👥 Project Team
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                <h3 className="font-semibold">{member.name}</h3>
                <p
                  className={`text-sm ${
                    member.role === "Group Leader"
                      ? "text-yellow-600 dark:text-yellow-400 font-semibold"
                      : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {member.role === "Group Leader" ? "👑 " : ""}
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VehicleSpire;
