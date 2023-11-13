interface ChevronArrowProps {
  className?: string;
  color?: string;
  direction: "left" | "right" | "up" | "down";
}

export const ChevronArrow = ({
  className,
  color = "#000000",
  direction,
}: ChevronArrowProps) => {
  // Define the paths for each arrow direction
  const paths = {
    left: "M7 13.0007L1 7.00073L7 1.00073",
    right: "M1 1.00073L7 7.00073L1 13.0007",
    up: "M1.5 12.5L4 10L6.5 12.5",
    down: "M1.5 1.5L4 4L6.5 1.5",
  };
  // Determine the path based on the direction prop
  const path = paths[direction];

  return (
    <div className={className}>
      <svg
        width={10}
        height={30}
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={path}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
