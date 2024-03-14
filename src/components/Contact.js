import React from 'react';
import '../stylesheets/App.css';
import '../stylesheets/Contact.css';
// import LinkedInIcon from '../../public/linkedin.svg';

const Contact = () => {
    return (
        <section id='contact'>
          <div className='App-header'>
            <h1 className='Rusty-text'>
              Contact Me
            </h1>
            <div className='contact-container'>
                <div className='contact-item'><img src='/github.svg' alt='github' />Github</div>
                <div className='contact-item'><img src='/linkedin.svg' alt='linkedin' />LinkedIn</div>
                <div className='contact-item'><img src='/email.svg' alt='email' />Email</div>
            </div>
          </div>
        </section>
    );
};

export default Contact;