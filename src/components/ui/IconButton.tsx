import React from "react";

interface iIconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const IconButton = ({ icon, onClick, className }: iIconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex rounded-md transition duration-200 ease-in-out hover:scale-105 ${className}`}
    >
      {icon}
    </button>
  );
};

export default IconButton;
