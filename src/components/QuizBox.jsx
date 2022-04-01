import React from 'react'
import QuizBoxAnswers from './QuizBoxAnswers'


export default function QuizBox({currentQuestion, answers, answerQuestion}) {



  return (
    <div className="quiz-box">
        <p className="quiz-box__question">
          {currentQuestion}
        </p>
        <QuizBoxAnswers answerQuestion={answerQuestion} answers={answers}/>
      </div>
  )
}
