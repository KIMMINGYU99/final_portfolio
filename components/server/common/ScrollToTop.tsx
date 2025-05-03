"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-[1000]">
      <button
        onClick={scrollToProjects}
        className="w-12 h-12 rounded-full bg-gray-900/90 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
      >
        <span className="text-sm">Projects</span>
      </button>
      <button
        onClick={scrollToTop}
        className="w-12 h-12 rounded-full bg-gray-900/90 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ScrollToTop;
