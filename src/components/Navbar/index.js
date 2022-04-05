import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className='container justify-content-start d-flex'>
        <Link to="/"><h1 className="link-to">SWAPI-Movie</h1></Link>
        <nav>
          <ul>
            <Link to="/"><li>Films</li></Link>
            <Link to="/characters"><li>characters</li></Link>
          </ul>
      </nav>
      </div>
    </header>
  )
}

export default Navbar;