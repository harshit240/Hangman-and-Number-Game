import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
          <Link className='text-white' to="/" style={{textDecoration:"none"}}><h1>Your Logo</h1></Link>
        </div>
        <div className={`burger ${isNavOpen ? 'toggle' : ''}`} onClick={toggleNav}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className={`nav-links py-md-0 py-5 ${isNavOpen ? 'nav-active' : ''}`}>
          <li className='m-md-0 m-3'><a href="/number">Number Game</a></li>
          <li className='py-md-0 py-3'><a href="/hangman">Hangman Game</a></li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Header
