import React, { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">🎯</span>
          <span className="logo-text">TalentWin</span>
        </div>
        
        <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a onClick={() => scrollToSection('hero')}>Home</a>
          <a onClick={() => scrollToSection('services')}>Services</a>
          <a onClick={() => scrollToSection('about')}>About</a>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
        </nav>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}

export default Header

