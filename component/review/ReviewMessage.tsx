"use client";

import { formatDate } from "@/utils/date";
import { ReviewMessageProps } from "@/types/review";

const ReviewMessage = ({ name, message, date }: ReviewMessageProps) => {
  return (
    <article className="flex items-start space-x-2">
      <figure className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
        <span className="text-sm font-bold">{name.charAt(0)}</span>
      </figure>
      <div className="flex-1">
        <div className="bg-gray-100 rounded-lg p-3">
          <h3 className="font-bold text-sm">{name}</h3>
          <p className="text-gray-700">{message}</p>
          <time className="text-xs text-gray-500 mt-1">{formatDate(date)}</time>
        </div>
      </div>
    </article>
  );
};

export default ReviewMessage;
