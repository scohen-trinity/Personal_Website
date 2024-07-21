import React from 'react';
import ContactBar from './shared/Contact-Bar';

import '../stylesheets/Home.css';
import '../stylesheets/App.css';
import '../stylesheets/index.css';

const Home = () => {
    document.addEventListener('DOMContentLoaded', function() {
      const typingElement = document.querySelector('.typing-animation');
      typingElement.classList.add('start');
    });

    return (
        <section id='home'>
          <div className="App-header">
            <h1 className="rusty-header typing-animation">Sam Cohen</h1>
            <p className='typing-animation'>Software Engineer | Cloud Developer Associate | Data Analyst</p>
            <ContactBar />
          </div>
        </section>
    );
};

export default Home;
