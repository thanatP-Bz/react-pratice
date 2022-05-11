import React, { useState } from "react";
import Data from "./Data";

const ShowPerson = () => {
  const [index, setIndex] = useState(0);
  const { name } = Data[index];

  const prevButton = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextButton = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const checkNumber = (number) => {
    console.log(number);
    if (number > Data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return Data.length - 1;
    }
    return number;
  };

  const randomButton = (index) => {
    let randomIndex = Math.floor(Math.random() * Data.length);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    setIndex(checkNumber(randomIndex));
  };

  return (
    <div>
      <div className="image">
        <img src="" alt="" />
      </div>
      <h3>{name}</h3>
      <button onClick={prevButton}>prev</button>
      <button onClick={randomButton}>random</button>
      <button onClick={nextButton}>next</button>
    </div>
  );
};

export default ShowPerson;
