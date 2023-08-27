import React from 'react'
import { useState } from 'react';

export default function QuizContainer(props) {

    const [num1, setNum1] = useState(6);
    const [num2, setNum2] = useState(10);
    const [userInput, setUserInput] = useState(undefined);
    
    

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (num1 * num2 === userInput) {
          alert("You got the answer correct !");
          props.updateQACorrect(); // Update App.js state using the function passed in as a prop to QuizContainer.js component 
          props.updateQuestionNumber(); // Update App.js state using the function passed in as a prop to QuizContainer.js component
          let newNum1 = getRandomIntInclusive(0, 10);
          let newNum2 = getRandomIntInclusive(0, 10);
          setNum1(newNum1);
          setNum2(newNum2);
          setUserInput('');
        } else {
          alert("You got the answer wrong, keep practicing !");
          props.updateQAWrong(); // Update App.js state using the function passed in as a prop to QuizContainer.js component
          props.updateQuestionNumber(); // Update App.js state using the function passed in as a prop to QuizContainer.js component
          let newNum1 = getRandomIntInclusive(0, 10);
          let newNum2 = getRandomIntInclusive(0, 10);
          setNum1(newNum1);
          setNum2(newNum2);
          setUserInput('');
        }
      }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <h2>Question {props.questionNumber} of 10</h2>
          <p><span>{num1}</span><span>X</span><span>{num2}</span><span>=</span></p>
          <div>
            <label htmlFor="userInput"></label>
            <input id="userInput" type="number" max="1000" placeholder='?' required value={userInput} onChange={(e) => setUserInput(Number(e.target.value))} />
          </div>
          <button>Check Answer</button>
        </form>
    </div>
  )
}
