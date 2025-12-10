import React, { useState } from 'react'
import './Portfolio.css'

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'weddings', name: 'Weddings' },
    { id: 'events', name: 'Events' },
    { id: 'portraits', name: 'Portraits' }
  ]

  // Placeholder images - replace with actual photos
  const portfolioItems = [
    { id: 1, category: 'weddings', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', title: 'Wedding Ceremony' },
    { id: 2, category: 'weddings', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80', title: 'Bridal Portraits' },
    { id: 3, category: 'weddings', image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80', title: 'Reception' },
    { id: 4, category: 'events', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80', title: 'Corporate Event' },
    { id: 5, category: 'events', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80', title: 'Birthday Celebration' },
    { id: 6, category: 'events', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80', title: 'Festival' },
    { id: 7, category: 'portraits', image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80', title: 'Family Portrait' },
    { id: 8, category: 'portraits', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80', title: 'Individual Portrait' },
    { id: 9, category: 'portraits', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80', title: 'Professional Headshot' }
  ]

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <h2 className="section-title">Our Portfolio</h2>
        <p className="section-subtitle">
          Explore our collection of beautiful moments captured with passion and precision
        </p>

        <div className="portfolio-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-image-wrapper">
                <img src={item.image} alt={item.title} className="portfolio-image" />
                <div className="portfolio-overlay">
                  <h3 className="portfolio-title">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

