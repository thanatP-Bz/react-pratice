import React, { useReducer, useState } from "react";
import Modal from "./Modal";
import "./style.css";

const reducer = (state, action) => {};

const defaultValue = {
  people: [],
  isShowModal: true,
};

const Index = () => {
  const [state, dispatch] = useReducer(reducer, defaultValue);

  const [name, setName] = useState("");

  const [people, setPeople] = useState([]);

  const [modal, setShowModal] = useState(false);

  const hideModal = () => {
    setShowModal(!modal);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (name) {
      const newPerson = { id: Math.random().toString(), name };
      setPeople((person) => {
        return [...person, newPerson];
      });
      setName("");
    } else {
      hideModal();
    }
  };

  const onChangeName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <div className="first-container">
        {modal && <Modal hideModal={hideModal} />}
        <form className="form" onSubmit={onSubmit}>
          <div>
            <input type="text" value={name} onChange={onChangeName} />
          </div>
          <button type="submit" className="btn">
            add person
          </button>
        </form>
        {people.map((person) => {
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
