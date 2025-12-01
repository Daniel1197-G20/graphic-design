import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "./App.css"
function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Skills />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;