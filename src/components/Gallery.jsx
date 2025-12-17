import React, { useState } from 'react';
import "../App.css";

// Your local images
import Gallery1 from '../assets/Gallery-1.jpeg';
import Gallery2 from '../assets/Gallery2.jpeg';
import Gallery3 from '../assets/Gallery3.jpeg';
import Gallery4 from '../assets/Gallery4.jpeg';
import Gallery5 from '../assets/Gallery5.jpeg';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6); // Initially show 6 items

  const projects = [
    { id: 1, category: 'branding', title: 'Graphical Brand 2025', img: Gallery1, link: '#' },
    { id: 2, category: 'poster', title: 'Neon Dreams Poster Series', img: Gallery2, link: '#' },
    { id: 3, category: 'logo', title: 'Quantum Tech Logo', img: Gallery3, link: '#' },
    { id: 4, category: 'branding', title: 'Fashion Identity', img: Gallery4, link: '#' },
    { id: 5, category: 'poster', title: 'Typography Mastery', img: Gallery5, link: '#' },
    { id: 6, category: 'ui', title: 'Nova Bank App', img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format', link: '#' },
    { id: 7, category: 'logo', title: 'Evergreen Eco Brand', img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format', link: '#' },
    { id: 9, category: 'ui', title: 'TaskFlow Dashboard', img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format', link: '#' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const handleSeeMore = () => {
    setVisibleCount(filteredProjects.length); // Show all
  };

  const hasMore = visibleCount < filteredProjects.length;

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-title">My Gallery</h2>
        <p className="section-subtitle">Selected works from 2024–2025</p>

        <div className="filters">
          {['all', 'branding', 'logo', 'poster'].map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => {
                setFilter(cat);
                setVisibleCount(6);
              }}
            >
              {cat === 'all' ? 'All Works' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className="gallery-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="gallery-card">
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <h3>{project.title}</h3>
                    <p>{project.category.toUpperCase()}</p>
                    <a href={project.link} className="view-btn" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {hasMore && (
          <div className="see-more-container" style={{ textAlign: 'center', marginTop: '40px' }}>
            <button onClick={handleSeeMore} className="see-more-btn">
              Explore
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;