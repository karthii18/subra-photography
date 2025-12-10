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
                <a href="tel:+918300473788">📞 +91 83004 73788</a>
              </li>
              <li>
                <a href="mailto:karthisri1229@gmail.com">✉️ karthisri1229@gmail.com</a>
              </li>
            </ul>
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

