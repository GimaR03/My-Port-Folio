// **Importing React library**
// Needed to create React components and use JSX.
import React from "react";

// **Importing Framer Motion**
// motion: Used for adding animations to elements (fade-in, slide, hover effects).
import { motion } from "framer-motion";

const Certification = () => {
  return (
    <motion.div
      className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 px-6 py-12 transition-colors duration-300"
      initial={{ opacity: 0 }}               // Fade-in start
      animate={{ opacity: 1 }}               // Fade-in end
      transition={{ duration: 0.5 }}         // Animation duration
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Animated Heading */}
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-10 
          bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent 
          dark:from-blue-400 dark:to-cyan-400"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h1>
        
        {/* Certifications List */}
        <div className="space-y-8">
          {[
            {
              name: "Web Design for Beginners",
              issuer: "Centre for Open & Distance Learning, University of Moratuwa, Sri Lanka",
              date: "2024",
              description:
                "Participated in the online learning programme focused on foundational web design principles and practices.",
              image: "/images/Webdesign.jpg"
            },
            {
              name: "Python for Beginners",
              issuer: "Centre for Open & Distance Learning, University of Moratuwa, Sri Lanka",
              date: "2025",
              description:
                "Participated in the online learning programme focused on Python fundamentals, programming concepts, and problem-solving techniques.",
              image: "/images/Python_for_Beginners.png"
            },
            {
              name: "Front-End Development",
              issuer: "Centre for Open & Distance Learning, University of Moratuwa, Sri Lanka",
              date: "2025",
              description:
                "Participated in the online learning programme focused on foundational web design principles, HTML, CSS, and responsive front-end development practices.",
              image: "/images/front-end-development.png"
            },
            {
              name: "Represented in the 44th Pesta Hockey International Tournament",
              issuer: "Penang City, Malaysia",
              date: "2017",
              description:
                "Served as the captain of the hockey team during an international match held in Penang City, Malaysia, demonstrating leadership, teamwork, and competitive sportsmanship.",
              image: "/images/Hockey.jpg"
            }
          ].map((cert, index) => (
            
            // Certification Card
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 
              dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-2xl 
              p-6 border border-slate-200/50 dark:border-slate-700/50 
              backdrop-blur-sm grid grid-cols-1 lg:grid-cols-2 gap-6 items-center"
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              
              {/* Certification Image */}
              <div className="flex justify-center">
                <div className="w-96 h-64 relative">
                  <img 
                    src={cert.image}
                    alt={`${cert.name} Certificate`}
                    className="w-full h-full rounded-2xl object-contain 
                    border-4 border-cyan-400 shadow-2xl ring-4 ring-cyan-400/20"
                  />
                </div>
              </div>

              {/* Certification Details */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold 
                bg-gradient-to-r from-cyan-500 to-blue-600 
                bg-clip-text text-transparent">
                  {cert.name}
                </h3>

                <div>
                  <p className="text-slate-600 dark:text-slate-400 font-medium text-lg">
                    {cert.issuer}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    {cert.date}
                  </p>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed italic">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Certification;
