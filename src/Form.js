import React, { useState } from "react";
import Modal from "./Modal";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [people, setPeople] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const onChangeHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      {showModal && <Modal />}
      <form onSubmit={submitHandler}>
        <label htmlFor="">name</label>
        <input type="text" name="name" onChange={onChangeHandler} />
        <label htmlFor="">password</label>
        <input type="text" name="password" onChange={onChangeHandler} />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Form;
