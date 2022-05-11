import React from "react";

const Form = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const onChangeHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="">name</label>
      <input type="text" name="name" onChange={onChangeHandler} />
      <label htmlFor="">password</label>
      <input type="text" name="password" onChange={onChangeHandler} />
      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
