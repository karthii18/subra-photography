import React from 'react'
import './Hero.css'

function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToPortfolio = () => {
    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="container">
          <h1 className="hero-title">Subra Photography</h1>
          <p className="hero-tagline">
            Capturing Life's Precious Moments with Artistry and Passion
          </p>
          <p className="hero-description">
            Professional photography services for weddings, events, and portraits. 
            Creating timeless memories that you'll cherish forever.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToPortfolio}>
              View Portfolio
            </button>
            <button className="btn btn-secondary" onClick={scrollToContact}>
              Book a Session
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

