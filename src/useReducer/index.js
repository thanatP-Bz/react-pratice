import React, { useState, useReducer } from "react";
import Modal from "./Modal";

const reducer = (state, action) => {
  /* return state */
  if (action.type === "ADD_ITEM") {
    /* must return object */
    const newItems = [...state.people, action.payload];
    return {
      ...state,
      people: newItems,
      isShowModal: true,
      showContent: "ITEM ADDED",
    };
  }
  if (action.type === "NO_VALUE") {
    return { ...state, isShowModal: true, showContent: "please enter value" };
  }

  if (action.type === "CLOSE_MODAL") {
    return { ...state, isShowModal: false };
  }

  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return { ...state, people: newPeople };
  }
  /*  return state; */ /* or we can throw error */
  throw new Error("no matching Value");
};

const initState = {
  people: [],
  isShowModal: false,
  showContent: "hello",
};

const Index = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const [age, setAge] = useState("");
  const [name, setName] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (name && age) {
      const newItems = {
        id: Math.random().toString(),
        name,
        age,
      };
      dispatch({ type: "ADD_ITEM", payload: newItems });
      setName("");
      setAge("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeAge = (e) => {
    setAge(e.target.value);
  };

  return (
    <>
      {state.isShowModal && (
        <Modal showContent={state.showContent} closeModal={closeModal} />
      )}
      <form onSubmit={onFormSubmit} className="form">
        <label htmlFor="firstName">Name</label>
        <input type="text" value={name} onChange={onChangeName} />
        <label htmlFor="age">Age</label>
        <input type="text" value={age} onChange={onChangeAge} />
        <button className="btn" type="submit">
          add person
        </button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <h4>{person.age}</h4>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
