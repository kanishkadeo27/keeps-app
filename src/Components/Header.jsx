import React from 'react'
import logo from '../images/notes.png'
function Header() {
  return (
    <>
      <div className='header'>
        <img src={logo} alt="logo" width="70" height="60"/>
        <h1>KD Keeps</h1>
      </div>
    </>
  )
}
export default Header
