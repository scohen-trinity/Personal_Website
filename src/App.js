import logo from './logo.svg';
import './stylesheets/App.css';
import Navbar from './Navbar';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className='Navbar-container'>
        <Navbar className='sidebar' />
      </div>
      <div className='Content-container'>
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
        <section id='projects'>
          <div className='App-header'>
            <h1 className='Rusty-text'>
              Projects
            </h1>
          </div>
        </section>
        <section id='education'>
          <div className='App-header'>
            <h1 className='Rusty-text'>
              Education
            </h1>
          </div>
        </section>
        <section id='contact'>
          <div className='App-header'>
            <h1 className='Rusty-text'>
              Contact Section Content
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
