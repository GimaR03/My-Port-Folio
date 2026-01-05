import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CakeShop = () => {
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
          className="text-4xl md:text-5xl font-bold mb-6 
          bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent 
          dark:from-blue-400 dark:to-cyan-400"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          Online Cake Shop
        </motion.h1>

        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg shadow-lg p-8 border border-slate-200 dark:border-slate-700">
          <img
            src="/images/cakeFull.png"
            alt="Online Cake Shop"
            className="w-full h-48 object-cover rounded-lg mb-6"
          />

          <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300 rounded-full text-sm font-semibold mb-4">
            👤 Self Activity Project
          </div>

          <h2 className="text-2xl font-semibold mb-4 
          bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent 
          dark:from-blue-400 dark:to-cyan-400">
            Project Overview
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-6">
            This project is a fully deployed online cake shop ordering platform that allows customers to browse 
            available cakes and sweets, add items to their cart, and place orders easily. It is designed to 
            provide a smooth and user-friendly online ordering experience.
          </p>

          <h2 className="text-2xl font-semibold mb-4 
          bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent 
          dark:from-blue-400 dark:to-cyan-400">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-300 rounded-full">
              JavaScript (96.5%)
            </span>
            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-300 rounded-full">
              HTML (1.9%)
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full">
              CSS (1.6%)
            </span>
            <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-300 rounded-full">
              E-commerce
            </span>
          </div>

          <h2 className="text-2xl font-semibold mb-4 
          bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent 
          dark:from-blue-400 dark:to-cyan-400">
            Features
          </h2>
          <ul className="list-disc list-inside text-slate-500 dark:text-slate-400 space-y-2 mb-6">
            <li>Browse cakes and sweets catalog</li>
            <li>Shopping cart functionality</li>
            <li>Online ordering system</li>
            <li>User-friendly interface</li>
            <li>Responsive design for all devices</li>
            <li>Order tracking and management</li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/GimaR03/Cake_Shop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 dark:from-blue-400 dark:to-cyan-400 dark:hover:from-blue-500 dark:hover:to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View on GitHub
            </a>

            <a
              href="https://vimeo.com/1150103023?share=copy&fl=sv&fe=ci"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-slate-400 dark:border-slate-500 hover:border-blue-600 dark:hover:border-blue-400 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              ▶ View Video
            </a>

            <a
              href="https://cake-shop-frontend-jet.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-emerald-400 dark:border-emerald-500 hover:border-emerald-600 
              text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 
              px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              🚀 Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CakeShop;
