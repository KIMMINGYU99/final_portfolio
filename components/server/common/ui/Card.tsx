"use client";

import { CardProps } from "@/types/ui";
import { memo } from "react";

const Card = memo(({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`relative rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-shadow duration-300 group ${className}`}
      role="region"
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

export default Card;
