import React from 'react'

const FunctionClick = () => {
    function eventHandler(){
        return alert("Button clicked")
    }
  return (
    <div>
      <button onClick={eventHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
