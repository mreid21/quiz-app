import React from "react";

export default function QuizBoxChoice({
  letter,
  content,
  isCorrect,
  answerQuestion,
}) {
  return (
    <div
      onClick={() => answerQuestion(isCorrect)}
      className="quiz-box__answer rounded-corners transition t-ease t-duration-short"
    >
      <div className="quiz-box__answer__letter">
        <span>{letter}</span>
      </div>
      <p>{content}</p>
    </div>
  );
}
