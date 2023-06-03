import { useState } from 'react';

interface FormInputProps {
  title: string;
  type: string;
  placeholder?: string;
  pattern?: string;
  isRequired?: boolean;
  className?: string;
}

const FormInput = ({
  title,
  type,
  placeholder,
  pattern,
  isRequired = true,
  className = `border-2 bg-gray-100 rounded-md border-gray-300 placeholder-shown:invalid:border-gray-300 placeholder-shown:focus:invalid:outline-blue-400
  placeholder-shown:invalid:text-black invalid:border-pink-500 invalid:outline-pink-500 invalid:text-pink-600 focus:valid:outline-blue-400
   p-1`
}: FormInputProps) => {
  const [value, setValue] = useState('');
  if (isRequired) {
    return (
      <div className="w-full flex flex-col">
        <label className="text-lg font-medium after:content-['*'] after:text-pink-600 after:ml-0.5">{title}</label>
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          pattern={pattern}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          required
          className={className}
        ></input>
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col">
      <label className="text-lg font-medium">{title}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        pattern={pattern}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className={className}
      ></input>
    </div>
  );
};

export default FormInput;
