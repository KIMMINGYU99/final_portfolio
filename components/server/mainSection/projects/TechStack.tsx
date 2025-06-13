type TTechStack = {
  technologies: string[];
};

const TechStack = ({ technologies }: TTechStack) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-white mb-3">기술 스택</h2>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
