"use client";

import { Project } from "@/types/project";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useEffect, useState } from "react";
import { getProjectById } from "@/utils/api";
import ProjectThumbnail from "./ProjectThumbnail";
import ProjectHeader from "./ProjectHeader";
import ProjectInfo from "./ProjectInfo";
import TechStack from "./TechStack";
import ProjectActions from "./ProjectActions";

type ProjectDetailProps = {
  id: string;
};

const ProjectDetail = ({ id }: ProjectDetailProps) => {
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setIsLoading(true);
        const project = await getProjectById(id);
        setProject(project);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <AiOutlineLoading3Quarters className="w-8 h-8 text-white animate-spin" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-400">
        프로젝트 정보가 없습니다
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mt-16 bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800 overflow-hidden">
        <ProjectThumbnail thumbnail={project.thumbnail} title={project.title} />
        <div className="p-8">
          <ProjectHeader
            title={project.title}
            description={project.description}
          />

          <TechStack technologies={project.technologies} />
          
          <ProjectInfo
            role={project.role}
            status={project.status}
            startDate={project.start_date}
            endDate={project.end_date}
          />

          <ProjectActions github={project.github} demo={project.demo} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
