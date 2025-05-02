import { AnimationVariants } from "./animation";

export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
  featured?: boolean;
  order?: number;
};

export type ProjectCardProps = {
  project: Project;
  index: number;
  variants: AnimationVariants;
};

export type ProjectListProps = {
  projects: Project[];
  className?: string;
};

export type ProjectFilterProps = {
  onFilterChange: (filter: string) => void;
  activeFilter: string;
};
