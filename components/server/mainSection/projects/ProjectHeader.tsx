type TProjectHeader = {
  title: string;
  description: string;
};

const ProjectHeader = ({ title, description }: TProjectHeader) => {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-white mb-4">{title}</h1>
      <p className="text-gray-400 whitespace-pre-line">{description}</p>
    </div>
  );
};

export default ProjectHeader;
