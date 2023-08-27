import './App.css';
import { useState } from 'react';
import QuizContainer from './QuizContainer';
import DuringGameScore from './DuringGameScore';
import CompletedGameScore from './CompletedGameScore';



function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [qACorrect, setQACorrect] = useState(0);
  const [qAWrong, setQAWrong] = useState(0);

  return (
    <div className="App">
      <h1>Math Practice Game</h1>
      {questionNumber < 11 && <QuizContainer 
        questionNumber={questionNumber}
        updateQuestionNumber={() => setQuestionNumber(questionNumber + 1)}
        updateQACorrect={() => setQACorrect(qACorrect + 1)} 
        updateQAWrong={() => setQAWrong(qAWrong + 1)} />}
      {/* <p>Correct <span>{qACorrect}</span></p>
      <p>Wrong <span>{qAWrong}</span></p>
      <p>You scored a result of <span>{qACorrect * 10} % </span></p> */}
      {questionNumber < 11 && <DuringGameScore qACorrect={qACorrect} qAWrong={qAWrong} />}
      {questionNumber > 10 && <CompletedGameScore qACorrect={qACorrect} qAWrong={qAWrong} />}
    </div>
  );
}

export default App;
