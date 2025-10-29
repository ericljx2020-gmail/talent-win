import React from 'react'
import './Stats.css'

function Stats() {
  const stats = [
    { number: '500+', label: 'Companies Served' },
    { number: '5000+', label: 'Placements Made' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '15+', label: 'Years Experience' }
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

