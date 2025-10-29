import React from 'react'
import './Services.css'

function Services() {
  const services = [
    {
      title: 'Executive Search',
      description: 'Find top-tier leadership talent for C-suite and senior management positions with our exclusive network.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80'
    },
    {
      title: 'Leadership Advisory',
      description: 'Strategic guidance for leadership development, succession planning, and organizational effectiveness.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80'
    },
    {
      title: 'Corporate Transformation',
      description: 'Navigate complex organizational change with expert guidance on restructuring and cultural evolution.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80'
    },
    {
      title: 'On-Demand Talent',
      description: 'Access interim executives and specialized consultants for critical projects and transitions.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80'
    },
    {
      title: 'Organization & Culture',
      description: 'Design and implement culture strategies that align with your business objectives.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80'
    },
    {
      title: 'Inclusive Leadership',
      description: 'Build diverse, equitable leadership teams that drive innovation and business performance.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80'
    }
  ]

  return (
    <section className="services" id="services">
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">
        We help organizations recruit exceptional leaders and build high-performing teams through our comprehensive suite of services
      </p>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-image-wrapper">
              <img src={service.image} alt={service.title} className="service-image" />
            </div>
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services

