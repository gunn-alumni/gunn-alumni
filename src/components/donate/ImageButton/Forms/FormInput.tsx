import { useState, useEffect } from "react";

type FormInputProps = {
    title: string;
    type: string;
    tailwindCSS: string;
};

const FormInput = ({
    title,
    type,
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
            <input type={type} value={value.text} onChange={handleInputChange} required className={tailwindCSS}></input>
        </div>
    );
};

export default FormInput;