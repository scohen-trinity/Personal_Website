import React from 'react';
import '../stylesheets/Home.css';
import '../stylesheets/App.css';

const Home = () => {
    return (
        <section id='home'>
          <div className="App-header">
            <h1 className="rusty-header">Sam Cohen</h1>
            <p>Software Engineer | Cloud Developer Associate | Data Analyst</p>
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

export default Home;