import React from "react";

const InputField = ({
  Icon,
  placeholder,
  value,
  inputType,
  name,
  setOnChangeValue,
}) => {
  return (
    <div className="bg-primaryGreen rounded-lg overflow-hidden w-full flex justify-start items-center">
      <Icon className="text-xl text-white mx-2" />
      <input
        className="px-3 py-2 outline-none border-2 w-full"
        type={inputType}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={setOnChangeValue}
        required
      />
    </div>
  );
};

export default InputField;
