import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './Contact.css'

function Contact() {
  const { t } = useLanguage()

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">{t.contact.title}</h2>
      <p className="section-subtitle">
        {t.contact.subtitle}
      </p>

      <div className="contact-container">
        <div className="contact-card general-info">
          <h3>{t.contact.generalTitle}</h3>
          <div className="info-item">
            <div className="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div>
              <h3>Tele</h3>
              <p>{t.contact.general.tele}</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <div>
              <h3>Web</h3>
              <p>{t.contact.general.web}</p>
            </div>
          </div>
        </div>

        <div className="contact-card key-contact">
          <h3>{t.contact.keyContact.title}</h3>
          <div className="contact-person">
            <p className="person-name">{t.contact.keyContact.name}</p>
            
            <div className="info-item small">
              <div className="info-icon small">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <p>{t.contact.keyContact.location}</p>
            </div>

            <div className="info-item small">
              <div className="info-icon small">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <p>{t.contact.keyContact.cell}</p>
            </div>

            <div className="info-item small">
              <div className="info-icon small">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <p>{t.contact.keyContact.email}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="contact-closing">
        <p>{t.contact.closing}</p>
      </div>
    </section>
  )
}

export default Contact
