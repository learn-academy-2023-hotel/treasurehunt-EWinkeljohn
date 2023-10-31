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
  console.log("Enemy Location: ", enemyLocation)

  const [counter, setCounter] = useState(5)

  const handleSquareClick = (clickedSquareIndex) => {
    while (treasureLocation === enemyLocation){
      return handleSquareClick()
    }
    // varibale holding copy of current state
    let updatedBoard = [...board]
    let updatedCounter = counter - 1
    // decalred update variable to for counter state value
    // set condition for if treasure location is same as clicked square show a fairy
    if(clickedSquareIndex === treasureLocation) {
      updatedBoard[clickedSquareIndex] = "🧚‍♀️"
      setTimeout(function() {alert("✨You found her!✨ I hope you brought her a snack 🍬")}, 100)
    } else if(clickedSquareIndex === enemyLocation) {
      updatedBoard[clickedSquareIndex] = "🧌"
      setTimeout(function() {alert("🛤️ The troll found you lurking near his bridge...RUN! 🏃‍♂️")}, 100)
    } else if(clickedSquareIndex %2 !== 0) {
      updatedBoard[clickedSquareIndex] = "🪵"
      setCounter(updatedCounter)
      // used state function and variable to update state value
    } else {
      // use index to update current square's value with an emoji using bracket notation
      updatedBoard[clickedSquareIndex] = "🍄"
      // update state with new board
      setCounter(updatedCounter)
    }
    setBoard(updatedBoard)
    // let updatedCounter = counter - 1
    // decalred updated variable to for state value
    // used state function and variable to update state value
  }
    // set return outside of curly braces because it is the same regardless of the condition

  const restartClick = () => {
    // function to reset board to beginning state value
  setBoard(startBoard)
  setEnemyLocation(Math.floor(Math.random() * board.length))
  // replace enemy and fairy locations along with reset
  setTreasureLocation(Math.floor(Math.random() * board.length))
  setCounter(5)
  // added counter logic to restartClick function to revert back to 5 when Play Again is clicked
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
      <button className="counter">{counter}</button>
      </>
      )
    }

export default App
