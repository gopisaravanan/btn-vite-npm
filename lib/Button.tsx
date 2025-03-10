import React from "react";
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
    // className="px-s4 py-2 bg-violet-600 text-white border-none rounded-md cursor-pointer"
    style={{
      padding: "8px 16px",
      backgroundColor: "#7c3aed", // Violet-600
      color: "#ffffff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "500",
    }}
    onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
