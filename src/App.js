import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import FieldHistory from './FieldHistory';
import SignUp from './SignUp';
import Upload from './Upload';
import Map from './Map';
import About from './About';


function App() {
  return (
    <div className={`App`}>
      <header className="App-header">
      </header>
      <body>
        <h1 className="Title">Welcome to Slugnet hosted by UW Madison Extension</h1>
        
        <Router>
          <NavBar />
          <div className="Content">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/fieldHistory" element={<FieldHistory />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/map" element={<Map />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </body>
    </div>
  );
}

export default App;

