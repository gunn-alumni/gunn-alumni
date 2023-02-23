import { ReactElement } from "react";

type StandardButtonProps = {
  children?: ReactElement | string;
  variant?: "primary" | "secondary";
  color?: "primary" | "black" | string;
  className?: string;
};

const StandardButton = ({
  children,
  variant,
  color,
  className,
}: StandardButtonProps) => {
  const secondaryStyle = "outline outline-2 outline-white";
  return (
    <button
      className={`rounded-lg text-sm text-white font-bold flex-1 py-2 px-4 bg-${color} ${
        variant === "secondary" && secondaryStyle
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default StandardButton;
