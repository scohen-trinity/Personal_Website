import './stylesheets/App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Home from './components/Home';
import React from 'react';
import Experience from './components/Experience';

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
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
