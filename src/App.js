import React, { useState } from "react";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  return (
    <div className="container">
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, title, desc } = person;

          return (
            <div key={id} className="test-color">
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
