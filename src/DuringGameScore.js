import React from 'react'

export default function DuringGameScore(props) {
  return (
    <div>
      <p>Correct Answers: <span>{props.qACorrect}</span></p>
      <p>Wrong Answers: <span>{props.qAWrong}</span></p>
    </div>
  )
}
