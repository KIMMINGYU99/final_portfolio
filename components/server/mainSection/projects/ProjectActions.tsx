import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type TProjectActions = {
  github: string;
  demo?: string | null;
};

const ProjectActions = ({ github, demo }: TProjectActions) => {
  return (
    <div className="flex gap-4">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
      >
        <FaGithub className="text-white" />
        <span className="text-white">GitHub</span>
      </a>
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
        >
          <FaExternalLinkAlt className="text-white" />
          <span className="text-white">Demo</span>
        </a>
      )}
    </div>
  );
};

export default ProjectActions;
