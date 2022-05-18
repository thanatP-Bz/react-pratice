import React, { useState, useReducer } from "react";
import Modal from "./Modal";

const initialState = {
  firstName: "",
  position: "",
  content: "",
  people: [],
  showModal: false,
};

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newItem = [...state.people, action.payload];
    return {
      ...state,
      people: newItem,
      content: "item added",
      showModal: true,
    };
  }
  throw new Error("");
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [values, setValues] = useState(initialState);

  const submitHandler = (e) => {
    e.preventDefault();
    const { firstName, position } = values;

    if (firstName && position) {
      dispatch({
        type: "ADD_ITEM",
        payload: { id: Math.random(), firstName, position },
      });
      setValues(initialState);
    }
  };

  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      {state.showModal && <Modal content={state.content} />}
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
        {state.people.map((person) => {
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
