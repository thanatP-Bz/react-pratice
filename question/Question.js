import React, { useState } from "react";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const onClickHandler = () => {
    setShowInfo(!showInfo);
  };
  return (
    <article>
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={onClickHandler}>
          click
        </button>
        <p>{showInfo && info}</p>
      </header>
    </article>
  );
};

export default Question;
