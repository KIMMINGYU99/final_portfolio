"use client";

import { SkillGridProps } from "@/types/tech";
import SkillIcon from "./SkillIcon";

const SkillGrid = ({ title, skills, techMap }: SkillGridProps) => {

  return (
    <div className="bg-gray-990 border border-gray-800 rounded-md p-4">
      <h5 className="font-semibold mb-4">{title}</h5>
      <div className="grid grid-cols-3 gap-6">
        {skills.map((skillName) => {
          const tech = techMap[skillName];
          if (!tech) return null;

          return (
            <SkillIcon
              key={skillName}
              icon={tech.icon}
              name={skillName}
              url={tech.url}
            />
          );
        }).filter(Boolean)}
      </div>
    </div>
  );
};

export default SkillGrid;
