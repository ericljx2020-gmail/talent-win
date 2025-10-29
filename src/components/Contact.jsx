import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../contexts/LanguageContext'
import './Contact.css'

function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // EmailJS configuration
    // TODO: Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'YOUR_SERVICE_ID'
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

    // Check if EmailJS is configured
    if (SERVICE_ID === 'YOUR_SERVICE_ID' || !SERVICE_ID) {
      console.log('Form Data:', formData)
      setError('EmailJS is not configured yet. See console for form data.')
      setLoading(false)
      
      // For demo purposes, show success message
      setTimeout(() => {
        setError(null)
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          setFormData({ name: '', email: '', company: '', message: '' })
        }, 3000)
      }, 1000)
      return
    }

    // Send email using EmailJS
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message,
        to_email: 'your-email@example.com' // Your receiving email
      },
      PUBLIC_KEY
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text)
      setLoading(false)
      setSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', company: '', message: '' })
      }, 3000)
    })
    .catch((err) => {
      console.error('FAILED...', err)
      setLoading(false)
      setError('Failed to send message. Please try again.')
    })
  }

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">{t.contact.title}</h2>
      <p className="section-subtitle">
        {t.contact.subtitle}
      </p>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <div className="info-icon">📍</div>
            <div>
              <h3>{t.contact.location}</h3>
              <p>{t.contact.locationAddress.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < t.contact.locationAddress.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📧</div>
            <div>
              <h3>{t.contact.email}</h3>
              <p>{t.contact.emailAddresses.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < t.contact.emailAddresses.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📞</div>
            <div>
              <h3>{t.contact.phone}</h3>
              <p>{t.contact.phoneNumbers.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < t.contact.phoneNumbers.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}</p>
            </div>
          </div>

          <div className="social-links">
            <h3>{t.contact.followUs}</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">LinkedIn</a>
              <a href="#" className="social-icon">Twitter</a>
              <a href="#" className="social-icon">Facebook</a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted && (
            <div className="success-message">
              {t.contact.form.successMessage}
            </div>
          )}

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="name">{t.contact.form.name} *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder={t.contact.form.namePlaceholder}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">{t.contact.form.email} *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder={t.contact.form.emailPlaceholder}
            />
          </div>

          <div className="form-group">
            <label htmlFor="company">{t.contact.form.company}</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder={t.contact.form.companyPlaceholder}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">{t.contact.form.message} *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder={t.contact.form.messagePlaceholder}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? t.contact.form.sending : t.contact.form.submit}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

