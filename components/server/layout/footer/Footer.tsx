"use client";

import { useEffect, useState } from "react";
import ProfileSection from "./ProfileSection";
import TechStackSection from "@/components/client/TechStackSection";

import { getSkillTypes, normalizeSkillName } from "@/utils/api";

const Footer = () => {
  const [frontendSkills, setFrontendSkills] = useState<string[]>([]);
  const [backendSkills, setBackendSkills] = useState<string[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const [frontend, backend] = await Promise.all([
          getSkillTypes("frontend"),
          getSkillTypes("backend"),
        ]);
        setFrontendSkills(frontend.map((skill) => normalizeSkillName(skill.name)));
        setBackendSkills(backend.map((skill) => normalizeSkillName(skill.name)));
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);


  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="mt-12 bg-black backdrop-blur-sm rounded-lg p-8 shadow-lg text-gray-100 border border-gray-800">
          <div className="flex flex-col md:flex-row gap-8">
            <ProfileSection />
            <TechStackSection
              frontendSkills={frontendSkills}
              backendSkills={backendSkills}
            />
          </div>
        </div>

        {/* 하단 저작권 */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} 김민규. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
