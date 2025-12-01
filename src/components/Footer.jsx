import React from 'react';
import "../App.css"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2025 Blessing Gold. All rights reserved.</p>
        <div style={{marginTop:'1rem'}}>
          <a href="#" style={{margin:'0 10px', color:'#ff6b6b'}}>Behance</a>
          <a href="#" style={{margin:'0 10px', color:'#ff6b6b'}}>Dribbble</a>
          <a href="#" style={{margin:'0 10px', color:'#ff6b6b'}}>Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;