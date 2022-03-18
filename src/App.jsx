import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="quiz-box rounded-corners">
        <p className="quiz-box__question">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
          velit qui numquam delectus atque culpa eaque accusamus, rem quisquam
          beatae!
        </p>
        <div className="quiz-box__answer">
          <div className="answer__content rounded-corners transition t-ease t-duration-short">
            <div className="quiz-box__letter">
              <span>A</span>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="quiz-box__answer">
          <div className="answer__content rounded-corners transition t-ease t-duration-short">
            <div className="quiz-box__letter">
              <span>B</span>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="quiz-box__answer">
          <div className="answer__content rounded-corners transition t-ease t-duration-short">
            <div className="quiz-box__letter">
              <span>C</span>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="quiz-box__answer">
          <div className="answer__content rounded-corners transition t-ease t-duration-short">
            <div className="quiz-box__letter">
              <span>D</span>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
