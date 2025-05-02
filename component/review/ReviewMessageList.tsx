"use client";

import ReviewMessage from "./ReviewMessage";
import { ReviewMessageListProps } from "@/types/review";

const ReviewMessageList = ({ messages }: ReviewMessageListProps) => {
  return (
    <section className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message, index) => (
        <ReviewMessage
          key={index}
          name={message.name}
          message={message.message}
          date={message.date}
        />
      ))}
    </section>
  );
};

export default ReviewMessageList;
