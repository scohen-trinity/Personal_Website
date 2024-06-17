import React, { useState } from 'react';
import '../stylesheets/Navbar.css';
import '../stylesheets/App.css';

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth'});
}

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        console.log('clicked');
        setNavOpen(!navOpen);
    };
    return (
        <div className='sidebar-container'>
            <div className={`sidebar ${navOpen ? 'open' : ''}`}>
                <ul className='sections-container'>
                    <li onClick={() => scrollToSection('home')}>Home</li>
                    <li onClick={() => scrollToSection('about')}>About Me</li>
                    <li onClick={() => scrollToSection('experience')}>Experience</li>
                    <li onClick={() => scrollToSection('projects')}>Projects</li>
                    <li onClick={() => scrollToSection('contact')}>Contact Me</li>
                </ul>
            </div>
            <div className={`hamburger ${navOpen ? 'open' : ''}`} onClick={toggleNav}>
                <div className='bar1'></div>
                <div className='bar2'></div>
                <div className='bar3'></div>
            </div>
        </div>
    );
};

export default Navbar;
