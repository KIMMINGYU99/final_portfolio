"use client";

import { ColumnBoxProps } from "@/types/base";

const ColumnBox = ({ children, className = "" }: ColumnBoxProps) => {
  return <div className={`flex flex-col ${className}`.trim()}>{children}</div>;
};

export default ColumnBox;
