import React, { useState, useEffect } from 'react';
import './css/NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleToggle = () => { setShow((prev) => !prev) };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        handleClose();
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
        <div className={`dropdown-content ${show ? "show" : "hide"}`}>
          <Link className='navLink' onClick={handleClose} to="/Home">Home</Link>
          <Link className='navLink' onClick={handleClose} to="/Protocol">Protocol</Link>
          <Link className='navLink' onClick={handleClose} to="/Register">Registration</Link>
          <Link className='navLink' onClick={handleClose} to="/FieldHistory">Field History</Link>
          <Link className='navLink' onClick={handleClose} to="/Upload">Upload Photos</Link>
          <Link className='navLink' onClick={handleClose} to="/Map">View Map</Link>
          <Link className='navLink' onClick={handleClose} to="/Faq">FAQ</Link>

          {/*<Link className='navLink' onClick={handleClose} to="/Faq">FAQ</Link>*/}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

