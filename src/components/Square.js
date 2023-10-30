import React from "react"

const Square = ({value, index}) => {
// destructuring props
  // const {value} = props; same as props.value
  //  instead pass desctured props 
  
  return (
    <>
      <div className="square">{value}</div>
    </>
  )
}
export default Square
