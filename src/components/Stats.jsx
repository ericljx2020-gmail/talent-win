import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './Stats.css'

function Stats() {
  const { t } = useLanguage()
  
  const stats = [
    { number: '500+', label: t.stats.companies },
    { number: '5000+', label: t.stats.placements },
    { number: '95%', label: t.stats.satisfaction },
    { number: '15+', label: t.stats.experience }
  ]

  return (
    <section className="stats">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats

