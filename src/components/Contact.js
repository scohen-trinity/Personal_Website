import React from 'react';
import '../stylesheets/App.css';
import '../stylesheets/Contact.css';

const Contact = () => {
    return (
        <section id='contact'>
          <div className='App-header'>
            <h1 className='Rusty-text'>
              Contact Me
            </h1>
            <div className='contact-container'>
                <p>Github</p>
                <p>LinkedIn</p>
                <p>Email</p>
            </div>
          </div>
        </section>
    );
};

export default Contact;