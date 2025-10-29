import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './Services.css'

function Services() {
  const { t } = useLanguage()
  
  const services = [
    {
      title: t.services.executiveSearch.title,
      description: t.services.executiveSearch.description,
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80'
    },
    {
      title: t.services.leadershipAdvisory.title,
      description: t.services.leadershipAdvisory.description,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80'
    },
    {
      title: t.services.corporateTransformation.title,
      description: t.services.corporateTransformation.description,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80'
    },
    {
      title: t.services.onDemandTalent.title,
      description: t.services.onDemandTalent.description,
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80'
    },
    {
      title: t.services.organizationCulture.title,
      description: t.services.organizationCulture.description,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80'
    },
    {
      title: t.services.inclusiveLeadership.title,
      description: t.services.inclusiveLeadership.description,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80'
    }
  ]

  return (
    <section className="services" id="services">
      <h2 className="section-title">{t.services.title}</h2>
      <p className="section-subtitle">
        {t.services.subtitle}
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

