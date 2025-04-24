export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
};

export type ProjectCardProps = {
  project: Project;
};
