import React from 'react'
import './Style.css'
import myImage from './photos/bbb.jpg'; 
function Image() {
  return (
    <div className='images'>
      <img src={myImage} alt='bbb' width={1200}/>

    </div>
  )
}

export default Image
