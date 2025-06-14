"use client";

import { useEffect } from "react";
import Card from "@/components/server/common/Card";
import { motion } from "framer-motion";
import { FaHeart, FaTrash } from "react-icons/fa";
import { supabase, deleteReview, getReview, likeReview } from "@/utils";
import { TReviewMessage } from "@/types/review";
import { useReviewStore } from "@/store/reviewStore";

const ReviewList = () => {
  const { messages, page, setMessages, setPage, handleDelete, handleLike } =
    useReviewStore();

  useEffect(() => {
    const channel = supabase
      .channel("review_messages_changes")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "review_messages" },
        ({ new: row }) => {
          const newMsg = row as TReviewMessage;
          setMessages((prev) => {
            const base = prev ?? { data: [], total: 0 };
            return {
              ...base,
              data: [newMsg, ...base.data],
              total: (base.total ?? base.data.length) + 1,
            };
          });
        }
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "review_messages" },
        ({ new: row }) => {
          const updated = row as TReviewMessage;
          setMessages((prev) => {
            if (!prev) return { data: [updated], total: 1 };
            return {
              ...prev,
              data: prev.data.map((msg) => (msg.id === updated.id ? updated : msg)),
            };
          });
        }
      )
      .on(
        "postgres_changes",
        { event: "DELETE", schema: "public", table: "review_messages" },
        ({ old: row }) => {
          const deletedId = (row as { id: string }).id;
          setMessages((prev) => {
            if (!prev) return { data: [], total: 0 };
            return {
              ...prev,
              data: prev.data.filter((msg) => msg.id !== deletedId),
              total: (prev.total ?? prev.data.length) - 1,
            };
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [setMessages]);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const review = await getReview(page);
        setMessages((prev) =>
          page === 0
            ? review
            : {
                data: [...(prev?.data || []), ...review.data],
                hasMore: review.hasMore,
              }
        );
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReview();
  }, [page, setMessages]);

  if (!messages) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {messages.data.map((message, index) => (
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
              onClick={() => {
                deleteReview(message.id);
                handleDelete(message.id);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
              aria-label="삭제"
            >
              <FaTrash />
            </button>
            <div className="aspect-square flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold mb-2 text-black">
                  {message.author}
                </h2>
                <p className="text-gray-700">{message.message}</p>
              </div>
              <div className="flex justify-between items-center">
                <time className="text-sm text-gray-500">
                  {formatDate(message.date)}
                </time>
                <button
                  onClick={() => {
                    handleLike(message.id);
                    likeReview(message.id);
                  }}
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
      {messages.hasMore && (
        <footer className="text-center mt-12 col-span-full">
          <button
            onClick={() => setPage(page + 1)}
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
