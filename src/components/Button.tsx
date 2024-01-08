import React from "react";

interface IButton {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<IButton> = ({
  className,
  children,
  onClick,
  type = "button", // Default type
  disabled = false, // Default disabled state
  ...props
}) => {
  const baseStyle =
    "font-sans rounded font-medium py-2 px-4 bg-gray-600 min-w-[70px] min-h-[40px]";

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
