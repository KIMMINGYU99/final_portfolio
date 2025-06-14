"use client";

import RowBox from "../../common/RowBox";
import { TContactItemProps as ContactItemProps } from "@/types/footer";

const ContactItem = ({
  icon,
  content,
  href,
  isLink = false,
}: ContactItemProps) => {
  return (
    <RowBox className="items-center space-x-3">
      <div className="text-gray-400">{icon}</div>
      {isLink ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white"
        >
          {content}
        </a>
      ) : (
        <span className="text-gray-300">{content}</span>
      )}
    </RowBox>
  );
};

export default ContactItem;
