"use client";

import ColumnBox from "../../common/ColumnBox";
import ContactInfo from "./ContactInfo";

const ProfileSection = () => {
  return (
    <ColumnBox className="space-y-6 w-1/3 h-full justify-between">
      <header>
        <h3 className="text-2xl font-bold mb-2">김민규</h3>
        <p className="text-gray-300">신입 개발자</p>
      </header>
      <ContactInfo />
    </ColumnBox>
  );
};

export default ProfileSection;
