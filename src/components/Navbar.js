import React from 'react'
import pokeball from '../images/pokeball.png'
import "../App.css"

export default function Navbar() {
  return (
    <nav>
      <img className="nav--logo" src={pokeball} alt="logo"></img>
    </nav>
  )
}