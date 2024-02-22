import React from 'react';
import './Navbar.css';
import './App.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='container'>
                <li>About Me</li>
                <li>Projects</li>
                <li>Education</li>
            </ul>
        </nav>
    );
};

export default Navbar;