import { useState, useEffect } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openModal = () => {
    if (mounted) {
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    if (mounted) {
      setIsOpen(false);
    }
  };

  return {
    isOpen,
    mounted,
    openModal,
    closeModal,
  };
};
