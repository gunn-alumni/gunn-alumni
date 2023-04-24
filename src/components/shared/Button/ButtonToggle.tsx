import { type ReactElement, useState } from 'react';

interface ButtonToggleProps {
  classNameActive?: string;
  classNameInactive?: string;
  isActive?: boolean;
  children?: ReactElement | string;
  className?: string;
}

const ButtonToggle = ({
  classNameActive = 'bg-primary text-white',
  classNameInactive = 'bg-gray-300 text-white',
  isActive = true,
  children,
  className
}: ButtonToggleProps) => {
  const [toggle, setToggle] = useState(isActive);
  return (
    <button
      type="button"
      onClick={() => {
        setToggle(!toggle);
      }}
      className={`rounded-full text-sm font-bold flex-1 py-2 px-4 ${
        toggle ? classNameActive : classNameInactive
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonToggle;
