import { useState } from 'react';

// WORK IN PROGRESS:
// - kinda ugly right now, make it not ugly

interface FormSelectProps {
  title: string;
  placeholder?: string;
  options: Array<{ name: string; value?: string }>;
  id: string;
  isRequired?: boolean;
  className?: string;
}

const FormSelect = ({
  title,
  placeholder,
  options,
  id,
  isRequired = true,
  className = 'border-2 border-gray-300 bg-gray-100 rounded-md focus:outline-blue-400 p-1'
}: FormSelectProps) => {
  const [value, setValue] = useState('');
  if (isRequired) {
    return (
      <>
        <div className="w-full flex flex-col">
          <label className="text-lg font-medium after:content-['*'] after:text-pink-600 after:ml-0.5">
            {title}
          </label>
          <input
            list={id}
            value={value}
            placeholder={placeholder}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            required
            className={className}
          ></input>
          <datalist id={id}>
            {options.map((data, i) => (
              <option key={i} value={data.value}>
                {data.name}
              </option>
            ))}
          </datalist>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="w-full flex flex-col">
        <label className="text-lg font-medium">{title}</label>
        <input
          list={id}
          value={value}
          placeholder={placeholder}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className={className}
        ></input>
        <datalist id={id}>
          {options.map((data, i) => (
            <option key={i} value={data.value}>
              {data.name}
            </option>
          ))}
        </datalist>
      </div>
    </>
  );
};

export default FormSelect;
