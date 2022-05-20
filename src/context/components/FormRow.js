import React from "react";

const FormRow = ({ type, name, value, onChangeHandler, labelText }) => {
  return (
    <div>
      <label htmlFor="name">{labelText || name}</label>
      <input type={type} name={name} value={value} onChange={onChangeHandler} />
    </div>
  );
};

export default FormRow;
