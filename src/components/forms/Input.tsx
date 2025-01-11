import React from "react";

type InputProps = {
  label: string;
  id: string;
  required: boolean;
  value: string;
  textarea?: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string[] | string;
  rows?: number;
};

export const FormInput = ({
  label,
  id,
  required,
  value,
  textarea,
  onChange,
  error,
  rows,
}: InputProps) => {
  if (Array.isArray(error)) {
    error = error.length > 1 ? error.join(", ") : error[0];
  }
  return (
    <div className="form-item">
      <label htmlFor="name" className="text-gray-400 block mb-2">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          required={required}
          value={value}
          onChange={onChange}
          rows={rows}
          className={`w-full bg-black/50 border  rounded-lg px-4 py-2
                    text-gray-300 focus:outline-none focus:border-[#FF9900]
                    transition-colors duration-300 ${
                      error ? "border-red-500" : "border-gray-800"
                    }`}
        />
      ) : (
        <input
          type="text"
          id={id}
          required={required}
          value={value}
          onChange={onChange}
          className={`w-full bg-black/50 border  rounded-lg px-4 py-2
            text-gray-300 focus:outline-none focus:border-[#FF9900]
            transition-colors duration-300 ${
              error ? "border-red-500" : "border-gray-800"
            }`}
        />
      )}
      <p className="text-red-500 text-sm px-1">{error}</p>
    </div>
  );
};
