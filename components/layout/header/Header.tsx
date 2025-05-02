"use client";

import RowBox from "@/components/common/RowBox";
import Link from "next/link";
import { useScroll } from "@/hooks/useScroll";

const Header = () => {
  const isScrolled = useScroll(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white shadow-md z-[1000] transition-all duration-300 ${
        isScrolled ? "bg-gray-900/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <RowBox className="justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            PORTFOLIO
          </Link>
          <RowBox className="space-x-6">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-600 hover:text-gray-900"
            >
              PROJECTS
            </button>
          </RowBox>
        </RowBox>
      </div>
    </header>
  );
};

export default Header;
