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
      className={`flex rounded-md text-zinc-400 transition duration-200 ease-in-out hover:text-zinc-600 dark:hover:text-zinc-200 ${className}`}
    >
      {icon}
    </button>
  );
};

export default IconButton;
