"use client";

import { useState } from "react";
import { useReview } from "@/hooks/useReview";
import Card from "@/components/server/common/Card";
import { motion } from "framer-motion";
import { FaHeart, FaTrash } from "react-icons/fa";

const ReviewList = () => {
  const { messages, deleteMessage, toggleLike } = useReview();
  const [visibleCount, setVisibleCount] = useState(9);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {messages.slice(0, visibleCount).map((message, index) => (
        <motion.div
          key={message.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: (index % 9) * 0.1,
          }}
        >
          <Card className="p-6 bg-white border border-gray-300 hover:border-blue-500 transition-colors duration-300 relative">
            <button
              onClick={() => deleteMessage(message.id)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
              aria-label="삭제"
            >
              <FaTrash />
            </button>
            <div className="aspect-square flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold mb-2 text-black">
                  {message.name}
                </h2>
                <p className="text-gray-700">{message.message}</p>
              </div>
              <div className="flex justify-between items-center">
                <time className="text-sm text-gray-500">
                  {formatDate(message.date)}
                </time>
                <button
                  onClick={() => toggleLike(message.id)}
                  className="flex items-center gap-1 text-gray-400 hover:text-red-500 transition-colors"
                  aria-label="좋아요"
                >
                  <FaHeart />
                  <span className="text-sm">{message.likes}</span>
                </button>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
      {visibleCount < messages.length && (
        <footer className="text-center mt-12 col-span-full">
          <button
            onClick={loadMore}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            더보기
          </button>
        </footer>
      )}
    </article>
  );
};

export default ReviewList;
