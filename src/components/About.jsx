import React from 'react'
import './About.css'

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Subra Photography</h2>
            <div className="about-description">
              <p>
                With over 35 years of experience in the art of photography, Subra Photography has been 
                dedicated to capturing life's most precious moments with creativity, passion, and 
                technical excellence. Based in India, we specialize in wedding photography, event 
                coverage, and portrait sessions.
              </p>
              <p>
                Our photography style blends traditional elegance with contemporary artistry, 
                ensuring that every frame tells a story. We believe in creating not just photographs, 
                but timeless memories that reflect the emotions, beauty, and authenticity of each moment.
              </p>
              <p>
                Whether it's the joy of a wedding celebration, the energy of a corporate event, 
                or the intimacy of a portrait session, we approach each assignment with meticulous 
                attention to detail and a commitment to exceeding expectations.
              </p>
            </div>
            <div className="about-features">
              <div className="feature-item">
                <h3>Experience</h3>
                <p>35+ years of professional photography experience</p>
              </div>
              <div className="feature-item">
                <h3>Quality</h3>
                <p>High-resolution images with professional editing</p>
              </div>
              <div className="feature-item">
                <h3>Reliability</h3>
                <p>Punctual, professional, and committed to excellence</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/068/837/068/non_2x/illustration-of-south-indian-wedding-couple-png.png" 
              alt="Tamil Nadu Cultural Hindu Marriage" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

