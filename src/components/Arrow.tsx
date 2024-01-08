import React from "react";
import svgs from "@/helpers/svgs";

interface ArrowProps {
  className?: string;
  color?: string;
  direction: "left" | "right" | "up" | "down";
}

export const Arrow: React.FC<ArrowProps> = ({
  className,
  color = "white",
  direction,
}) => {
  return svgs.arrow({ className, color, direction });
};
