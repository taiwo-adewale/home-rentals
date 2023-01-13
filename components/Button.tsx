import React from "react";

type Props = {
  children: string;
  className?: string;
};

const Button = ({ children, className }: Props) => {
  return (
    <button
      className={`bg-primary hover:bg-[rgba(244,81,30,0.8)] t-300 px-6 py-3 sm:py-4 rounded-md text-white text-sm ${
        className && className
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
