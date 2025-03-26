import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function Home() {
  return (
    <div className="Home">
      <h2>Home</h2>
      <p>
        Welcome to the slugnet home page, this is where 
        all content regaurding slugnet will be hosted
      </p>
      <p>
        Want more information about this project:
        <Link className='navLink' to="/About"> About</Link>
      </p>
      <div className="Instructions">
        <h3>Instuctions</h3>
        <ol className="InstuctionList">
          <li>Register for Slugnet</li>
          <li>Complete Field History Forms, one for each field</li>
          <li>Setup Slug Traps in Fields</li>
          <li>Starting 2 weeks before planting, Upload a photo of each of the traps your monitoring for a total of 10 weeks</li>
          <li>Check out the website at the end of the study for information about the study</li>
        </ol>
      </div>
    </div>
  );
}

export default Home;