"use client";

import { TReviewMessage } from "@/types/review";
import ReviewMessageCard from "./ReviewMessageCard";

type ReviewMessageListProps = {
  messages: TReviewMessage[];
  onLike?: (id: string) => void;
};

const ReviewMessageList = ({ messages, onLike }: ReviewMessageListProps) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <ReviewMessageCard key={message.id} message={message} onLike={onLike} />
      ))}
    </div>
  );
};

export default ReviewMessageList;
