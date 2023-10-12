interface IButton {
  children: React.ReactNode;
  className?: string;
  onClick?: any;
  type?: "button" | "submit" | "reset"; // Add the type property
  disabled?: boolean;
}

const Button = ({
  className,
  children,
  onClick,
  type,
  disabled,
  ...props
}: IButton) => {
  const baseStyle = `rounded text-sm lg:text-base font-medium py-2 px-4 min-w-[70px] min-h-[40px]`;

  const renderButton = () => (
    <button disabled={disabled} type={type} {...props} onClick={onClick}>
      <div className={`${baseStyle} ${className ?? ``}`}>{children}</div>
    </button>
  );

  return <div>{renderButton()}</div>;
};

export default Button;
