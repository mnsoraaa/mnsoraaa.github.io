import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experiences from './components/Experiences'
import Portfolios from './components/Portfolios'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Experiences/>
      <Portfolios/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App