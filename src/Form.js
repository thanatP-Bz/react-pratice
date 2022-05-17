import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import Loading from "./Loading";

const data = [
  {
    id: 1,
    name: "jame",
    position: "worker",
  },
  {
    id: 2,
    name: "helen",
    position: "clerk",
  },
  {
    id: 3,
    name: "mike",
    position: "checker",
  },
];

const initialState = {
  firstName: "",
  position: "",
  content: "item added",
};

const Form = () => {
  const [values, setValues] = useState(initialState);
  const [showLoading, setShowLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [people, setPeople] = useState(data);

  const submitHandler = (e) => {
    e.preventDefault();
    const { firstName, position } = values;

    if (firstName && position) {
      setPeople([...people, { id: Math.random(), firstName, position }]);
      setShowLoading(!showLoading);
      setShowModal(!showModal);
      setValues(initialState);
    }
  };

  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      {showModal && <Modal content={values.content} showModal={setShowModal} />}
      <form onSubmit={submitHandler}>
        <label htmlFor="">name</label>
        <input
          type="text"
          name="firstName"
          onChange={onChangeHandler}
          value={values.firstName}
        />
        <label htmlFor="">position</label>
        <input
          type="text"
          name="position"
          onChange={onChangeHandler}
          value={values.position}
        />
        <button type="submit">submit</button>
        {showLoading && <Loading />}
        {people.map((person) => {
          const { id, firstName, position } = person;
          return (
            <div key={id}>
              <h4>
                {firstName} {position}
              </h4>
            </div>
          );
        })}
      </form>
    </>
  );
};

export default Form;
