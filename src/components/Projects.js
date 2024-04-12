import React from 'react';
import '../stylesheets/Navbar.css';
import '../stylesheets/App.css';
import '../stylesheets/Projects.css';

const Projects = () => {
    return (
        <section id='projects'>
          <div className='App-header'>
            <h5 className='Rusty-text'>Projects</h5>
            <h1 className='silver-text'>Check out what I've made!</h1>
            <div className='grid-container'>
              <div className='grid-item'>My portfolio</div>
              <div className='grid-item'>Line Counter in Rust</div>
              <div className='grid-item'>Project 3</div>
            </div>
          </div>
        </section>
    );
};

export default Projects;