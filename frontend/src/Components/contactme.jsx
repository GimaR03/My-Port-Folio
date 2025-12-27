import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp, FaTelegram, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  // EmailJS Configuration
  // Replace these with your EmailJS credentials
  const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Get from EmailJS dashboard
  const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Get from EmailJS dashboard
  const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Get from EmailJS dashboard

  const contactDetails = {
    email: "gimarajarathna@gmail.com",
    phone: "070-219-6195",
    address: "160, Kondadeniya, Katugastota",
    github: "https://github.com/GimaR03",
    linkedin: "https://www.linkedin.com/in/gimani-rajarathna-032b12312",
    whatsapp: "https://wa.me/94702196195",
    telegram: "https://t.me/yourusername" // Add your Telegram if available
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactDetails.email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${contactDetails.phone}`;
  };

  const handleWhatsAppClick = () => {
    window.open(contactDetails.whatsapp, '_blank');
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard!`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear status message when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: "", message: "" });

    // Validate EmailJS credentials
    if (
      EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
      EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
      EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY"
    ) {
      setSubmitStatus({
        type: "error",
        message: "EmailJS is not configured. Please set up your EmailJS credentials.",
      });
      setIsLoading(false);
      return;
    }

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "Contact Form Submission",
          message: formData.message,
          to_email: contactDetails.email,
        },
        EMAILJS_PUBLIC_KEY
      );

      if (result.text === "OK") {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again or contact me directly via email.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 text-slate-800 dark:text-slate-200 px-4 sm:px-6 py-12 transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 
          bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent 
          dark:from-blue-400 dark:to-cyan-400">
            Get In Touch
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Feel free to reach out to me for collaborations, opportunities, or just a friendly chat!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Details Card */}
          <motion.div 
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8 border border-slate-200 dark:border-slate-700"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <FaMapMarkerAlt className="mr-3 text-blue-600 dark:text-blue-400" />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent 
              dark:from-blue-400 dark:to-cyan-400">Contact Information</span>
            </h2>
            
            <div className="space-y-6">
              {/* Email */}
              <motion.div 
                className="flex items-start space-x-4 p-4 rounded-xl bg-blue-50 dark:bg-slate-700/50 hover:bg-blue-100 dark:hover:bg-slate-700 transition-colors duration-300 cursor-pointer group"
                whileHover={{ x: 5 }}
                onClick={handleEmailClick}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 dark:bg-slate-700 flex items-center justify-center">
                  <FaEnvelope className="text-white dark:text-slate-200 text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Email Address</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-slate-600 dark:text-slate-400">{contactDetails.email}</p>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyToClipboard(contactDetails.email);
                      }}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div 
                className="flex items-start space-x-4 p-4 rounded-xl bg-green-50 dark:bg-slate-700/50 hover:bg-green-100 dark:hover:bg-slate-700 transition-colors duration-300 cursor-pointer group"
                whileHover={{ x: 5 }}
                onClick={handlePhoneClick}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 dark:bg-slate-700 flex items-center justify-center">
                  <FaPhone className="text-white dark:text-slate-200 text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Phone Number</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-slate-600 dark:text-slate-400">{contactDetails.phone}</p>
                    <div className="flex space-x-2">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyToClipboard(contactDetails.phone);
                        }}
                        className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium"
                      >
                        Copy
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleWhatsAppClick();
                        }}
                        className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium"
                      >
                        WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div 
                className="flex items-start space-x-4 p-4 rounded-xl bg-purple-50 dark:bg-slate-700/50 hover:bg-purple-100 dark:hover:bg-slate-700 transition-colors duration-300 cursor-pointer group"
                whileHover={{ x: 5 }}
                onClick={() => handleCopyToClipboard(contactDetails.address)}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 dark:bg-slate-700 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white dark:text-slate-200 text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Address</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-slate-600 dark:text-slate-400">{contactDetails.address}</p>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyToClipboard(contactDetails.address);
                      }}
                      className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Media Links */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-6 
              bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent 
              dark:from-blue-400 dark:to-cyan-400">Connect With Me</h3>
              <div className="flex flex-wrap gap-4">
                {/* GitHub */}
                <motion.button
                  onClick={() => handleSocialClick(contactDetails.github)}
                  className="flex items-center space-x-3 px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 dark:from-blue-400 dark:to-cyan-400 dark:hover:from-blue-500 dark:hover:to-cyan-500 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="text-xl" />
                  <span className="font-medium">GitHub</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                </motion.button>

                {/* Gmail */}
                <motion.button
                  onClick={handleEmailClick}
                  className="flex items-center space-x-3 px-5 py-3 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-lg border-2 border-slate-500 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SiGmail className="text-xl text-slate-900 dark:text-white" />
                  <span className="font-medium">Gmail</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                </motion.button>

                {/* LinkedIn */}
                <motion.button
                  onClick={() => handleSocialClick(contactDetails.linkedin)}
                  className="flex items-center space-x-3 px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 dark:from-blue-400 dark:to-cyan-400 dark:hover:from-blue-500 dark:hover:to-cyan-500 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin className="text-xl" />
                  <span className="font-medium">LinkedIn</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8 border border-slate-200 dark:border-slate-700"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-8 
            bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent 
            dark:from-blue-400 dark:to-cyan-400">Send Me a Message</h2>
            
            <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
              {/* Success/Error Message */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl flex items-center space-x-3 ${
                    submitStatus.type === "success"
                      ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                      : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                  ) : (
                    <FaExclamationCircle className="text-red-500 text-xl flex-shrink-0" />
                  )}
                  <p
                    className={`text-sm font-medium ${
                      submitStatus.type === "success"
                        ? "text-green-700 dark:text-green-300"
                        : "text-red-700 dark:text-red-300"
                    }`}
                  >
                    {submitStatus.message}
                  </p>
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                    Your Name *
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 transition-all duration-300 outline-none"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                    Your Email *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 transition-all duration-300 outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 transition-all duration-300 outline-none"
                  placeholder="Project collaboration or job opportunity"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                  Your Message *
                </label>
                <textarea 
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 transition-all duration-300 resize-none outline-none"
                  placeholder="Hello, I would like to discuss..."
                ></textarea>
              </div>
              
              {/* Send Message Button - Inside the white box */}
              <motion.button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 dark:from-blue-400 dark:to-cyan-400 dark:hover:from-blue-500 dark:hover:to-cyan-500 text-white font-bold text-lg py-5 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
                whileHover={isLoading ? {} : { scale: 1.02 }}
                whileTap={isLoading ? {} : { scale: 0.98 }}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Response Time - Centered below sections */}
        <div className="max-w-6xl mx-auto mt-8 flex items-center justify-center">
          <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
            <FaEnvelope className="text-blue-500" />
            <span>Response time: Usually within 24 hours</span>
          </div>
        </div>

        {/* Quick Contact Bar */}
        <motion.div 
          className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 rounded-2xl p-6 text-white shadow-xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-xl font-bold mb-2 text-white">Ready to work together?</h3>
              <p className="text-white/90">Let's discuss your project ideas and opportunities</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <motion.button
                onClick={handleEmailClick}
                className="px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-lg border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="inline mr-2 text-slate-900 dark:text-white" />
                Email Me
              </motion.button>
              <motion.button
                onClick={handleWhatsAppClick}
                className="px-6 py-3 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="inline mr-2 text-white" />
                WhatsApp
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactMe;