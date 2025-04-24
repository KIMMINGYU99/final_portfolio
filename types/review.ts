export type ReviewModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export type ReviewMessageProps = {
  name: string;
  message: string;
  date: Date;
};

export type ReviewFormProps = {
  onSubmit: (formData: ReviewFormData) => void;
};

export type ReviewFormData = {
  name: string;
  message: string;
};

export type ReviewMessage = {
  name: string;
  message: string;
  date: Date;
};

export type ReviewMessageListProps = {
  messages: ReviewMessage[];
};

export type ReviewButtonProps = {
  onClick: () => void;
};
