import React from "react"

const Square = ({value, index, handleSquareClick, setCounter}) => {
// destructuring props
  // const {value} = props; same as props.value
  //  instead pass desctured props 
  
  const handleclick = () => {
    handleSquareClick(index)
    setCounter()
    // added state function for counter to onClick logic at each square
  }
  
  return (
    <>
      <div className="square" onClick={handleclick}>{value}</div>
    </>
  )
}
export default Square
