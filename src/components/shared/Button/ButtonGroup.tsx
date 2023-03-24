import { ReactElement, useState } from 'react';

type ButtonGroupProps = {
    buttons: Array<{value: string | ReactElement, classNameActive?: string, classNameInactive?: string, className?: string}>;
};

const ButtonGroup = ({
    buttons,
}: ButtonGroupProps) => {
    for (let i in buttons) { //set default props (might be a better way to do this)
        buttons[i].classNameActive ? null : buttons[i].classNameActive = "bg-primary text-white";
        buttons[i].classNameInactive ? null : buttons[i].classNameInactive = "bg-gray-300 text-gray-700";
    }
    const [active, setActive] = useState(buttons[0].value);
    return (
        <>
            {buttons.map((button, i) => (
                <button
                    key={i}
                    type="button"
                    onClick={() => setActive(button.value)}
                    className={`flex grow rounded-full text-md font-bold justify-center ${
                        (button.value === active) ? button.classNameActive : button.classNameInactive} ${button.className}`}
                    >
                    {button.value}
                </button>
            ))}
        </>
    );
};

export default ButtonGroup;