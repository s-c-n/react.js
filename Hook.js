import React, {useState} from 'react'

const Hook = () => {
    const [message, setMessage] = useState('Hello')
  return (
    <div>
      <h3>{message}</h3>
      <button onClick={() =>setMessage("Goodbye")}>click</button>
    </div>
  )
}

export default Hook

