"use client";

import { FaTimes } from "react-icons/fa";
import { ReviewModalProps } from "@/types/review";
import ReviewMessageList from "./ReviewMessageList";
import ReviewForm from "./ReviewForm";
import { useModal } from "@/hooks/useModal";
import { useReview } from "@/hooks/useReview";

const ReviewModal = ({ isOpen, onClose }: ReviewModalProps) => {
  const { mounted } = useModal();
  const { messages, addMessage } = useReview();

  const handleSubmit = (formData: { name: string; message: string }) => {
    addMessage(formData.name, formData.message);
  };

  if (!mounted || !isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-transparent z-50 pointer-events-none"
        onClick={onClose}
      />
      <article className="fixed bottom-8 right-25 bg-white rounded-lg w-[600px] h-[800px] flex flex-col shadow-xl pointer-events-auto">
        <header className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">Review</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="닫기"
          >
            <FaTimes className="text-xl" />
          </button>
        </header>

        <ReviewMessageList messages={messages} />

        <footer className="p-4 border-t">
          <ReviewForm onSubmit={handleSubmit} />
        </footer>
      </article>
    </>
  );
};

export default ReviewModal;
