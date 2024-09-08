import React from 'react'
import Profile from './Profile'

function Navbar() {
  return (
    <div>
        <div className="left">
            <h4>Home</h4>
            <h4>About</h4>
            <h4>Contact</h4>
        </div>
        <div className="right">
            <Profile/>
        </div>
    </div>
  )
}

export default Navbar