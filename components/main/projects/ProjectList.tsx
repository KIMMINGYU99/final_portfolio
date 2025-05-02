"use client";

import { motion, useInView } from "framer-motion";
import { useRef, memo } from "react";
import { useProjectVariants } from "@/hooks/useProjectVariants";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/common/ProjectCard";
import { AnimationVariants } from "@/types/animation";
import { Project } from "@/types/project";

const ProjectList = memo(() => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const variants = useProjectVariants() as AnimationVariants;

  return (
    <motion.div
      ref={containerRef}
      variants={variants.containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="space-y-64 py-32"
      role="list"
    >
      {(projects as Project[]).map((project, index) => (
        <ProjectCard
          key={project.id || project.title}
          project={project}
          index={index}
          variants={variants}
        />
      ))}
    </motion.div>
  );
});

ProjectList.displayName = "ProjectList";

export default ProjectList;
