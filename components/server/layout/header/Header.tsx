"use client";

import { useState, useEffect, useRef } from "react";
import RowBox from "@/components/server/common/RowBox";
import Link from "next/link";

const Header = () => {
  const [hideHeader, setHideHeader] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // 아래로 스크롤
        setHideHeader(true);
      } else {
        // 위로 스크롤
        setHideHeader(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`py-4 fixed top-0 left-0 right-0 z-[1000] transition-transform duration-300 ${
        hideHeader ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container mx-auto px-4 py-8">
        <RowBox className="justify-between items-center">
          <Link href="/" className="text-4xl font-bold text-white">
            KIMMINGYU
          </Link>
          <RowBox className="space-x-8">
            <Link
              href="/addProject"
              className="text-2xl text-white hover:text-gray-300 transition-colors"
            >
              AddProject
            </Link>
            <Link
              href="/review"
              className="text-2xl text-white hover:text-gray-300 transition-colors"
            >
              Review
            </Link>
          </RowBox>
        </RowBox>
      </div>
    </header>
  );
};

export default Header;
