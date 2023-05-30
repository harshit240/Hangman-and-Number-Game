import React from 'react'
import { useState } from 'react';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
    <header style={{backgroundColor:"yellowgreen"}}>
      <nav className={isNavOpen ? 'nav-active' : ''} >
        <div className="logo">
          <h1>Your Logo</h1>
        </div>
        <div className={`burger ${isNavOpen ? 'toggle' : ''}`} onClick={toggleNav}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className={`nav-links ${isNavOpen ? 'nav-active' : ''}`}>
          <li ><a  href="/number">Number Game</a></li>
          <li ><a  href="/hangman">Hangman Game</a></li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Header
