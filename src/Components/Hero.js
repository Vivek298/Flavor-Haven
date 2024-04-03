import React from 'react'
 import './Hero.css'

const Hero = () => {
  return (
    <div className='Hero'>
     <div>
    <h1 className='Heading'>FOOD
    ZONE</h1>
    <p className='Sub-heading'>Your faverote food for a reason to get us <br/> as soon as possible.</p>
     </div>
     <div>
     <img src="breakfast.png" alt="Breakfast" className='foodimg'/>
     </div>
     <div className='menu'>
       <div className='button1'>button 1</div>
       <div className='button2'>helllo</div>
       <div className='button3'>helllo</div>
       <div className='button4'>helllo</div>
     </div>
    </div>
  )
}

export default Hero