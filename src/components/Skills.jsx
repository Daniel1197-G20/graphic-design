import React from 'react';
import "../App.css";

// Correct & safe imports – these icons actually exist
import { FaPalette, FaFont, FaMobileAlt, FaVectorSquare } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";           // Figma is in FA6 now
import { 
  SiAdobephotoshop, 
  SiAdobeillustrator, 
  SiFigma as SiFigmaFallback,   // fallback if you prefer simple-icons version
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "Photoshop",       icon: <SiAdobephotoshop /> },
    { name: "Illustrator",     icon: <SiAdobeillustrator /> },
    { name: "Figma",           icon: <FaFigma /> },              // Using FA6 version (clean & monochrome)
    // { name: "Figma",        icon: <SiFigmaFallback /> },    // Uncomment for colored Figma logo
    { name: "Branding",        icon: <FaPalette /> },
    { name: "Typography",      icon: <FaFont /> },
    { name: "UI/UX Design",    icon: <FaMobileAlt /> },
    { name: "Vector Design",   icon: <FaVectorSquare /> },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills &amp; Tools</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;