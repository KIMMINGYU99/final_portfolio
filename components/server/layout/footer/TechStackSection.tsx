import { TechStackSectionProps } from "@/types/tech";
import ColumnBox from "../../common/ColumnBox";
import SkillGrid from "./SkillGrid";

const TechStackSection = ({
  frontendSkills,
  backendSkills,
  techMap,
}: TechStackSectionProps) => {
  return (
    <ColumnBox className="w-2/3 space-y-6">
      <h4 className="text-xl font-semibold">기술스택</h4>
      <div className="grid grid-cols-2 gap-6">
        <SkillGrid title="Frontend" skills={frontendSkills} techMap={techMap} />
        <SkillGrid title="Backend" skills={backendSkills} techMap={techMap} />
      </div>
    </ColumnBox>
  );
};

export default TechStackSection;
