import React, { useState } from 'react';
import "../App.css";

// Icons
import { FaPalette, FaFont, FaMobileAlt, FaVectorSquare } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";

const Skills = () => {
  const [visibleCount, setVisibleCount] = useState(4); // Show only 4 initially

  const skills = [
    { name: "Flyers", icon: <SiAdobephotoshop /> },
    { name: "Poster", icon: <SiAdobeillustrator /> },
    { name: "Brochure", icon: <FaFigma /> },
    { name: "Magazine Design", icon: <FaPalette /> },
    { name: "Business Card", icon: <FaFont /> },
    { name: "Letter Head", icon: <FaMobileAlt /> },
    { name: "Logo Formation", icon: <FaVectorSquare /> },
    { name: "Invitation Card", icon: <FaPalette /> },
    { name: "Birthday Designs", icon: <FaFont /> },
    { name: "General Printing", icon: <FaMobileAlt /> },
    { name: "Magazine Design", icon: <FaVectorSquare /> },
  ];

  const displayedSkills = skills.slice(0, visibleCount);
  const hasMore = visibleCount < skills.length;

  const handleSeeMore = () => {
    setVisibleCount(skills.length); // Show all remaining
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills &amp; Services</h2>

        <div className="skills-grid">
          {displayedSkills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {hasMore && (
          <div className="see-more-container" style={{ textAlign: 'center', marginTop: '50px' }}>
            <button onClick={handleSeeMore} className="see-more-btn">
              See More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;