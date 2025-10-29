import React from 'react'
import './About.css'

function About() {
  const values = [
    {
      icon: '🌟',
      title: 'Excellence',
      description: 'We pursue the highest standards in every placement'
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'Honest, transparent relationships built on trust'
    },
    {
      icon: '🎯',
      title: 'Results',
      description: 'Focused on delivering measurable outcomes'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Leveraging technology for smarter recruitment'
    }
  ]

  return (
    <section className="about" id="about">
      <div className="about-image-section">
        <img 
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80" 
          alt="Our team"
          className="about-hero-image"
        />
        <div className="about-overlay">
          <h2 className="about-overlay-title">Our Purpose, Vision, and Values</h2>
        </div>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <h2 className="section-title left-align">About TalentWin</h2>
          <p className="about-description">
            With over 15 years of experience in executive search and recruitment, 
            TalentWin has become a trusted partner for organizations seeking 
            exceptional talent.
          </p>
          <p className="about-description">
            Our team of seasoned consultants brings deep industry expertise and 
            an extensive network of top-tier professionals. We don't just fill 
            positions – we forge long-term partnerships that drive business success.
          </p>
          <p className="about-description">
            Whether you're a growing startup or an established enterprise, we 
            have the expertise and resources to meet your unique hiring needs.
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

