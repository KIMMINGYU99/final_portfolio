export type TReviewMessage = {
  id: string;
  author: string;
  message: string;
  date: string;
  likes: number;
};

export type TReviewMessageProps = {
  author: string;
  message: string;
  date: string;
};

export type TReviewModalProps = {
  isOpen: boolean;
  onClose: () => void;
  moreBtn: () => void;
};

export type TReviewFormData = {
  author: string;
  message: string;
};

export type TReviewButtonProps = {
  onClick: () => void;
};

export type TReviewResponse = {
  data: TReviewMessage[];
  hasMore?: boolean;
  total?: number;
};
