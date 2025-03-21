import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <nav className="navbar">
      <div className="dropdown">
        <button className="dropbtn">Menu
          <i className='fa fa-caret-down'></i>
        </button>
        <div className="dropdown-content">
          <ul className="nav-links">
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/FieldHistory" >Field History</Link></li>
            <li><Link to="/Register" >Registration</Link></li>
            <li><Link to="/Upload" >Upload Photos</Link></li>
            <li><Link to="/Map" >View Map</Link></li>
            <li><Link to="/About" >About</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
