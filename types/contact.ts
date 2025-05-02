import { ReactNode } from "react";

export type ContactItemProps = {
  icon: ReactNode;
  content: ReactNode;
  href?: string;
  isLink?: boolean;
};

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormProps = {
  onSubmit: (formData: ContactFormData) => void;
};
