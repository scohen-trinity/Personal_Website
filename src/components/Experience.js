import React from 'react';
import '../stylesheets/Navbar.css';
import '../stylesheets/App.css';
import '../stylesheets/Experience.css';

const Experience = () => {
    return (
        <section id='experience'>
          <div className='App-header'>
            <h5 className='Rusty-text'>
              Experience
            </h5>
            <div className='experience-list'>
              <ul>
                <li>Trinity University AV</li>
                <li>PromptVideo Software Development Intern</li>
                <li>Trinity University ACM Tutor</li>
              </ul>
            </div>
          </div>
        </section>
    );
};

export default Experience;