import React from "react";

const Button = ({
  color = "bg-[#fafaf3]",
  textColor = "text-[#6d653c]",
  textButton = "Button",
  size,
  type,
  onClick = () => {},
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`mt-[60px] h-10 px-6 font-semibold rounded-md ${color} ${textColor} ${size}`}
    >
      {textButton}
    </button>
  );
};

export default Button;
