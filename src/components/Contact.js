import React from 'react';
import '../stylesheets/App.css';
// import '../stylesheets/Contact.css';

const Contact = () => {
    return (
        <section id='contact'>
          <div className='App-header'>
            <h1 className='Rusty-text'>
              Contact Me
            </h1>
            <div className='contact-container'>
                <div className='contact-item'><a href='https://github.com/scohen-trinity'><img src='../github.svg' alt='github' className='github-image' /></a></div>
                <div className='contact-item'><a href='https://www.linkedin.com/in/samuel-cohen-a82434251'><img src='../linkedin.svg' alt='linkedin' className='linkedin-image' /></a></div>
                <div className='contact-item'><a href='mailto:scohen@trinity.edu'><img src='../email.svg' alt='email' className='email-image' /></a></div>
            </div>
          </div>
        </section>
    );
};

export default Contact;