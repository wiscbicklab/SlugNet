import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <nav className='navbar'>
      <ul className='nav-links'>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/FieldHistory'>Field History</Link></li>
      <li><Link to='/SignUp'>Sign Up</Link></li>
      <li><Link to='/Upload'>Upload Photos</Link></li>
      <li><Link to='/Map'>View Map</Link></li>
      <li><Link to='/About'>About</Link></li>
    </ul>
        
    </nav>
  );
}

export default NavBar;