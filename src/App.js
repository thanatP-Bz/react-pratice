import React, { useState } from "react";
import Question from "./Question";
import Data from "./Data";

function App() {
  const [question, setQuestion] = useState(Data);
  return (
    <main>
      <div className="container">
        <h3>answer Question</h3>
        <section className="info">
          {question.map((qst) => {
            return <Question key={qst.id} {...qst} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
