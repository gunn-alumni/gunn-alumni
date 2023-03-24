import { useState } from "react";

//WORK IN PROGRESS:
// - add search functionality to select box (use Select2 or Selectize?)

type FormSelectProps = {
    title: string;
    placeholder?: string;
    arrayString: Array<{text: string}>;
    tailwindCSS?: string;
};

const FormSelect = ({
    title,
    placeholder,
    arrayString,
    tailwindCSS,
}: FormSelectProps) => {
    const [value, setValue] = useState({text: '',});

    const handleInputChange  = (event: { persist: () => void; target: { value: any; }; }) => {
        setValue((value) => ({
            text: event.target.value,
        }));
    };

    return (
        <>
            <div className="w-full flex flex-col">
                <label className="text-lg font-medium">
                    {title}
                </label>
                <select placeholder={placeholder}>
                    <option>Select an option...</option>
                    {arrayString.map((data, i) => (
                        <option key={i}>{data.text}</option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default FormSelect;