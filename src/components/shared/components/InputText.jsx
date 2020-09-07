import React from "react";

const InputText = ({ name, label, value }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}> {label} </label>
      <input
        type="text"
        className="form-control"
        id={name}
        name={name}
        value={value}
      />
    </div>
  );
};

export default InputText;
