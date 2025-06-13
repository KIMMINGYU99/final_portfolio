"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { ProjectCardProps } from "@/types/project";
import { useRouter } from "next/navigation";

const ProjectCard = ({ project }: ProjectCardProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/project/${project.id.toString()}`);
      }}
      className="bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800 overflow-hidden hover:border-gray-700 transition-all duration-300 h-[500px] flex flex-col z-[1]"
    >
      <div className="relative h-3/5 w-full">
        <Image
          src={
            project.thumbnail
              ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/project/${project.thumbnail}`
              : `/images/${project.thumbnail}`
          }
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 flex flex-col justify-between h-2/5 gap-4">
        <h3 className="text-2xl font-bold line-clamp-1 text-white">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-2">
          {(project.technologies ?? []).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <FaExternalLinkAlt />
              <span>Demo</span>
            </a>
          </div>
          <span>{project.status}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
