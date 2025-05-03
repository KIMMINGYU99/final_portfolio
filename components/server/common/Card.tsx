"use client";

import { CardProps } from "@/types/ui";

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`relative rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-shadow duration-300 group ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
