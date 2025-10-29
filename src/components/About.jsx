import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './About.css'

function About() {
  const { t } = useLanguage()
  
  const values = [
    {
      icon: '🌟',
      title: t.about.values.excellence.title,
      description: t.about.values.excellence.description
    },
    {
      icon: '🤝',
      title: t.about.values.integrity.title,
      description: t.about.values.integrity.description
    },
    {
      icon: '🎯',
      title: t.about.values.results.title,
      description: t.about.values.results.description
    },
    {
      icon: '💡',
      title: t.about.values.innovation.title,
      description: t.about.values.innovation.description
    }
  ]

  return (
    <section className="about" id="about">
      <div className="about-image-section">
        <img 
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80" 
          alt={t.about.imageAlt}
          className="about-hero-image"
        />
        <div className="about-overlay">
          <h2 className="about-overlay-title">{t.about.overlayTitle}</h2>
        </div>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <h2 className="section-title left-align">{t.about.title}</h2>
          <p className="about-description">
            {t.about.description1}
          </p>
          <p className="about-description">
            {t.about.description2}
          </p>
          <p className="about-description">
            {t.about.description3}
          </p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

