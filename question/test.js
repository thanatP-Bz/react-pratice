import React, { useState } from "react";

const Test = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const onClickHandler = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div>
      <header>
        <h4>{title}</h4>
        <section>
          <button onClick={onClickHandler}>Click</button>
          {showInfo && <p>{info}</p>}
        </section>
      </header>
    </div>
  );
};

export default Test;
