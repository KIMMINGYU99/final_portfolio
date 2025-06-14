import { create } from "zustand";
import { TReviewResponse } from "@/types/review";

type TReviewStore = {
  messages: TReviewResponse | null;
  page: number;
  setMessages: (
    messages:
      | TReviewResponse
      | ((prev: TReviewResponse | null) => TReviewResponse)
  ) => void;
  setPage: (page: number) => void;
  handleLike: (id: string) => void;
  handleDelete: (id: string) => void;
  handleAddMessage: (author: string, message: string) => void;
};

export const useReviewStore = create<TReviewStore>((set) => ({
  messages: null,
  page: 0,

  // ✅ setter는 단순히 상태를 업데이트하는 용도만
  setMessages: (messages) =>
    set((state) => ({
      messages:
        typeof messages === "function" ? messages(state.messages) : messages,
    })),

  setPage: (page) => set({ page }),

  handleLike: (id: string) => {
    set((state) => ({
      messages: state.messages
        ? {
            ...state.messages,
            data: state.messages.data.map((msg) =>
              msg.id === id ? { ...msg, likes: msg.likes + 1 } : msg
            ),
          }
        : null,
    }));
  },

  handleDelete: (id: string) => {
    set((state) => ({
      messages: state.messages
        ? {
            ...state.messages,
            data: state.messages.data.filter((msg) => msg.id !== id),
            total: Math.max((state.messages.total ?? state.messages.data.length) - 1, 0),
          }
        : null,
    }));
  },

  handleAddMessage: (author: string, message: string) => {
    const newMessage = {
      id: Date.now().toString(),
      author,
      message,
      likes: 0,
      date: new Date().toISOString(),
    };

    set((state: TReviewStore) => {
      if (state.messages) {
        // 기존 메시지가 있을 때
        return {
          messages: {
            ...state.messages,
            data: [newMessage, ...state.messages.data],
            total: (state.messages.total ?? state.messages.data.length) + 1,
          },
        };
      }

      // 첫 메시지일 때
      return {
        messages: {
          data: [newMessage],
          total: 1,
        },
      };
    });
  },
}));
