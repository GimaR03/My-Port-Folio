//https://github.com/GimaR03/My-portfolio.git
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const technologies = [
    { name: "Express", logo: "/images/express.png" },
    { name: "MongoDB", logo: "/images/mongodb.png" },
    { name: "JavaScript", logo: "/images/js.png" },
    { name: "TypeScript", logo: "/images/typescript.png" },
    { name: "Tailwind CSS", logo: "/images/tailwind.png" },
    { name: "AWS", logo: "/images/aws.png" },
    { name: "C", logo: "/images/C_Logo.png" },
    { name: "C++", logo: "/images/c++.png" },
    { name: "HTML", logo: "/images/HTML.png" },
    { name: "CSS", logo: "/images/css.jpg" },
  ];

  return (
    <motion.div
      className="min-h-screen flex flex-col lg:flex-row justify-center items-center bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 px-6 py-12 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Main Container */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center min-h-[80vh]">
        
        {/* Left Side - Text Content */}
        <motion.div 
          className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Title similar to the template */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-none text-slate-800 dark:text-slate-100">
              Full-Stack
            </h1>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-none mt-2 text-slate-800 dark:text-slate-100">
              Developer
            </h1>
          </div>

          {/* Name Highlight */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-light text-slate-500 dark:text-slate-400 mb-2">
              I'm <span className="font-bold 
              bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent 
              dark:from-blue-400 dark:to-cyan-400">Gimani Rajarathna</span>
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold 
            bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent 
            dark:from-blue-400 dark:to-cyan-400">
              MERN Stack Specialist
            </h3>
          </div>

          {/* Description */}
          <motion.p 
            className="text-base md:text-lg leading-relaxed text-slate-500 dark:text-slate-400 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I specialize in building scalable, high-performance web applications for global users. 
            With expertise in <span className="font-semibold 
            bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent 
            dark:from-blue-400 dark:to-cyan-400">Express</span>,{" "}
            <span className="font-semibold 
            bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent 
            dark:from-blue-400 dark:to-cyan-400">MongoDB</span>, and modern UI/UX design, 
            I create secure, responsive, and SEO-optimized digital solutions that deliver exceptional user experiences.
          </motion.p>

          {/* Call to Action Buttons  */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link 
              to="/projects"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 dark:from-blue-400 dark:to-cyan-400 dark:hover:from-blue-500 dark:hover:to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center shadow-lg hover:shadow-xl"
            >
              View Projects
            </Link>
            <Link 
              to="/contact"
              className="border border-slate-400 dark:border-slate-500 hover:border-blue-600 dark:hover:border-blue-400 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
            >
              Contact Me
            </Link>
          </motion.div>

          {/* Technologies I Work With */}
          <motion.div 
            className="mt-8 text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="text-slate-500 dark:text-slate-400 mb-4">Technologies I Work With</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-sm md:text-base">
              {technologies.map((tech) => (
                <div 
                  key={tech.name}
                  className="group relative bg-slate-200 dark:bg-slate-800 px-3 py-2 rounded-full text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-700 flex items-center gap-2 hover:scale-105 transition-transform duration-300 hover:bg-slate-300 dark:hover:bg-slate-700"
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <img 
                      src={tech.logo} 
                      alt={tech.name}
                      className="w-7 h-7 object-contain"
                      onError={(e) => {
                        // Fallback if logo fails to load
                        e.target.style.display = 'none';
                        const parent = e.target.parentElement;
                        const fallbackSpan = document.createElement('span');
                        fallbackSpan.textContent = tech.name.charAt(0);
                        fallbackSpan.className = "w-7 h-7 flex items-center justify-center font-bold text-lg";
                        parent.appendChild(fallbackSpan);
                      }}
                    />
                  </div>
                  <span className="font-medium">{tech.name}</span>
                  {/* Tooltip on hover */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-slate-800 dark:bg-slate-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-10 shadow-lg">
                    {tech.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-800 dark:border-t-slate-700"></div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-3">
              Note: Some logos may not display if image files are missing
            </p>
          </motion.div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div 
          className="lg:w-1/2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative">
            <img
              src="/images/profile.jpg"
              alt="Gimani Rajarathna"
              className="w-96 h-96 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] object-cover rounded-full shadow-2xl border-4 border-blue-500 dark:border-blue-400"
            />
            {/* Decorative Circle Elements */}
            <div className="absolute -top-3 -right-3 w-96 h-96 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] border-2 border-blue-400 dark:border-blue-500 rounded-full -z-10"></div>
            <div className="absolute -bottom-3 -left-3 w-96 h-96 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] border-2 border-slate-400 dark:border-slate-600 rounded-full -z-10"></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;