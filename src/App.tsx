import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import MissionVision from './components/MissionVision'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <MissionVision />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App