import React, { useState, useReducer } from "react";
import reducer from "./context/reducer";
import Modal from "./Modal";
import FormRow from "./context/components/FormRow";
import {
  ADD_ITEM,
  NO_VALUE,
  REMOVE_ITEM,
  CLOSE_MODAL,
} from "./context/actions";

const initialState = {
  firstName: "",
  position: "",
  content: "",
  people: [],
  showModal: false,
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [values, setValues] = useState(initialState);

  const submitHandler = (e) => {
    e.preventDefault();
    const { firstName, position } = values;

    if (firstName && position) {
      dispatch({
        type: ADD_ITEM,
        payload: { id: Math.random(), firstName, position },
      });
      setValues(initialState);
    } else {
      dispatch({ type: NO_VALUE });
    }
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      {state.showModal && (
        <Modal closeModal={closeModal} content={state.content} />
      )}
      <form onSubmit={submitHandler}>
        <FormRow
          type="text"
          name="firstName"
          onChangeHandler={onChangeHandler}
          value={values.firstName}
        />
        <FormRow
          type="text"
          name="position"
          onChangeHandler={onChangeHandler}
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
              <button
                onClick={() => {
                  dispatch({ type: REMOVE_ITEM, payload: id });
                }}
              >
                REMOVE
              </button>
            </div>
          );
        })}
      </form>
    </>
  );
};

export default Form;
