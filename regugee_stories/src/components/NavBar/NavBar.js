import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <div className='NavBar'>
          <div className='refugee-Link'>
            <a>Refugee Stories</a>
          </div>
          <div className='navBar-Links'>
            <Link to='/home'>Home</Link>
            <Link>Recent Stories</Link>
            <Link to='/stories'>Submit a Story</Link>
            <Link> Get Involved</Link>
          </div> {/* navBar-Links end */}
      </div> /* NavBar end */
  )
}

export default Navbar;