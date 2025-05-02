"use client";

import { FaPhone, FaEnvelope, FaGithub } from "react-icons/fa";
import ColumnBox from "../../common/ColumnBox";
import ContactItem from "./ContactItem";

const ContactInfo = () => {
  return (
    <ColumnBox className="space-y-3">
      <ContactItem icon={<FaPhone />} content="010-6611-7400" />
      <ContactItem icon={<FaEnvelope />} content="kmk4604@gmail.com" isLink />
      <ContactItem
        icon={<FaGithub />}
        content="github.com/KIMMINGYU99"
        href="https://github.com/KIMMINGYU99"
        isLink
      />
    </ColumnBox>
  );
};

export default ContactInfo;
