import React, { useState } from 'react';
import '../stylesheets/Navbar.css';
import '../stylesheets/App.css';

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth'});
}

const Navbar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () => {
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    const sectionsList = [
        { section: 'home', text: 'Home', icon: 'fa-solid fa-house-laptop' },
        { section: 'about', text: 'About Me', icon: 'fa-solid fa-address-card' },
        { section: 'experience', text: 'Experience', icon: 'fa-solid fa-briefcase' },
        { section: 'projects', text: 'Projects', icon: 'fa-solid fa-code' },
        { section: 'contact', text: 'Contact Me', icon: 'fa-solid fa-address-book' },
    ];

    return (
        <div>
            <button className='open-button' onClick={openSidebar}><i className="fas fa-bars"></i></button>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className='sidebar-content'>
                    <button className='close-button' onClick={closeSidebar}><i className="fas fa-times"></i></button>
                    <nav>
                        <ul className='sections-container'>
                            {sectionsList.map(section => (
                                <li key={section.section} className='section-item' onClick={() => scrollToSection(section.section)}>
                                    <i className={section.icon}></i>
                                    { section.text }
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
