import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './Footer.css'

function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <p className="footer-description">
            {t.footer.description}
          </p>
        </div>

        <div className="footer-section">
          <h3>{t.footer.services.title}</h3>
          <ul>
            <li><a href="#services">{t.footer.services.executiveSearch}</a></li>
            <li><a href="#services">{t.footer.services.permanentPlacement}</a></li>
            <li><a href="#services">{t.footer.services.contractStaffing}</a></li>
            <li><a href="#services">{t.footer.services.graduateRecruitment}</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>{t.footer.company.title}</h3>
          <ul>
            <li><a href="#about">{t.footer.company.about}</a></li>
            <li><a href="#services">{t.footer.company.services}</a></li>
            <li><a href="#contact">{t.footer.company.contact}</a></li>
            <li><a href="#">{t.footer.company.careers}</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>{t.footer.contactInfo.title}</h3>
          <ul>
            <li>{t.footer.contactInfo.address}</li>
            <li>{t.footer.contactInfo.city}</li>
            <li>{t.footer.contactInfo.email}</li>
            <li>{t.footer.contactInfo.phone}</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} {t.footer.copyright}</p>
        <div className="footer-links">
          <a href="#">{t.footer.privacy}</a>
          <span>•</span>
          <a href="#">{t.footer.terms}</a>
          <span>•</span>
          <a href="#">{t.footer.cookies}</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

