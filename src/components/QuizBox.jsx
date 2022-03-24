import React from "react";
import QuizBoxChoice from "./QuizBoxChoice";

export default function QuizBox({ question, answers, answerQuestion }) {
  return (
    <div className="quiz-box">
      <p className="quiz-box__question">{question}</p>
      <section id="answers">
        {answers.map((answer) => (
          <QuizBoxChoice
            key={answer.letter}
            letter={answer.letter}
            content={answer.content}
            isCorrect={answer.isCorrect}
            answerQuestion={answerQuestion}
          />
        ))}
      </section>
    </div>
  );
}
