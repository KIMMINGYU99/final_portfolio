"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useProjectVariants } from "@/hooks/useProjectVariants";

const projects = [
  {
    title: "포트폴리오 웹사이트",
    description:
      "Next.js와 Tailwind CSS를 사용하여 만든 개인 포트폴리오 웹사이트입니다. 반응형 디자인과 애니메이션 효과를 적용했습니다.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/portfolio.png",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio-url.com",
  },
  {
    title: "쇼핑몰 웹사이트",
    description:
      "React와 Node.js를 사용하여 만든 쇼핑몰 웹사이트입니다. 사용자 인증, 상품 검색, 장바구니 기능을 구현했습니다.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: "/images/shopping.png",
    github: "https://github.com/yourusername/shopping-mall",
    demo: "https://your-shopping-mall-url.com",
  },
  {
    title: "투두 리스트 앱",
    description:
      "TypeScript와 React를 사용하여 만든 투두 리스트 애플리케이션입니다. 로컬 스토리지를 활용하여 데이터를 저장합니다.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/todo.png",
    github: "https://github.com/yourusername/todo-app",
    demo: "https://your-todo-app-url.com",
  },
];

const ProjectList = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const { containerVariants, itemVariants, imageVariants, contentVariants } =
    useProjectVariants();

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="space-y-64 py-32"
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          custom={index}
          variants={itemVariants}
          className={`flex flex-col ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } gap-16 items-center`}
        >
          <div className="w-full md:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-shadow duration-300 group">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                variants={imageVariants}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-8">
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
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-gray-900 text-gray-300 rounded-full text-sm hover:bg-gray-800 transition-colors"
                  variants={contentVariants}
                >
                  {tech}
                </motion.span>
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
      ))}
    </motion.div>
  );
};

export default ProjectList;
