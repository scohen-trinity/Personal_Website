import React from 'react';
import ContactBar from './shared/Contact-Bar';
import '../stylesheets/Contact.css';

const Contact = () => {
    return (
        <section id='contact'>
          <div className='App-header'>
            <h5 className='Rusty-text'>
              Contact
            </h5>
            <ContactBar />
          </div>
        </section>
    );
};

export default Contact;
