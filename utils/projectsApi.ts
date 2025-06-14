import { v4 as uuidv4 } from "uuid";
import { supabase } from "@/utils/supabase/client";
import { Project } from "@/types/project";
import { ProjectWithSkills } from "@/types/supabase";

// 프로젝트 관련 API

export const getProjects = async (): Promise<Project[]> => {
  const { data: projectsWithSkills, error } = await supabase
    .from("projects")
    .select(
      `
      *,
      project_skills (skills (name))
    `
    )
    .order("id", { ascending: true });

  if (error) throw error;

  const projects = (projectsWithSkills as ProjectWithSkills[] | null)?.map(
    (project) => ({
      id: project.id,
      title: project.title,
      description: project.description,
      thumbnail: project.thumbnail,
      github: project.github,
      demo: project.demo,
      start_date: project.start_date,
      end_date: project.end_date,
      role: project.role,
      status: project.status,
      created_at: project.created_at,
      technologies:
        project.project_skills
          ?.map((ps) => ps?.skills?.name)
          .filter(
            (name): name is string => name !== null && name !== undefined,
          ) || [],
    }),
  ) || [];

  return projects;
};

export const getProjectById = async (id: string): Promise<Project | null> => {
  const { data, error } = await supabase
    .from("projects")
    .select(
      `
      *,
      project_skills (skills (name))
    `
    )
    .eq("id", id)
    .single();

  if (error) {
    if ((error as any).code === "PGRST116") return null;
    throw error;
  }
  if (!data) return null;

  const project = data as ProjectWithSkills;
  return {
    id: project.id,
    title: project.title,
    description: project.description,
    thumbnail: project.thumbnail,
    github: project.github,
    demo: project.demo,
    start_date: project.start_date,
    end_date: project.end_date,
    role: project.role,
    status: project.status,
    created_at: project.created_at,
    technologies:
      project.project_skills
        ?.map((ps) => ps?.skills?.name)
        .filter(
          (name): name is string => name !== null && name !== undefined,
        ) || [],
  };
};

type AddProjectInput = Omit<Project, "id"> & {
  technologies: string[];
};

export const addProject = async (project: AddProjectInput) => {
  const { data: projectData, error: projectError } = await supabase
    .from("projects")
    .insert([
      {
        title: project.title,
        description: project.description,
        thumbnail: project.thumbnail,
        github: project.github,
        demo: project.demo,
        start_date: project.start_date,
        end_date: project.end_date,
        role: project.role,
        status: project.status,
        created_at: project.created_at,
      },
    ])
    .select()
    .single();

  if (projectError) throw projectError;
  if (!projectData) throw new Error("프로젝트 생성 실패");

  // 기술 스택 추가
  const projectSkillsPromises = project.technologies.map(async (tech) => {
    const { data: existingSkill } = await supabase
      .from("skills")
      .select("id")
      .eq("name", tech)
      .single();

    let skillId;

    if (existingSkill) {
      skillId = existingSkill.id;
    } else {
      const { data: newSkill, error: skillError } = await supabase
        .from("skills")
        .insert([{ name: tech }])
        .select()
        .single();

      if (skillError) throw skillError;
      if (!newSkill) throw new Error("기술 생성 실패");

      skillId = newSkill.id;
    }

    const { error: linkError } = await supabase.from("project_skills").insert([
      {
        project_id: projectData.id,
        skill_id: skillId,
      },
    ]);

    if (linkError) throw linkError;
  });

  await Promise.all(projectSkillsPromises);

  return projectData;
};

export const uploadProjectImage = async (file: File) => {
  try {
    const fileExt = file.name.split(".").pop();
    const fileName = `${uuidv4()}.${fileExt}`;
    const filePath = `project-thumbnails/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("images")
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const {
      data: { publicUrl },
    } = supabase.storage.from("images").getPublicUrl(filePath);

    return publicUrl;
  } catch (error) {
    console.error("이미지 업로드 에러:", error);
    throw error;
  }
};
