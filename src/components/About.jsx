import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './About.css'

function About() {
  const { t } = useLanguage()
  
  const values = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
      title: t.about.values.excellence.title,
      description: t.about.values.excellence.description
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: t.about.values.integrity.title,
      description: t.about.values.integrity.description
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      ),
      title: t.about.values.results.title,
      description: t.about.values.results.description
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="9" y1="18" x2="15" y2="18"></line>
          <line x1="10" y1="22" x2="14" y2="22"></line>
          <path d="M15.09 14c.18-.9.27-1.85.27-2.83 0-3.9-3.13-7.06-7-7.06s-7 3.16-7 7.06c0 .98.09 1.93.27 2.83l2.55 2.54a2 2 0 0 1 .59 1.43V19a1 1 0 0 0 1 1h4.28a1 1 0 0 0 1-1v-1.14a2 2 0 0 1 .59-1.43l2.55-2.54z"></path>
        </svg>
      ),
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

