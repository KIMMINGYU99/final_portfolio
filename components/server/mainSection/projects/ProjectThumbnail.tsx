import Image from "next/image";

type TProjectThumbnail = {
  thumbnail: string | null;
  title: string;
};

const ProjectThumbnail = ({ thumbnail, title }: TProjectThumbnail) => {
  return (
    <div className="relative h-[400px] w-full">
      <Image
        src={
          thumbnail
            ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/project/${thumbnail}`
            : `/images/default-project.jpg`
        }
        alt={title}
        fill
        className="object-cover"
        sizes="100vw"
      />
    </div>
  );
};

export default ProjectThumbnail;
