export type Review = {
  id: string;
  author: string;
  content: string;
  rating: number;
  date: string;
};

export type ReviewFormData = {
  name: string;
  message: string;
};

export type ReviewModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export type ReviewFormProps = {
  onSubmit: (formData: ReviewFormData) => void;
};

export type ReviewCardProps = {
  review: Review;
};

export type ReviewListProps = {
  reviews: Review[];
};

export type ReviewButtonProps = {
  onClick: () => void;
};

export type ReviewMessageProps = {
  name: string;
  message: string;
  date: Date;
};

export type ReviewMessage = {
  name: string;
  message: string;
  date: Date;
};

export type ReviewMessageListProps = {
  messages: ReviewMessage[];
};
