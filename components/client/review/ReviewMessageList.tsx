"use client";

import { ReviewMessage } from "@/types/review";
import ReviewMessageCard from "./ReviewMessageCard";

type ReviewMessageListProps = {
  messages: ReviewMessage[];
};

const ReviewMessageList = ({ messages }: ReviewMessageListProps) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message, index) => (
        <ReviewMessageCard key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ReviewMessageList;
