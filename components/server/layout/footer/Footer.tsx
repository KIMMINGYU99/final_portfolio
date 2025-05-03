"use client";

import ProfileSection from "./ProfileSection";
import TechStackSection from "./TechStackSection";
import { frontendTechs, backendTechs } from "@/data/techStack";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="mt-12 bg-black backdrop-blur-sm rounded-lg p-8 shadow-lg text-gray-100 border border-gray-800">
          <div className="flex flex-col md:flex-row gap-8">
            <ProfileSection />
            <TechStackSection
              frontendTechs={frontendTechs}
              backendTechs={backendTechs}
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
