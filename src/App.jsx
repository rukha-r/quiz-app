import React, { useState } from "react";
import QuizComponent from "./QuizComponent";
import FinalComponent from "./FinalComponent";
import questions from "./data.js";
import "./App.scss";

function App() {
  const length = questions.length;
  const [index, setIndex] = useState(0);
  const [correct_answers, setCorrect] = useState(0);
  const restart = () => {
    setIndex(0);
    setCorrect(0);
  };
  const next = () => setIndex(index + 1);
  const isCorrect = () => {
    setCorrect(correct_answers + 1);
    setIndex(index + 1);
  };
  return (
    <main>
      {index >= length ? (
        <FinalComponent
          className="enter"
          correct_answers={correct_answers}
          length={length}
          restart={restart}
        />
      ) : (
        <QuizComponent
          className="enter"
          question={questions[index].question}
          answers={questions[index].answers}
          index={index}
          length={length}
          isCorrect={isCorrect}
          next={next}
          key={Math.round(Math.random(10000) * 1000)}
        />
      )}
    </main>
  );
}

export default App;
