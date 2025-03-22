import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(prev => !prev);
  const handleClose = () => setShow(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setShow(false);
      }
    };

    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [show]);

  return (
    <nav className="navbar">
      <div className="dropdown">
        <button onClick={handleToggle} className="dropbtn">
          Menu <i className="fa fa-caret-down"></i>
        </button>
        {show && (
          <div className="dropdown-content">
            <ul className="nav-links">
              <li><Link onClick={handleClose} to="/">Home</Link></li>
              <li><Link onClick={handleClose} to="/FieldHistory">Field History</Link></li>
              <li><Link onClick={handleClose} to="/Register">Registration</Link></li>
              <li><Link onClick={handleClose} to="/Upload">Upload Photos</Link></li>
              <li><Link onClick={handleClose} to="/Map">View Map</Link></li>
              <li><Link onClick={handleClose} to="/About">About</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;

