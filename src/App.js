import React, { useState } from "react"
import Square from "./components/Square"
import "./App.css"
import Restart from "./components/Restart"

const App = () => {
  const startBoard = [
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ]
  const [board, setBoard] = useState(startBoard)

  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))
  console.log("treasure location: ", treasureLocation)

  const [enemyLocation, setEnemyLocation] = useState(Math.floor(Math.random() * board.length))
  console.log("Enenmy Location: ", enemyLocation)

  const handleSquareClick = (clickedSquareIndex) => {
    // varibale holding copy of current state
    let updatedBoard = [...board]
    // set condition for if treasure location is same as clicked square show a fairy
    if(clickedSquareIndex === treasureLocation) {
      updatedBoard[clickedSquareIndex] = "🧚‍♀️"
    } else if(clickedSquareIndex === enemyLocation) {
      updatedBoard[clickedSquareIndex] = "🧌"
    } else if(clickedSquareIndex %2 !== 0) {
      updatedBoard[clickedSquareIndex] = "🪵"
    } else {
      // use index to update current square's value with an emoji using bracket notation
      updatedBoard[clickedSquareIndex] = "🍄"
      // update state with new board
    }
    setBoard(updatedBoard)
  }
    // set return outside of curly braces because it is the same regardless of the condition

  const restartClick = () => {
    // function to reset board to beginning state value
  setBoard(startBoard)
  setEnemyLocation(Math.floor(Math.random() * board.length))
  // replace enemy and fairy locations along with reset
  setTreasureLocation(Math.floor(Math.random() * board.length))
}

  return (
    <>
      <h1>Fairy Finder</h1>
      <div className="board"> 
      {board.map((value, index) => {
        console.log(value, index)
        return (
          <Square
            value={value}
            index={index}
            handleSquareClick={handleSquareClick}
         />
        )
      })}
      </div>
      <button className="restart" onClick={restartClick}>Play Again!</button>
      {/* invoke restartClick function within button tag */}
      </>
      )
    }

export default App
