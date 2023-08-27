import React from 'react'

export default function CompletedGameScore(props) {

    const handleRefresh = () => {
        window.location.reload(); // Refresh the page
    };

  return (
    <div className="CompletedGameScore">
        <h1 className="CompletedGameScore__Heading">Congratulations<br /> on completing<br /> 10 multiplication questions</h1>
        <h2 className="CompletedGameScore__Percentage">You scored {props.qACorrect * 10}%</h2>
        <p className="CompletedGameScore__Correct">Correct Answers: {props.qACorrect} </p>
        <p className="CompletedGameScore__Incorrect">Incorrect Answers: {props.qAWrong}</p>
        <button onClick={handleRefresh}>Try Again</button>
    </div>
  )
}
