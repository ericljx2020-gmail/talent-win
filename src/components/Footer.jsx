import React from 'react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-icon">🎯</span>
            <span className="logo-text">TalentWin</span>
          </div>
          <p className="footer-description">
            Connecting exceptional talent with outstanding opportunities since 2010.
          </p>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a href="#services">Executive Search</a></li>
            <li><a href="#services">Permanent Placement</a></li>
            <li><a href="#services">Contract Staffing</a></li>
            <li><a href="#services">Graduate Recruitment</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>123 Business Ave, Suite 100</li>
            <li>New York, NY 10001</li>
            <li>hello@talentwin.com</li>
            <li>+1 (555) 123-4567</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} TalentWin. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <span>•</span>
          <a href="#">Terms of Service</a>
          <span>•</span>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

