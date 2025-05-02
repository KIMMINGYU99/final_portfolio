"use client";

import { ReviewMessage } from "@/types/review";

interface ReviewMessageListProps {
  messages: ReviewMessage[];
}

const ReviewMessageList = ({ messages }: ReviewMessageListProps) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <p className="font-semibold text-black">{message.name}</p>
            <p className="text-sm text-gray-500">
              {new Date(message.timestamp).toLocaleString()}
            </p>
          </div>
          <p className="text-black">{message.message}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewMessageList;
