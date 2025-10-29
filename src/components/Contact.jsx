import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
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
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        Ready to find your next great hire or career opportunity? Let's talk.
      </p>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <div className="info-icon">📍</div>
            <div>
              <h3>Location</h3>
              <p>123 Business Ave, Suite 100<br />New York, NY 10001</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📧</div>
            <div>
              <h3>Email</h3>
              <p>hello@talentwin.com<br />careers@talentwin.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📞</div>
            <div>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567<br />Mon-Fri, 9am-6pm EST</p>
            </div>
          </div>

          <div className="social-links">
            <h3>Follow Us</h3>
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
              Thank you! We'll be in touch soon.
            </div>
          )}

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@company.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Tell us about your needs..."
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

