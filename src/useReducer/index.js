import React, { useReducer, useState } from "react";
import Modal from "./Modal";

const reducer = (state, action) => {}

const initValue = {
  people: [],
  isModalOpen: true,
  modalContent: "hello world"
}

const Index = () => {
 const [state, dispatch] = useReducer(reducer, initValue)

  const [personName, setPersonName] = useState("");
  const [personAge, setPersonAge] = useState("");
 

  const formSubmit = (e) => {
    /* form put on submit function */
    e.preventDefault();

   
    }
  };

  const personNameOnChange = (e) => {
    setPersonName(e.target.value);
  };

  const personAgeOnChange = (e) => {
    setPersonAge(e.target.value);
  };

  return (
    <>
      {modal && <Modal />}
      <form onSubmit={formSubmit} className="form">
        <div className="form-control">
          <label htmlFor="personName">Name:</label>
          <input
            type="text"
            name="personName"
            value={personName}
            onChange={personNameOnChange}
          />
          <label htmlFor="age">Age: </label>
          <input
            type="text"
            name="age"
            value={personAge}
            onChange={personAgeOnChange}
          />
          <button className="btn-form" type="submit">
            add person
          </button>
        </div>
        {people.map((person) => {
          return (
            <div key={person.id} className="item">
              <h4>{person.personName}</h4>
              <h4>{person.personAge}</h4>
            </div>
          );
        })}
      </form>
    </>
  );
};

export default Index;
