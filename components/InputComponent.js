import React from "react";

function InputComponent({ inputLabel, inputType = "text" }) {
  return (
    <>
      <h3 className="font-bold text-sm text-red-500 ">{inputLabel}</h3>
      <input
        type={inputType}
        className="pt-2 mb-5 bg-transparent outline-none border-b-2 border-red-500 w-full text-gray-500"
      />
    </>
  );
}

export default InputComponent;
