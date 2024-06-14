import React from 'react';
import '../stylesheets/Navbar.css';
import '../stylesheets/App.css';

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth'});
}

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='container'>
                <li onClick={() => scrollToSection('home')}>Home</li>
                <li onClick={() => scrollToSection('about')}>About Me</li>
                <li onClick={() => scrollToSection('experience')}>Experience</li>
                <li onClick={() => scrollToSection('projects')}>Projects</li>
                <li onClick={() => scrollToSection('contact')}>Contact Me</li>
            </ul>
            <div className='made-with-react'>
                <div className='made-with-react-container'>
                    <img src="./logo512.png" className="App-logo" alt="logo" />
                    <p>React</p>
                </div>  
            </div>
        </nav>
    );
};

export default Navbar;