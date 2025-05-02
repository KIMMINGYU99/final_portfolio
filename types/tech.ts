import { ReactNode } from "react";

export type TechStackItem = {
  icon: ReactNode;
  name: string;
  url: string;
};

export type SkillIconProps = {
  icon: ReactNode;
  name: string;
  url: string;
};

export type SkillGridProps = {
  title: string;
  techs: TechStackItem[];
};

export type TechStackSectionProps = {
  frontendTechs: TechStackItem[];
  backendTechs: TechStackItem[];
};
