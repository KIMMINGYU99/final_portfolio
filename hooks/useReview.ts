import { useState } from "react";
import { ReviewMessage } from "@/types/review";

export const useReview = () => {
  const [messages, setMessages] = useState<ReviewMessage[]>([
    {
      id: "1",
      name: "김민규",
      message: "안녕하세요! 리뷰 테스트입니다.",
      date: new Date(),
      likes: 0,
    },
    {
      id: "2",
      name: "김민규",
      message: "안녕하세요! 리뷰 테스트입니다.",
      date: new Date(),
      likes: 0,
    },
    {
      id: "3",
      name: "김민규",
      message: "안녕하세요! 리뷰 테스트입니다.",
      date: new Date(),
      likes: 0,
    },
    {
      id: "4",
      name: "김민규",
      message: "안녕하세요! 리뷰 테스트입니다.",
      date: new Date(),
      likes: 0,
    },
    {
      id: "5",
      name: "김민규",
      message: "안녕하세요! 리뷰 테스트입니다.",
      date: new Date(),
      likes: 0,
    },
    {
      id: "6",
      name: "김민규",
      message: "안녕하세요! 리뷰 테스트입니다.",
      date: new Date(),
      likes: 0,
    },
    {
      id: "7",
      name: "김민규",
      message: "안녕하세요! 리뷰 테스트입니다.",
      date: new Date(),
      likes: 0,
    },
    {
      id: "8",
      name: "김민규",
      message: "안녕하세요! 리뷰 테스트입니다.",
      date: new Date(),
      likes: 0,
    },
    {
      id: "9",
      name: "김민규",
      message: "안녕하세요! 리뷰 테스트입니다.",
      date: new Date(),
      likes: 0,
    },
    {
      id: "10",
      name: "김민규",
      message: "안녕하세요! 리뷰 테스트입니다.",
      date: new Date(),
      likes: 0,
    },
  ]);

  const addMessage = (name: string, message: string) => {
    const newMessage: ReviewMessage = {
      id: Date.now().toString(),
      name,
      message,
      date: new Date(),
      likes: 0,
    };
    setMessages([newMessage, ...messages]);
  };

  const deleteMessage = (id: string) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  const toggleLike = (id: string) => {
    setMessages(
      messages.map((message) =>
        message.id === id ? { ...message, likes: message.likes + 1 } : message
      )
    );
  };

  return {
    messages,
    addMessage,
    deleteMessage,
    toggleLike,
  };
};
