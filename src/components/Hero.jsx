import React, { useState, useEffect } from 'react';
import "../App.css"


const Hero = () => {
  const roles = ["Graphic Designer", "Brand Creator", "Visual Storyteller",];
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + roles[roleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText('');
        setCharIndex(0);
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 2000);
    }
  }, [charIndex, roleIndex]);

  return (
    <section id="home" className="hero">
      <div className="container">
        <h1>Hi, I'm Blessing </h1>
        <h2 className="typed-text">{text}<span className="cursor">|</span></h2>
        <p>Turning ideas into bold, beautiful, and unforgettable visual experiences.</p>
        <a href="#gallery" className="btn">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;