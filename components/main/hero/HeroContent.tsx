"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const HeroContent = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex gap-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex gap-4"
      >
        <button
          onClick={scrollToProjects}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          View Projects
        </button>
        <button className="px-6 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors duration-300">
          Contact Me
        </button>
      </motion.div>
      <div ref={projectsRef} />
    </div>
  );
};

export default HeroContent;
