"use client";

import Section from "@/components/server/common/Section";
import ProjectList from "./ProjectList";

const ProjectSection = () => {
  return (
    <Section id="projects" title="Projects" className="bg-black text-white">
      <ProjectList />
    </Section>
  );
};

export default ProjectSection;
