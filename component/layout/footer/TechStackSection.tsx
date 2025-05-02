import ColumnBox from "../../common/ColumnBox";
import SkillGrid from "./SkillGrid";
import { TechStackSectionProps } from "../../../types/footerType";

const TechStackSection = ({
  frontendTechs,
  backendTechs,
}: TechStackSectionProps) => {
  return (
    <ColumnBox className="w-2/3 space-y-6">
      <h4 className="text-xl font-semibold">기술스택</h4>
      <div className="grid grid-cols-2 gap-6">
        <SkillGrid title="Frontend" techs={frontendTechs} />
        <SkillGrid title="Backend" techs={backendTechs} />
      </div>
    </ColumnBox>
  );
};

export default TechStackSection;
