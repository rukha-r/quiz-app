import React from "react";
import "./App.scss";

function AnswerComponent({ answer, correct, next, isCorrect }) {
  return (
    <div onClick={correct ? isCorrect : next} className="answer">
      <h3>{answer}</h3>
    </div>
  );
}

export default AnswerComponent;
