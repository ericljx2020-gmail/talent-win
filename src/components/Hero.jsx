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
            <div className="card-icon">📊</div>
            <div className="card-text">
              <h3>{t.hero.companiesServed}</h3>
              <p>{t.hero.companiesDesc}</p>
            </div>
          </div>
          <div className="hero-card card-2">
            <div className="card-icon">⭐</div>
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

