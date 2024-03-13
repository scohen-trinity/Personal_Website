import React from 'react';
import '../stylesheets/Navbar.css';
import '../stylesheets/App.css';
import logo from '../logo.svg';

const Contact = () => {
    return (
        <section id='about'>
          <div className="App-header">
            <h1 className="Rusty-text">Sam Cohen</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </div>
        </section>
    );
};

export default Contact;