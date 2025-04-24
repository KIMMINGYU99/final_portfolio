"use client";

import { motion } from "framer-motion";
import ProjectList from "./ProjectList";

const ProjectSection = () => {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Projects
          </h2>
          <ProjectList />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
