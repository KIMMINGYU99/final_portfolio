export type ReviewMessage = {
  id: string;
  name: string;
  message: string;
  date: Date;
  likes: number;
};

export type ReviewMessageProps = {
  name: string;
  message: string;
  date: Date;
};

export type ReviewModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export type ReviewFormData = {
  name: string;
  message: string;
};
export type ReviewButtonProps = {
  onClick: () => void;
};
