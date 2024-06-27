import React from 'react';
import '../stylesheets/Contact.css';

const Contact = () => {
    return (
        <section id='contact'>
          <div className='App-header'>
            <h5 className='Rusty-text'>
              Contact
            </h5>
            <ul className='contact-bar'>
              <li>
                <a href='https://github.com/scohen-trinity'>
                  <i className='fa fa-github'></i>
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/samuel-cohen-a82434251'>
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href='mailto:scohencs@gmail.com'>
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
    );
};

export default Contact;
