"use client";

import { FaComment } from "react-icons/fa";
import { TReviewButtonProps as ReviewButtonProps } from "@/types/review";

const ReviewButton = ({ onClick }: ReviewButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="p-3 bg-white text-gray-800 rounded-full shadow-xl hover:bg-gray-100 hover:text-gray-900 transition-all duration-300 border border-gray-200 w-12 h-12 flex items-center justify-center"
      aria-label="Open review"
    >
      <FaComment className="text-xl" />
    </button>
  );
};

export default ReviewButton;
