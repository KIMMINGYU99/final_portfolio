"use client";

import { useState, useRef, useEffect } from "react";
import { useReviewStore } from "@/store/reviewStore";
import { TReviewResponse } from "@/types/review";
import { addReview, getReview } from "@/utils";

const ReviewForm = () => {
  const { setMessages } = useReviewStore();
  const [author, setName] = useState("");
  const [message, setMessage] = useState("");
  const [buttonSize, setButtonSize] = useState(80);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // 메시지 입력창의 높이에 맞춰 버튼의 크기를 동기화
    if (textareaRef.current) {
      setButtonSize(textareaRef.current.offsetHeight);
    }
  }, [message]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !message.trim()) return;

    try {
      await addReview({
        author: author.trim(),
        message: message.trim(),
      });

      const review = await getReview(0);
      setMessages(review);
      
      setName("");
      setMessage("");
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mb-12 mx-auto">
      <div className="space-y-3">
        {/* 이름 입력 */}
        <div>
          <label
            htmlFor="author"
            className="block text-sm font-medium text-white mb-2"
          >
            이름
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-black focus:outline-none focus:border-blue-500"
            placeholder="이름을 입력하세요"
            required
          />
        </div>
        {/* 메시지 입력 */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white mb-2"
          >
            메시지
          </label>
          <textarea
            ref={textareaRef}
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-black focus:outline-none focus:border-blue-500 min-h-[80px] max-h-[160px] resize-none"
            placeholder="메시지를 입력하세요"
            required
          />
        </div>
        {/* 전송 버튼 */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl px-6 py-3"
            aria-label="작성하기"
          >
            작성하기
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;
