import { motion } from "framer-motion";
import { ProjectCardProps } from "@/types/project";
import Tag from "@/components/server/common/Tag";
import Card from "@/components/server/common/Card";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, index, variants }: ProjectCardProps) => {
  const { containerVariants, itemVariants, imageVariants, contentVariants } =
    variants;

  return (
    <motion.div custom={index} variants={itemVariants} className="w-full">
      <Card className="p-6 border border-gray-700 hover:border-blue-500 transition-colors duration-300">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-video">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                variants={imageVariants}
              />
            </div>
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
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
