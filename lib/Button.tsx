import React from "react";
import './Button.css'
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
    // className="px-s4 py-2 bg-violet-600 text-white border-none rounded-md cursor-pointer"
    className="button"
    onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
