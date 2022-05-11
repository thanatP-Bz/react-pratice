import React, { useState, useEffect } from "react";
import data from "./data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  return (
    <div className="container">
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, title, desc } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article key={id} className={position}>
              <h4>{title}</h4>
              <p>{desc}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex((index) => index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex((index) => index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default App;
