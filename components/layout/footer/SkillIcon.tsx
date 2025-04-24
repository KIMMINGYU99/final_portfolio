"use client";

import { SkillIconProps } from "../../../types/footerType";

const SkillIcon = ({ icon, name, url }: SkillIconProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform cursor-pointer"
    >
      <div className="text-3xl">{icon}</div>
      <span className="text-xs">{name}</span>
    </a>
  );
};

export default SkillIcon;
