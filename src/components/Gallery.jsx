import React, { useState } from 'react';
import "../App.css"


const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    { id: 1, category: 'branding', title: 'Nike Rebrand 2025', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800' },
    { id: 2, category: 'poster', title: 'Neon Dreams Poster', img: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=800' },
    { id: 3, category: 'logo', title: 'Minimal Tech Logos', img: 'https://images.unsplash.com/photo-1626785774625-c135d6f22614?w=800' },
    { id: 4, category: 'branding', title: 'Luxury Coffee Brand', img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800' },
    { id: 5, category: 'poster', title: 'Typography Series', img: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800' },
    { id: 6, category: 'ui', title: 'Banking App UI Kit', img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800' },
    { id: 7, category: 'logo', title: 'Startup Identity', img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800' },
    { id: 8, category: 'branding', title: 'Fashion Lookbook', img: 'https://images.unsplash.com/photo-1574063346896-9f20196d2d10?w=800' },
    { id: 9, category: 'logo', title: 'Startup Identity', img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800' },
    { id: 10, category: 'logo', title: 'Startup Identity', img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800' },
    { id: 11, category: 'logo', title: 'Startup Identity', img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800' },
    { id: 12, category: 'logo', title: 'Startup Identity', img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800' },

  ];

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-title">My Gallery</h2>

        <div className="filters">
          {['all', 'branding', 'logo', 'poster', 'ui'].map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((project, index) => (
            <div
              key={project.id}
              className="gallery-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="gallery-card">
                <img src={project.img} alt={project.title} />
                <div className="gallery-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.category.toUpperCase()}</p>
                  <a href={project.img} target="_blank" rel="noopener noreferrer" className="view-btn">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;