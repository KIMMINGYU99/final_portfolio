import ProjectDetail from "@/components/server/mainSection/projects/ProjectDetail";

const ProjectDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return <ProjectDetail id={id} />;
};

export default ProjectDetailPage;
