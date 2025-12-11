import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import './ContactForm.css'

function ContactForm() {
  const [formStatus, setFormStatus] = useState('idle') // idle, submitting, success, error

  // EmailJS Configuration - Replace these with your actual values
  // Get these from: https://dashboard.emailjs.com/
  const EMAILJS_SERVICE_ID = 'service_nf48gsk' // Your EmailJS Service ID
  const EMAILJS_TEMPLATE_ID = 'template_4l72jme' // Your EmailJS Template ID
  const EMAILJS_PUBLIC_KEY = '98w3h1jCvK2eCeqK4' // Your EmailJS Public Key

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    const form = e.target
    
    // Format event date for email
    const eventDateInput = form.querySelector('[name="event-date"]').value
    let formattedDate = eventDateInput || 'Not specified'
    if (eventDateInput) {
      formattedDate = new Date(eventDateInput).toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    // Format event type for email
    const eventTypeMap = {
      'wedding': 'Wedding',
      'pre-wedding': 'Pre-Wedding Shoot',
      'event': 'Event',
      'portrait': 'Portrait',
      'maternity': 'Maternity/Baby',
      'other': 'Other'
    }
    const eventTypeValue = form.querySelector('[name="event-type"]').value
    const formattedEventType = eventTypeMap[eventTypeValue] || eventTypeValue || 'Not specified'

    // Prepare template parameters for EmailJS
    // Note: Variable names must match your EmailJS template placeholders
    const templateParams = {
      from_name: form.querySelector('[name="name"]').value,
      from_phone: form.querySelector('[name="phone"]').value,
      from_email: form.querySelector('[name="email"]').value,
      name: form.querySelector('[name="name"]').value, // For {{name}} in template
      email: form.querySelector('[name="email"]').value, // For {{email}} in template
      event_type: formattedEventType,
      event_date: formattedDate,
      location: form.querySelector('[name="location"]').value || 'Not specified',
      message: form.querySelector('[name="message"]').value || 'No message provided',
      // Additional formatted fields for better email display
      formatted_date: formattedDate,
      formatted_event_type: formattedEventType,
      reply_to: form.querySelector('[name="email"]').value
    }

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      if (response.status === 200) {
        setFormStatus('success')
        form.reset()
        setTimeout(() => setFormStatus('idle'), 5000)
      } else {
        throw new Error('Email sending failed')
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 8000)
    }

    /* ============================================
       NETLIFY FORMS CODE - COMMENTED OUT
       (Keeping as backup, but using EmailJS now)
       ============================================
    
    // Check if we're in development mode (localhost)
    const isDevelopment = window.location.hostname === 'localhost' || 
                         window.location.hostname === '127.0.0.1' ||
                         window.location.hostname === ''
    
    // Simulate form submission in development mode
    if (isDevelopment) {
      await new Promise(resolve => setTimeout(resolve, 1500))
      const formValues = {}
      formData.forEach((value, key) => {
        formValues[key] = value
      })
      console.log('Form submitted (development mode):', formValues)
      setFormStatus('dev-success')
      form.reset()
      setTimeout(() => setFormStatus('idle'), 6000)
      return
    }
    
    // Production mode - submit to Netlify
    const encode = (data) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    }
    
    try {
      const formValues = {}
      formData.forEach((value, key) => {
        formValues[key] = value
      })
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...formValues
        })
      })
      
      if (response.ok || response.status === 200) {
        setFormStatus('success')
        form.reset()
        setTimeout(() => setFormStatus('idle'), 5000)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 8000)
    }
    
    ============================================ */
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a question or want to book a session? Fill out the form below and we'll get back to you soon.
        </p>

        <div className="contact-wrapper">
          <form 
            name="contact" 
            onSubmit={handleSubmit}
            className="contact-form"
          >
            {/* NETLIFY FORMS CODE - COMMENTED OUT (Using EmailJS now) */}
            {/* 
            <form 
              name="contact" 
              method="POST" 
              action="/"
              data-netlify="true" 
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="contact-form"
            >
            */}
            
            {/* Hidden field for Netlify Forms - COMMENTED OUT */}
            {/* <input type="hidden" name="form-name" value="contact" /> */}
            
            {/* Honeypot field for spam protection - COMMENTED OUT */}
            {/* 
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            */}

            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                required 
                placeholder="+91 XXXXXXXXXX"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="event-type">Event Type *</label>
              <select id="event-type" name="event-type" required>
                <option value="">Select event type</option>
                <option value="wedding">Wedding</option>
                <option value="pre-wedding">Pre-Wedding Shoot</option>
                <option value="event">Event</option>
                <option value="portrait">Portrait</option>
                <option value="maternity">Maternity/Baby</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="event-date">Event Date</label>
                <input 
                  type="date" 
                  id="event-date" 
                  name="event-date" 
                  placeholder="Select date"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input 
                  type="text" 
                  id="location" 
                  name="location" 
                  placeholder="City, State"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5"
                placeholder="Tell us about your photography needs... (Optional)"
              ></textarea>
            </div>

            {formStatus === 'success' && (
              <div className="form-message success">
                ✅ Thank you! Your message has been sent. We'll get back to you soon.
              </div>
            )}

            {/* Dev success message - COMMENTED OUT (EmailJS works in dev too) */}
            {/* 
            {formStatus === 'dev-success' && (
              <div className="form-message success">
                ✅ <strong>Test Mode:</strong> Form submitted successfully! (This is a simulation - actual emails will be sent when deployed to Netlify)
                <br />
                <small style={{ display: 'block', marginTop: '8px', opacity: 0.8 }}>
                  Check browser console to see form data. Real submissions work on Netlify.
                </small>
              </div>
            )}
            */}

            {formStatus === 'error' && (
              <div className="form-message error">
                ❌ Sorry, there was an error sending your message. Please try again or contact us directly at <a href="mailto:karthisri1229@gmail.com">karthisri1229@gmail.com</a> or <a href="tel:+918300473788">+91 83004 73788</a>.
              </div>
            )}

            <button 
              type="submit" 
              className="btn btn-primary submit-btn"
              disabled={formStatus === 'submitting'}
            >
              {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm

