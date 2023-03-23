import { useState } from "react";

type FormInputProps = {
    title: string;
    type: string;
    placeholder?: string;
    pattern?: string;
    isRequired?: boolean;
    className?: string;
};

const FormInput = ({
    title,
    type,
    placeholder,
    pattern,
    isRequired = true,
    className = "border-2 border-gray-300 bg-gray-100 rounded-md px-1 py-1",
}: FormInputProps) => {
    const [value, setValue] = useState('');
    if (isRequired) {
        return (
            <div className="w-full flex flex-col">
                <label className="text-lg font-medium">
                    {title}
                </label>
                <input type={type} value={value} placeholder={placeholder} pattern={pattern} onChange={(e) => setValue(e.target.value)} required className={className}></input>
            </div>
        );
    }
    return (
        <div className="w-full flex flex-col">
            <label className="text-lg font-medium">
                {title}
            </label>
            <input type={type} value={value} placeholder={placeholder} pattern={pattern} onChange={(e) => setValue(e.target.value)} className={className}></input>
        </div>
    );
};

export default FormInput;