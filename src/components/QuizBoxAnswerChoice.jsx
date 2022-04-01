import React from 'react'

export default function QuizBoxAnswerChoice({letter, content, answerQuestion, isCorrect}) {
  return (
    <div onClick={() => answerQuestion(isCorrect)} className="quiz-box__answer rounded-corners transition t-ease t-duration-short">
        <div className="quiz-box__answer__letter">
            <span>{letter}</span>
        </div>
        <p>{content}</p>
    </div>
  )
}
