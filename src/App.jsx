import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

