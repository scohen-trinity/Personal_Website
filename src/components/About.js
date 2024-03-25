import React from 'react';
import '../stylesheets/Navbar.css';
import '../stylesheets/App.css';
import '../stylesheets/About.css'

const Contact = () => {
    return (
        <section id='about'>
          <div className="App-header">
            <h5 className="Rusty-text">About me</h5>
            <h1 className='silver-text'>Let me introduce myself</h1>
            <div className='about-me-paragraph'>
              <img src='./Headshot.jpg' alt='headshot' className='headshot'></img>
              <p className='about-me-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </section>
    );
};

export default Contact;