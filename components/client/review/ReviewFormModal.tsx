"use client";

import { useState, useRef, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";

interface ReviewFormModalProps {
  onSubmit: (formData: { name: string; message: string }) => void;
}

const ReviewFormModal = ({ onSubmit }: ReviewFormModalProps) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [buttonSize, setButtonSize] = useState(48);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      setButtonSize(textareaRef.current.offsetHeight);
    }
  }, [message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    onSubmit({ name, message });
    setName("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mt-1 mb-2">
      <div className="space-y-2">
        {/* 이름 입력 */}
        <input
          type="text"
          id="modal-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg text-black focus:outline-none focus:border-blue-500 mb-1"
          placeholder="이름을 입력하세요"
          required
        />
        {/* 메시지 입력 + 전송버튼 */}
        <div className="flex gap-2">
          <textarea
            ref={textareaRef}
            id="modal-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg text-black focus:outline-none focus:border-blue-500 min-h-[48px] max-h-[80px] resize-none"
            placeholder="메시지를 입력하세요"
            required
          />
          <button
            type="submit"
            style={{
              width: buttonSize,
              height: buttonSize,
              minWidth: 40,
              minHeight: 40,
            }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center text-lg"
            aria-label="전송"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReviewFormModal;
