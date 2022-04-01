import React from 'react'
import QuizBoxAnswerChoice from './QuizBoxAnswerChoice'

export default function QuizBoxAnswers({answers, answerQuestion}) {
  return (
    <section id="answers">
        {answers.map((answer) => 
            <QuizBoxAnswerChoice 
            letter={answer.letter} 
            isCorrect={answer.isCorrect} 
            content={answer.content}
            answerQuestion={answerQuestion}
            />
        )}
    </section>
  )
}
