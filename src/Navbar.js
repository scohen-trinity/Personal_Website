import React from 'react';
import './Navbar.css';
import './App.css';

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth'});
}

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='container'>
                <li onClick={() => scrollToSection('about')}>About Me</li>
                <li onClick={() => scrollToSection('projects')}>Projects</li>
                <li onClick={() => scrollToSection('education')}>Education</li>
            </ul>
        </nav>
    );
};

export default Navbar;