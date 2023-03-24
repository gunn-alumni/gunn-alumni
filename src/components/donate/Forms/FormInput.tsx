import { useState } from "react";

type FormInputProps = {
    title: string;
    type: string;
    placeholder?: string;
    pattern?: string;
    tailwindCSS?: string;
};

const FormInput = ({
    title,
    type,
    placeholder,
    pattern,
    tailwindCSS,
}: FormInputProps) => {
    const [value, setValue] = useState({text: '',});

    const handleInputChange  = (event: { persist: () => void; target: { value: any; }; }) => {
        setValue((value) => ({
            text: event.target.value,
        }));
    };

    return (
        <div className="w-full flex flex-col">
            <label className="text-lg font-medium">
                {title}
            </label>
            <input type={type} value={value.text} placeholder={placeholder} pattern={pattern} onChange={handleInputChange} required className={tailwindCSS}></input>
        </div>
    );
};

export default FormInput;