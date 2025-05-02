"use client";

import { ButtonProps } from "@/types/base";
import { motion } from "framer-motion";

const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
  type = "button",
}: ButtonProps) => {
  const baseStyles = "px-6 py-3 rounded-lg transition-colors duration-300";
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "bg-gray-800 text-white border border-gray-700 hover:bg-gray-700",
    outline: "border-2 border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
