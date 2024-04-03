import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import About from './Components/About'
import Menu from './Components/Menu'

const App = () => {
  return (
    <div className='container'>
    <Navbar />
    <Hero />
    <About />
    <Menu />
    <Footer />
    </div>
  )
}

export default App