import { ReactNode } from "react";

export type TechInfo = {
  icon: ReactNode;
  url: string;
};

export type TechStackMap = {
  [key: string]: TechInfo;
};

export type SkillIconProps = {
  icon: ReactNode;
  name: string;
  url: string;
};

export type SkillGridProps = {
  title: string;
  skills: string[];
  techMap: TechStackMap;
};

export type TechStackSectionProps = {
  frontendSkills: string[];
  backendSkills: string[];
  techMap: TechStackMap;
};
