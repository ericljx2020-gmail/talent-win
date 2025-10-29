import React, { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

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
          <a onClick={() => scrollToSection('hero')}>{t.header.home}</a>
          <a onClick={() => scrollToSection('services')}>{t.header.services}</a>
          <a onClick={() => scrollToSection('about')}>{t.header.about}</a>
          <a onClick={() => scrollToSection('contact')}>{t.header.contact}</a>
        </nav>

        <div className="header-actions">
          <button 
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label="Toggle language"
          >
            {language === 'en' ? '中文' : 'EN'}
          </button>
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

