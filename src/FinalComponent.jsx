import React from "react";
import { FiRefreshCcw } from "react-icons/fi";
import "./App.scss";

function ScoreComponent({ correct_answers, length, restart }) {
  return (
    <div className="final-score">
      <h1>
        You scored {correct_answers} out of {length}
      </h1>
      <button onClick={restart}>
        <FiRefreshCcw />
      </button>
    </div>
  );
}

export default ScoreComponent;
