import { useState } from "react";
import Script from "next/script";

//WORK IN PROGRESS:
// - add search functionality to select box (use Select2 or Selectize?)

type FormSelectProps = {
    title: string;
    placeholder?: string;
    options: Array<{name: string, value?: string}>;
    id: string;
    className?: string;
};

const FormSelect = ({
    title,
    placeholder,
    options,
    id,
    className = "border-2 border-gray-300 bg-gray-100 rounded-md px-1 py-1",
}: FormSelectProps) => {
    const [value, setValue] = useState('');

    return (
        <>
            <div className="w-full flex flex-col">
                <label className="text-lg font-medium">
                    {title}
                </label>
                <input list={id} value={value} placeholder={placeholder} onChange={(e) => setValue(e.target.value)} className={className}></input>
                <datalist id={id}>
                    {options.map((data, i) => (
                        <option key={i} value={data.value}>{data.name}</option>
                    ))}
                </datalist>
            </div>
        </>
    );
};

export default FormSelect;