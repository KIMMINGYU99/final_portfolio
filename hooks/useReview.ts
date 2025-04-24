import { useState } from "react";
import { ReviewMessage } from "@/types/review";

export const useReview = () => {
  const [messages, setMessages] = useState<ReviewMessage[]>([
    {
      name: "Anonymous",
      message: "안녕하세요! 리뷰 테스트입니다.",
      date: new Date(),
    },
  ]);

  const addMessage = (name: string, message: string) => {
    setMessages([
      ...messages,
      {
        name,
        message,
        date: new Date(),
      },
    ]);
  };

  return {
    messages,
    addMessage,
  };
};
