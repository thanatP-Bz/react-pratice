import React, { useReducer, useState } from "react";
import Modal from "./Modal";
import "./style.css";

const reducer = (state, action) => {
  const newItem = [...state.people, action.payload];
  if (action.type === "ADD_VALUE") {
    return {
      ...state,
      people: newItem,
      showContent: "item added",
      isShowModal: true,
    };
  }

  throw new Error("please add a value");
};

const defaultValue = {
  people: [],
  isShowModal: false,
  showContent: "",
};

const Index = () => {
  const [state, dispatch] = useReducer(reducer, defaultValue);

  const [name, setName] = useState("");

  const hideModal = () => {
    state.isShowModal(!state.isShowModal);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (name) {
      const newItem = { id: Math.random.toString(), name };
      dispatch({ type: "ADD_VALUE", payload: newItem });
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const onChangeName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <div className="first-container">
        {state.isShowModal && <Modal showContent={state.showContent} />}
        <form className="form" onSubmit={onSubmit}>
          <div>
            <input type="text" value={name} onChange={onChangeName} />
          </div>
          <button type="submit" className="btn">
            add person
          </button>
        </form>
        {state.people.map((person) => {
          return (
            <div key={person.id} className="item">
              <p>{person.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
