export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type ProjectWithSkills = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  github: string;
  demo: string;
  start_date: string;
  end_date: string;
  role: string;
  status: string;
  created_at: string;
  project_skills: Array<{
    skills: {
      name: string;
    } | null;
  } | null>;
};

export type Database = {
  public: {
    Tables: {
      projects: {
        Row: {
          id: number;
          title: string;
          description: string;
          thumbnail: string;
          github: string;
          demo: string;
          start_date: string;
          end_date: string;
          role: string;
          status: "in_progress" | "completed";
          created_at: string;
        };
        Insert: {
          id?: number;
          title: string;
          description: string;
          thumbnail: string;
          github: string;
          demo: string;
          start_date: string;
          end_date: string;
          role: string;
          status: "in_progress" | "completed";
          created_at?: string;
        };
        Update: {
          id?: number;
          title?: string;
          description?: string;
          thumbnail?: string;
          github?: string;
          demo?: string;
          start_date?: string;
          end_date?: string;
          role?: string;
          status?: "in_progress" | "completed";
          created_at?: string;
        };
      };
      project_skills: {
        Row: {
          id: number;
          project_id: number;
          skill_id: number;
        };
        Insert: {
          id?: number;
          project_id: number;
          skill_id: number;
        };
        Update: {
          id?: number;
          project_id?: number;
          skill_id?: number;
        };
      };
      skills: {
        Row: {
          id: number;
          name: string;
          type: number;
        };
        Insert: {
          id?: number;
          name: string;
          type: number;
        };
        Update: {
          id?: number;
          name?: string;
          type?: number;
        };
      };
      skills_Type: {
        Row: {
          id: number;
          name: string;
        };
        Insert: {
          id?: number;
          name: string;
        };
        Update: {
          id?: number;
          name?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
};
