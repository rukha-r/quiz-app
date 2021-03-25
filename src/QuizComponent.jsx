import React from "react";
import AnswerComponent from "./AnswerComponent";
import "./App.scss";

function QuizComponent({ index, length, question, answers, next, isCorrect }) {
  return (
    <div className="component-wrapper">
      <div className="question-part">
        <h1>
          Question <span>{index + 1}</span>/{length}
        </h1>
        <br />
        <br />
        <h2>{question}</h2>
      </div>
      <div className="answer-part">
        {answers.map((answer) => (
          <AnswerComponent
            next={next}
            isCorrect={isCorrect}
            answer={answer.answer}
            correct={answer.correct}
            key={Math.round(Math.random(10000) * 1000)}
          />
        ))}
      </div>
    </div>
  );
}

export default QuizComponent;
