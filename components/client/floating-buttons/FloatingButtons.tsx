"use client";

import ScrollToTop from "./ScrollToTop";
import ColumnBox from "@/components/server/common/ColumnBox";
import { useModal } from "@/hooks/useModal";
import ReviewButton from "@/components/client/review/ReviewButton";
import ReviewModal from "@/components/client/review/ReviewModal";
import { useRouter } from "next/navigation";

const FloatingButtons = () => {
  const {
    isOpen: isReviewModalOpen,
    openModal,
    closeModal,
    mounted,
  } = useModal();

  const router = useRouter();

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
        <ReviewModal
          isOpen={isReviewModalOpen}
          onClose={closeModal}
          moreBtn={() => {
            closeModal();
            router.push("/review");
          }}
        />
      )}
    </>
  );
};

export default FloatingButtons;
