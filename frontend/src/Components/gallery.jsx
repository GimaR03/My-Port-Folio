import React from "react";
import { motion } from "framer-motion";
import group1Image from "./images/group1.jpg"; // Import the image

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "2nd Year ITP Group",
      description: "2nd Year 2nd Semester ITP Module Group Members   ",
      image: group1Image, // Use the imported image
      alt: "ITP Module Group Photo"
    },
    {
      id: 2,
      title: "Project Presentation",
      description: "ITP module project demonstration",
      image: "",
      alt: "Image 2"
    },
    {
      id: 3,
      title: "Lab Session",
      description: "Practical programming session",
      image: "",
      alt: "Image 3"
    },
    {
      id: 4,
      title: "Group Discussion",
      description: "Team collaboration and planning",
      image: "",
      alt: "Image 4"
    },
    {
      id: 5,
      title: "Code Review",
      description: "Peer programming and code analysis",
      image: "",
      alt: "Image 5"
    },
    {
      id: 6,
      title: "Final Project",
      description: "Completed ITP module project",
      image: "",
      alt: "Image 6"
    }
  ];

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
          Gallery
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <motion.div 
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-48 bg-gray-300 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500 dark:text-gray-400">Image {item.id}</span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Gallery;