import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaWhatsapp, 
  FaArrowUp,
  FaMapMarkerAlt,
  FaPhone
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const contactDetails = {
    email: "gimarajarathna@gmail.com",
    phone: "070-219-6195",
    address: "160, Kondadeniya, Katugastota",
    github: "https://github.com/GimaR03",
    linkedin: "https://www.linkedin.com/in/gimani-rajarathna-032b12312",
    whatsapp: "https://wa.me/94702196195",
  };

  // Quick Links - Same as navbar
  const quickLinks = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "View Projects", href: "/projects" },
    { name: "Certifications", href: "/certifications" },
    { name: "Contact Me", href: "/contact" },
  ];

  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Social media handlers
  const handleSocialClick = (url) => {
    window.open(url, "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactDetails.email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${contactDetails.phone}`;
  };

  const handleWhatsAppClick = () => {
    window.open(contactDetails.whatsapp, "_blank");
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 dark:from-blue-400 dark:to-cyan-400 dark:hover:from-blue-500 dark:hover:to-cyan-500 text-white p-4 rounded-full shadow-2xl transition-all duration-300 group"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl group-hover:animate-bounce" />
        </motion.button>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-slate-200 border-t border-slate-700 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Gimani Rajarathna
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Full Stack Developer and MERN Stack Specialist. Passionate about building
                scalable web and mobile applications.
              </p>
              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-blue-400" />
                  <span>{contactDetails.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaPhone className="text-blue-400" />
                  <span>{contactDetails.phone}</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={link.href}
                      className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <FaEnvelope className="mr-2 text-blue-400" />
                    {contactDetails.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${contactDetails.phone}`}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <FaPhone className="mr-2 text-blue-400" />
                    {contactDetails.phone}
                  </a>
                </li>
                <li>
                  <div className="text-slate-400 text-sm flex items-start group">
                    <FaMapMarkerAlt className="mr-2 text-blue-400 mt-1 flex-shrink-0" />
                    <span>{contactDetails.address}</span>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Social Media Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">Connect With Me</h4>
              <p className="text-slate-400 text-sm mb-4">
                Follow me on social media and let's connect!
              </p>
              <div className="flex flex-wrap gap-3">
                {/* GitHub */}
                <motion.button
                  onClick={() => handleSocialClick(contactDetails.github)}
                  className="bg-slate-800 dark:bg-slate-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 text-slate-300 hover:text-white p-3 rounded-lg transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="GitHub"
                >
                  <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
                </motion.button>

                {/* LinkedIn */}
                <motion.button
                  onClick={() => handleSocialClick(contactDetails.linkedin)}
                  className="bg-slate-800 dark:bg-slate-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 text-slate-300 hover:text-white p-3 rounded-lg transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl group-hover:scale-110 transition-transform" />
                </motion.button>

                {/* Gmail */}
                <motion.button
                  onClick={handleEmailClick}
                  className="bg-slate-800 dark:bg-slate-700 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 text-slate-300 hover:text-white p-3 rounded-lg transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Email"
                >
                  <SiGmail className="text-xl group-hover:scale-110 transition-transform" />
                </motion.button>

                {/* WhatsApp */}
                <motion.button
                  onClick={handleWhatsAppClick}
                  className="bg-slate-800 dark:bg-slate-700 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 text-slate-300 hover:text-white p-3 rounded-lg transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="mt-12 pt-8 border-t border-slate-700 dark:border-slate-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400 text-sm text-center md:text-left">
                © {currentYear} <span className="text-blue-400 font-semibold">Gimani Rajarathna</span>. All rights reserved.
              </p>
              <p className="text-slate-400 text-sm text-center md:text-right">
                Made with <span className="text-red-500">❤</span> using React & Tailwind CSS
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

