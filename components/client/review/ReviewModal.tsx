"use client";

import { FaTimes } from "react-icons/fa";
import { ReviewModalProps } from "@/types/review";
import ReviewMessageList from "./ReviewMessageList";
import ReviewFormModal from "./ReviewFormModal";
import { useModal } from "@/hooks/useModal";
import { useReview } from "@/hooks/useReview";
import { useRouter } from "next/navigation";

const ReviewModal = ({ isOpen, onClose }: ReviewModalProps) => {
  const { mounted } = useModal();
  const { messages, addMessage } = useReview();
  const router = useRouter();

  const handleSubmit = (formData: { name: string; message: string }) => {
    addMessage(formData.name, formData.message);
  };

  if (!mounted || !isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-transparent z-[99999] pointer-events-none"
        onClick={onClose}
      />
      <article className="fixed bottom-8 right-32 bg-white rounded-lg w-[600px] h-[800px] flex flex-col shadow-xl pointer-events-auto z-[99999]">
        <header className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold text-black">Review</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="닫기"
          >
            <FaTimes className="text-xl" />
          </button>
        </header>

        <div className="flex-1 flex flex-col overflow-auto p-4 pb-0">
          <div className="flex-1 flex flex-col justify-end">
            <ReviewMessageList messages={messages.slice(0, 5)} />
            <button
              onClick={() => router.push("/review")}
              className="w-40 mx-auto mt-4 mb-2 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg hover:from-gray-800 hover:to-black transition-all duration-300"
            >
              더보러가기
            </button>
          </div>
        </div>

        <footer className="p-4 border-t py-2">
          <ReviewFormModal onSubmit={handleSubmit} />
        </footer>
      </article>
    </>
  );
};

export default ReviewModal;
