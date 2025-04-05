import React from 'react';
import './SlugFooter.css';



function SlugFooter() {
    return (
        <div className='Foot'>
            <div>
                <img style={{height: 100 + "px"}} className="ExtensionLogo" alt="UW Extension Logo" src="https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Extension_Logo.png" />
            </div>
            <div className="Team">
                <h3>Questions?</h3>
                <p><b>Our team is here to help.</b></p>
                <p>Dane Elmquist, dane.elmquist@wisc.edu</p>
                <p>Laura Flandermeyer, laura.flandermeyer@wisc.edu</p>
                <p>Jordan Kampa, jordan.kampa@wisc.edu</p>
                <p>Dr. Emily Bick, ebick@wisc.edu</p>
            </div>
        </div>
    );
}

export default SlugFooter;