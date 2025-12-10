import React from 'react'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Services from './components/Services'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App

