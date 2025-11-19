import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './Hero.css'

function Hero() {
  const { t } = useLanguage()
  
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            {t.hero.title}
          </h1>
          <p className="hero-description">
            {t.hero.description}
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToContact}>
              {t.hero.contactUs}
            </button>
            <button className="btn btn-secondary" onClick={() => {
              const element = document.getElementById('services')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}>
              {t.hero.ourServices}
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80" 
            alt={t.hero.imageAlt}
            className="hero-image"
          />
          <div className="hero-card card-1">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
            </div>
            <div className="card-text">
              <h3>{t.hero.companiesServed}</h3>
              <p>{t.hero.companiesDesc}</p>
            </div>
          </div>
          <div className="hero-card card-2">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <div className="card-text">
              <h3>{t.hero.successRate}</h3>
              <p>{t.hero.successDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

