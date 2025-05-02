import { motion } from "framer-motion";
import { ProjectCardProps } from "@/types/project";
import Tag from "@/component/common/Tag";
import Card from "@/component/common/Card";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, index, variants }: ProjectCardProps) => {
  const { containerVariants, itemVariants, imageVariants, contentVariants } =
    variants;

  return (
    <motion.div
      custom={index}
      variants={itemVariants}
      className={`flex flex-col ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } gap-16 items-center`}
    >
      <div className="w-full md:w-1/2">
        <Card className="p-0 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            variants={imageVariants}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Card>
      </div>
      <div className="w-full md:w-1/2 space-y-6">
        <motion.h3
          className="text-2xl font-bold text-white"
          variants={contentVariants}
        >
          {project.title}
        </motion.h3>
        <motion.p
          className="text-gray-300 leading-relaxed"
          variants={contentVariants}
        >
          {project.description}
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-2"
          variants={containerVariants}
        >
          {project.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </motion.div>
        <motion.div className="flex gap-4" variants={containerVariants}>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
            variants={contentVariants}
          >
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
            variants={contentVariants}
          >
            <FaExternalLinkAlt className="text-xl" />
            <span>Demo</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
