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
     <div className='M-buttons'>
       <div className='button1'>BREAKFAST</div>
       <div className='button2'>LUNCH</div>
       <div className='button3'>DINNER</div>
       <div className='button4'>SNACKS</div>
     </div>
    </div>
  )
}

export default Hero