import React from 'react';
import "../App.css"

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="8" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
        <p style={{textAlign:'center', marginTop:'2rem'}}>
          Or phone number <strong>07084027105</strong>
           email me at: <strong>alex@design.com</strong>
        </p>
      </div>
    </section>
  );
};

export default Contact;