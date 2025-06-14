import { AnimationVariants } from "./animation";

export type Skill = {
  id: number;
  name: string;
  created_at?: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  thumbnail: string;
  image?: string;
  github: string;
  demo: string;
  start_date: string;
  end_date: string;
  role: string;
  status: string;
  created_at: string;
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
