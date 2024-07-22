import React, {useState} from 'react'

const Assign = () => {
   const [count, setCount] = useState('0')

  return (
    <div>
        <h3>{count}</h3>
        <button onClick={() =>setCount (count +1)}>Click to Update</button>
      </div>
      )
}

export default Assign

