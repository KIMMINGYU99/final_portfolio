"use client";

import { motion } from "framer-motion";
import { TagProps } from "@/types/base";

const Tag = ({ children, className = "" }: TagProps) => {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={`px-3 py-1 bg-gray-900 text-gray-300 rounded-full text-sm hover:bg-gray-800 transition-colors ${className}`}
    >
      {children}
    </motion.span>
  );
};

export default Tag;
