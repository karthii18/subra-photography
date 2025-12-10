import React from 'react'
import './Services.css'

function Services() {
  const services = [
    {
      title: 'Wedding Photography',
      description: 'Complete wedding coverage from pre-wedding ceremonies to reception. Capturing every emotion, detail, and moment of your special day.',
      icon: '💒'
    },
    {
      title: 'Event Photography',
      description: 'Professional coverage for corporate events, birthday parties, anniversaries, and cultural celebrations.',
      icon: '🎉'
    },
    {
      title: 'Portrait Photography',
      description: 'Individual, family, and professional portraits. Studio and outdoor sessions available.',
      icon: '📸'
    },
    {
      title: 'Pre-Wedding Shoots',
      description: 'Romantic pre-wedding photo sessions at beautiful locations. Creating stunning memories before the big day.',
      icon: '💑'
    },
    {
      title: 'Baby & Maternity',
      description: 'Capturing the beautiful journey of pregnancy and the precious moments of new life.',
      icon: '👶'
    },
    {
      title: 'Custom Packages',
      description: 'Tailored photography packages to suit your specific needs and budget. Contact us to discuss your requirements.',
      icon: '✨'
    }
  ]

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive photography solutions for all your special occasions
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

