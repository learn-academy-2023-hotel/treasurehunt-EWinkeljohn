import React, { useState } from "react"
import Square from "./components/Square"
import "./App.css"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const handleSquareClick = (clickedSquareIndex) => {
    // varibale holding copy of current state
    let updatedBoard = [...board]
    // use index to update current square's value with an emoji using bracket notation
    updatedBoard[clickedSquareIndex] = "🌵"
    // update state with new board
    setBoard(updatedBoard)
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
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
      </>
      )
    }

export default App
