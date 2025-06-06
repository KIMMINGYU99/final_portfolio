"use client";

import ScrollToTop from "./ScrollToTop";
import ColumnBox from "@/components/server/common/ColumnBox";
import { useModal } from "@/hooks/useModal";
import ReviewButton from "@/components/client/review/ReviewButton";
import ReviewModal from "@/components/client/review/ReviewModal";

const FloatingButtons = () => {
  const {
    isOpen: isReviewModalOpen,
    openModal,
    closeModal,
    mounted,
  } = useModal();

  return (
    <>
      <div className="fixed bottom-8 right-8 z-[2000]">
        <ColumnBox className="gap-4">
          <div>
            <ScrollToTop />
          </div>
          <div>
            <ReviewButton
              onClick={isReviewModalOpen ? closeModal : openModal}
            />
          </div>
        </ColumnBox>
      </div>
      {mounted && (
        <ReviewModal isOpen={isReviewModalOpen} onClose={closeModal} />
      )}
    </>
  );
};

export default FloatingButtons;
