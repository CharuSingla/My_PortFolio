import React, { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <>
      <button className="toggle-mode" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
      <HeroSection />
      <About />
      <TechStack />
      <Projects />
      <Resume />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
