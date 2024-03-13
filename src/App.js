import './stylesheets/App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Projects from './components/Projects';
import React, { useEffect, useState } from 'react';

function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsExpanded(true);
    }, 500);
  }, []);

  return (
    <div className="App">
      <div className='Navbar-container'>
        <Navbar className='sidebar' />
      </div>
      <div className='Content-container'>
        <About />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  );
}

export default App;
