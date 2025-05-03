"use client";

import { FaArrowUp } from "react-icons/fa";
import { useScrollToTop } from "@/hooks/useScroll";

const ScrollToTop = () => {
  const { isVisible, scrollToTop } = useScrollToTop();

  return (
    <button
      onClick={scrollToTop}
      className={`p-3 bg-white text-gray-800 rounded-full shadow-xl hover:bg-gray-100 hover:text-gray-900 transition-all duration-300 border border-gray-200 w-12 h-12 flex items-center justify-center ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
};

export default ScrollToTop;
