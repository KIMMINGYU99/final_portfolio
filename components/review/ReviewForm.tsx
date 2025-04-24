"use client";

import { FaPaperPlane } from "react-icons/fa";
import { useForm } from "@/hooks/useForm";
import { ReviewFormProps, ReviewFormData } from "@/types/review";

const ReviewForm = ({ onSubmit }: ReviewFormProps) => {
  const { formData, handleChange, resetForm } = useForm<ReviewFormData>({
    name: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="이름"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          aria-label="이름 입력"
        />
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="메시지를 입력하세요..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          aria-label="메시지 입력"
        />
        <button
          type="submit"
          className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          aria-label="메시지 전송"
        >
          <FaPaperPlane />
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
