"use client";

import RowBox from "@/components/server/common/RowBox";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className={`py-4 fixed top-0 left-0 right-0 z-[1000] transition-all duration-300`}
    >
      <div className="container mx-auto px-4 py-8">
        <RowBox className="justify-between items-center">
          <Link href="/" className="text-4xl font-bold text-white">
            KIMMINGYU
          </Link>
          <RowBox className="space-x-8">
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
