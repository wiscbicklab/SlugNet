import React from 'react';
import '../css/Team.css';

function Team() {
    return (
        <div className="Team">
            <h3>Questions?</h3>
            <h4>Our team is here to help.</h4>
            <p><a href="mailto:dane.elmquist@wisc.edu">Dane Elmquist</a></p>
            <p><a href='mailto:laura.flandermeyer@wisc.edu'>Laura Flandermeyer</a></p>
            <p><a href='mailto:jordan.kampa@wisc.edu'>Jordan Kampa</a></p>
            <p><a href='mailto:ebick@wisc.edu'>Dr. Emily Bick</a></p>
            <h4>Issues with the website</h4>
            <p>Contact our web dev</p>
            <p><a href="mailto:nwolson@wisc.edu">Noah Olson</a></p>
        </div>
    );
}

export default Team;