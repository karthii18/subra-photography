import React from 'react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Subra Photography</h3>
            <p>Capturing life's precious moments with artistry and passion.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="tel:+919876543210">📞 +91 98765 43210</a>
              </li>
              <li>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  💬 WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:karthisri1229@gmail.com">✉️ karthisri1229@gmail.com</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                Facebook
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                Instagram
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Subra Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

