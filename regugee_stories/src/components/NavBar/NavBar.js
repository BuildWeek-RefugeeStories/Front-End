import React from 'react';
import './NavBar.css'

const Navbar = () => {
  return (
      <div className='NavBar'>
          <div className='refugee-Link'>
            <a>Refugee Stories</a>
          </div>
          <div className='navBar-Links'>
            <a>Home</a>
            <a>Recent Stories</a>
            <a>Submit a Story</a>
            <a> Get Involved</a>
          </div> {/* navBar-Links end */}
      </div> /* NavBar end */
  )
}

export default Navbar;