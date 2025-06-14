"use client";

import { TReviewMessage } from "@/types/review";
import { FaHeart } from "react-icons/fa";
import { useReviewStore } from "@/store/reviewStore";
import { likeReview } from "@/utils/api";

interface ReviewMessageCardProps {
  message: TReviewMessage;
  onLike?: (id: string) => void;
}

const ReviewMessageCard = ({ message, onLike }: ReviewMessageCardProps) => {
  const { handleLike } = useReviewStore();
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <p className="font-semibold text-black">{message.author}</p>
      </div>
      <p className="text-black mb-4">{message.message}</p>
      <div className="flex justify-between items-end mt-2">
        <span className="text-xs text-gray-500">
          {new Date(message.date).toLocaleString()}
        </span>
        <button
          onClick={() => {
            if (onLike) {
              onLike(message.id);
            } else {
              handleLike(message.id);
            }
            likeReview(message.id);
          }}
          className="flex items-center gap-1 text-gray-400 hover:text-red-500 transition-colors text-sm"
          aria-label="좋아요"
        >
          <FaHeart />
          <span>{message.likes}</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewMessageCard;
