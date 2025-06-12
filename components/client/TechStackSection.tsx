"use client";

import { TechStackSectionProps } from "@/types/tech";
import ColumnBox from "../server/common/ColumnBox";
import SkillGrid from "./SkillGrid";
import { techStackMap } from "@/data/techStack";

const TechStackSection = ({
  frontendSkills,
  backendSkills,
}: Omit<TechStackSectionProps, 'techMap'>) => {

  return (
    <ColumnBox className="w-2/3 space-y-6">
      <h4 className="text-xl font-semibold">기술스택</h4>
      <div className="grid grid-cols-2 gap-6">
        <SkillGrid title="Frontend" skills={frontendSkills} techMap={techStackMap} />
        <SkillGrid title="Backend" skills={backendSkills} techMap={techStackMap} />
      </div>
    </ColumnBox>
  );
};

export default TechStackSection;
