import React from 'react';
import './styles/global.css';
import { C } from './constants/tokens';
import Navigation from './components/sections/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import CoreExpertise from './components/sections/CoreExpertise';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import WhyHireMe from './components/sections/WhyHireMe';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.text, fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Navigation />
      <Hero />
      <About />
      <CoreExpertise />
      <Experience />
      <Projects />
      <Skills />
      <WhyHireMe />
      <Contact />
      <Footer />
    </div>
  );
}
