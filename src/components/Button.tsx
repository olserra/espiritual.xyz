import React, { use, useEffect } from "react";

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
    "font-sans rounded font-medium py-2 px-4 min-w-[70px] min-h-[40px] text-white bg-gray-400";
  const disabledStyle = "bg-gray-500 cursor-not-allowed !text-gray-3800";

  useEffect(() => {
    // listen to disabled state changes
    console.log("Button disabled state changed: ", disabled);
  }, [disabled]);

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${className ? className : baseStyle} ${
        disabled ? disabledStyle : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
