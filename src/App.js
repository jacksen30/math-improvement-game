import './App.css';
import { useState } from 'react';



function App() {

  const [num1, setNum1] = useState(6);
  const [num2, setNum2] = useState(10);
  const [userInput, setUserInput] = useState("?");
  const [questionNumber, setQuestionNumber] = useState(1);
  const [qACorrect, setQACorrect] = useState(0);
  const [qAWrong, setQAWrong] = useState(0);

  // let rando1 = getRandomIntInclusive(0, 10);
  // let rando2 = getRandomIntInclusive(0, 10);
  // setNum1(rando1);
  // setNum2(rando2);



  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (num1 * num2 == userInput) {
      alert("You got the answer correct !");
      setQACorrect(qACorrect + 1);
      setQuestionNumber(questionNumber + 1);
      let newNum1 = getRandomIntInclusive(0, 10);
      let newNum2 = getRandomIntInclusive(0, 10);
      setNum1(newNum1);
      setNum2(newNum2);
      setUserInput("?");

    } else {
      alert("You got the answer wrong, keep practicing !");
      setQAWrong(qAWrong + 1);
      setQuestionNumber(questionNumber + 1);
      let newNum1 = getRandomIntInclusive(0, 10);
      let newNum2 = getRandomIntInclusive(0, 10);
      setNum1(newNum1);
      setNum2(newNum2);
      setUserInput("?");
    }
  }

  return (
    <div className="App">
      <h1>Math Practice Game</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Question {questionNumber} of 10</h2>
          <p><span>{num1}</span><span>X</span><span>{num2}</span><span>=</span><label htmlFor="userInput"></label><input id="userInput" value={userInput} onChange={(e) => setUserInput(e.target.value)} /></p>
          <button>Check Answer</button>
        </form>
      </div>
      <p>Correct <span>{qACorrect}</span></p>
      <p>Wrong <span>{qAWrong}</span></p>
      <p>You scored a result of <span>{qACorrect * 10} % </span></p>

    </div>
  );
}

export default App;
