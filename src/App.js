import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import About from './Components/About'

const App = () => {
  return (
    <div className='container'>
    <Navbar />
    <Hero />
    
    <Footer />
    </div>
  )
}

export default App