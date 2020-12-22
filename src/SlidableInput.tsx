import React from "react";

interface SlidableInputProps {
  value: number;
  prefix?: string;
  suffix?: string;
  minValue?: number;
  maxValue?: number;
  onChange?: (value: number) => void;
}

const SlidableInput: React.FC<SlidableInputProps> = ({
  value,
  prefix,
  suffix,
}) => {
  return (
    <span>
      {prefix}
      {value}
      {suffix}
    </span>
  );
};

export default SlidableInput;
