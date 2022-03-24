import "./App.css";
import { useState } from "react";
import questions from "./static/questions";
import QuizBox from "./components/QuizBox";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasQuestions, setHasQuestions] = useState(true);
  const [score, setScore] = useState(0);

  const answerQuestion = (wasCorrect) => {
    if (wasCorrect) {
      setScore(score + 1);
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setHasQuestions(false);
    }
  };

  return (
    <div className="app-container">
      {hasQuestions ? (
        <QuizBox
          question={questions[currentIndex].question}
          answers={questions[currentIndex].answers}
          answerQuestion={answerQuestion}
        />
      ) : (
        <div>
          <h1>{`You scored ${score} out of ${questions.length}`}</h1>
        </div>
      )}
    </div>
  );
}

export default App;
