import './stylesheets/App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Projects from './components/Projects';
import Home from './components/Home';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className='Navbar-container'>
        <Navbar className='sidebar' />
      </div>
      <div className='Content-container'>
        <Home />
        <About />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  );
}

export default App;
