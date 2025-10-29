import React from 'react'
import './Hero.css'

function Hero() {
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
            We help our clients change the world, one leadership team at a time
          </h1>
          <p className="hero-description">
            Connecting exceptional leaders with transformative opportunities. 
            Our executive search and leadership advisory services drive organizational excellence across industries.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Contact Us
            </button>
            <button className="btn btn-secondary" onClick={() => {
              const element = document.getElementById('services')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}>
              Our Services
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80" 
            alt="Professional team collaboration"
            className="hero-image"
          />
          <div className="hero-card card-1">
            <div className="card-icon">📊</div>
            <div className="card-text">
              <h3>500+ Companies Served</h3>
              <p>Global reach, local expertise</p>
            </div>
          </div>
          <div className="hero-card card-2">
            <div className="card-icon">⭐</div>
            <div className="card-text">
              <h3>95% Success Rate</h3>
              <p>Long-term placements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

