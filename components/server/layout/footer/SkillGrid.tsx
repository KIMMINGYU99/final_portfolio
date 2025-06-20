import { SkillGridProps } from "@/types/tech";
import SkillIcon from "./SkillIcon";

const SkillGrid = ({ title, skills, techMap }: SkillGridProps) => {
  console.log(`${title} skills:`, skills);
  console.log(`${title} techMap:`, techMap);
  console.log(`${title} techMap keys:`, Object.keys(techMap));
  console.log(`${title} techMap type:`, typeof techMap);

  return (
    <div className="bg-gray-990 border border-gray-800 rounded-md p-4">
      <h5 className="font-semibold mb-4">{title}</h5>
      <div className="grid grid-cols-3 gap-6">
        {skills.map((skillName) => {
          console.log(`Processing skill: ${skillName}`);
          const tech = techMap[skillName];
          console.log(`Tech found for ${skillName}:`, tech);
          
          if (!tech) {
            console.error(`Tech not found for skill: ${skillName}`);
            return null;
          }

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
