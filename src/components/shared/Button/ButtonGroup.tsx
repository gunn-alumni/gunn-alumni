import { type ReactElement, useState } from 'react';

interface ButtonGroupProps {
  buttons: Array<{
    value: string | ReactElement;
    classNameActive?: string;
    classNameInactive?: string;
    className?: string;
  }>;
  initialState?: number; // index of initial button active
}

const ButtonGroup = ({
  buttons,
  initialState = 0
}: ButtonGroupProps) => {
  for (const i in buttons) { // set default props (might be a better way to do this)
    buttons[i].classNameActive
      ? null
      : (buttons[i].classNameActive = 'bg-primary text-white');
    buttons[i].classNameInactive
      ? null
      : (buttons[i].classNameInactive = 'bg-gray-300 text-gray-700');
  }
  const [active, setActive] = useState(buttons[initialState].value);
  return (
    <>
      {buttons.map((button, i) => (
        <button
          key={i}
          type="button"
          onClick={() => {
            setActive(button.value);
          }}
          className={`flex box-border grow rounded-full text-md font-bold justify-center ${
            button.value === active
              ? button.classNameActive
              : button.classNameInactive
          } ${button.className}`}
        >
          {button.value}
        </button>
      ))}
    </>
  );
};

export default ButtonGroup;
