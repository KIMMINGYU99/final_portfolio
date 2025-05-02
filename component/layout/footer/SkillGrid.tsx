import { SkillGridProps } from "../../../types/footerType";
import SkillIcon from "./SkillIcon";

const SkillGrid = ({ title, techs }: SkillGridProps) => {
  return (
    <div className="bg-gray-990 border border-gray-800 rounded-md p-4">
      <h5 className="font-semibold mb-4">{title}</h5>
      <div className="grid grid-cols-3 gap-6">
        {techs.map((tech, index) => (
          <SkillIcon
            key={index}
            icon={tech.icon}
            name={tech.name}
            url={tech.url}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillGrid;
