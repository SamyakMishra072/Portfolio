import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { MatrixBackground } from './components/MatrixBackground';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cyber-black text-gray-100 transition-colors relative">
        <MatrixBackground />
        <div className="relative z-10">
          <Navigation />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Certifications />
            <Projects />
            <Contact />
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;