import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import NavBar from './shared/NavBar/NavBar';
import Footer from './shared/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="fixed header">
        <NavBar />
      </div>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
