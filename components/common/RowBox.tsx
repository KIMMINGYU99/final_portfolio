import { RowBoxProps } from "@/types/base";

const RowBox = ({ children, className = "" }: RowBoxProps) => {
  return <div className={`flex ${className}`.trim()}>{children}</div>;
};

export default RowBox;
