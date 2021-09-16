import React from "react";
import "../../styles/toggle.css";

// If using this toggle at multiple places must have an unique ID
function Toggle({
  name = "toggle",
  id = "toggle",
  value,
  onChange,
  className = "",
  label = "Toggle",
  style = {},
}) {
  return (
    <>
      <label htmlFor={id} className="toggle-label">
        <div
          style={{ ...style }}
          className={`toggle ${className} ${value ? "checked" : ""}`}
        ></div>
        <p>{label}</p>
      </label>
      <input
        type="checkbox"
        name={`${name}`}
        id={`${id}`}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default Toggle;
