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
            <h1 className='silver-text'>Here's where I have worked</h1>
            <div className='experience-list'>
              {/* Econtrols Section */}
              <div className='job-block'>
                <div className='job-title'>
                  <h3>IoT Full Stack Software Engineer Intern</h3>
                  <p>May 2024 - Present</p>
                </div>
                <div className='job-icon'>
                  <img src='./econtrols.jpg' alt='econtrols' className='job-image'></img> 
                </div>
                <div className='job-description'>
                  <h3>Econtrols</h3>
                  <p>Worked as a full stack developer on the IoT Software Team at Econtrols. I worked with Angular, Typescript, HTML, C#, and Azure Cloud.</p>
                </div>
              </div>
              {/* ACM Section */}
              <div className='job-block'>
                <div className='job-title'>
                  <h3>ACM Tutor</h3>
                  <p>August 2023 - April 2024</p>
                </div>
                <div className='job-icon'>
                  <img src='./acm.png' alt='acm' className='job-image'></img> 
                </div>
                <div className='job-description'>
                  <h3>Trinity University ACM</h3>
                  <p>Worked as an ACM Tutor, helping students better learn and understand computer science. I helped students with Python, Java, Haskell, and Scala related issues.</p>
                </div>
              </div>
              {/* PromptVideo Section */}
              <div className='job-block'>
                <div className='job-title'>
                  <h3>Full Stack Software Engineer</h3>
                  <p>June 2023 - August 2023</p>
                </div>
                <div className='job-icon'>
                  <img src='./promptvideo.jpg' alt='promptvideo' className='job-image'></img> 
                </div>
                <div className='job-description'>
                  <h3>PromptVideo</h3>
                  <p>Worked as a full stack developer at PromptVideo, a B2B video startup company. I worked with a numbe of technologies including AWS, Python, Typescript, and HTML. I also earned two AWS certifications while at this internship.</p>
                </div>
              </div>
              {/* Trinity AV Section */}
              <div className='job-block'>
                <div className='job-title'>
                  <h3>Technical Support Ananlyst I</h3>
                  <p>February 2022 - Present</p>
                </div>
                <div className='job-icon'>
                  <img src='./trinity.jpg' alt='trinity av' className='job-image'></img> 
                </div>
                <div className='job-description'>
                  <h3>Trinity University</h3>
                  <p>Worked as a Technical Support Analyst for Trinity University's IT department specializing in Audiovisual Equipment.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

export default Experience;
