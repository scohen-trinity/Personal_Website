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
        setNavOpen(!navOpen);
    };

    const sectionsList = [
        { section: 'home', text: 'Home' },
        { section: 'about', text: 'About Me' },
        { section: 'experience', text: 'Experience' },
        { section: 'projects', text: 'Projects' },
        { section: 'contact', text: 'Contact Me' },
    ];

    return (
        <div className='sidebar-container'>
            <div className={`sidebar ${navOpen ? 'open' : ''}`}>
                <ul className='sections-container'>
                    {sectionsList.map(section => (
                        <li onClick={() => scrollToSection(section.section)}>{ section.text }</li>
                    ))}
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
