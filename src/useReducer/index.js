import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import Data from "../Data";

const reducer = (state, action) => {
  /* return state */
  if (action.type === "TESTING") {
    /* must return object */
    return {
      ...state,
      people: Data,
      isShowModal: true,
      showContent: "testing",
    };
  }
  /*  return state; */ /* or we can throw error */
  throw new Error("no matching Value");
};

const initState = {
  people: [Data],
  isShowModal: false,
  showContent: "hello",
};

const Index = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const [name, setName] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (name) {
      dispatch({ type: "ADD_ITEM" });
    } else {
      dispatch({ type: "RANDOM" });
    }
  };

  const onChangeName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      {state.isShowModal && <Modal showContent={state.showContent} />}
      <form onSubmit={onFormSubmit} className="form">
        <label htmlFor="firstName">Name</label>
        <input type="text" value={name} onChange={onChangeName} />

        <button className="btn" type="submit">
          add person
        </button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
