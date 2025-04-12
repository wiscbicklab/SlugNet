import React from 'react';
import Team from './Elements/Team';
import './css/SlugFooter.css';


function SlugFooter() {
    return (
        <div className='Foot'>
            <div>
                <img style={{height: 100 + "px"}} className="ExtensionLogo" alt="UW Extension Logo" src="https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Extension_Logo.png" />
            </div>
            <Team />
        </div>
    );
}

export default SlugFooter;