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
      <Navbar className='sidebar' />
      <div className='Content-container'>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
