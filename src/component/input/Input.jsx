import React from "react";

function Input({
  value,
  onChange = () => {},
  type = "text",
  style = {},
  className = "",
  id = "",
  name = "",
  placeholder = "",
}) {
  return (
    <input
      autoComplete="off"
      type={["text", "email", "password"].includes(type) ? type : "text"}
      value={value}
      onChange={onChange}
      style={{ ...style }}
      className={`input ${className}`}
      id={`${id}`}
      name={`${name}`}
      placeholder={`${placeholder}`}
    />
  );
}

export default Input;
