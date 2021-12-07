import React, { useState } from "react";
import data from "./data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  return (
    <div className="container">
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, title, desc } = person;

          let position = "nextSlide";

          if (personIndex === index) {
            position = "activeSlide";
          }

          if() {}

          return (
            <article key={id} className={position}>
              <h4>{title}</h4>
              <p>{desc}</p>
            </article>
          );
        })}
        <button className="prev">
          <FiChevronLeft />
        </button>
        <button className="next">
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default App;
