import React from "react"

const Square = ({value, index, handleSquareClick}) => {
// destructuring props
  // const {value} = props; same as props.value
  //  instead pass desctured props 
  
  const handleclick = () => {
    handleSquareClick(index)
  }
  
  return (
    <>
      <div className="square" onClick={handleclick}>{value}</div>
    </>
  )
}
export default Square
