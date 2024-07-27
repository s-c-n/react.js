import React from 'react'
import './Style.css'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className='Navbar-dom'>Ben Nadel.com</div>
        <ul>
       <li><a className="navbar-brand" href="/">Home</a></li> 
       <li><a className="navbar-brand" href="/">Activity</a></li> 
       <li><a className="navbar-brand" href="/">Podcast</a></li> 
       <li><a className="navbar-brand" href="/">Aboutme</a></li> 
       <li><a className="navbar-brand" href="/">People</a></li> 
       <li><a className="navbar-brand" href="/">Contact</a></li> 
       <li><a className="navbar-brand" href="/">Light UI</a></li> 
        </ul>
    </nav>
  )
}

export default Navbar