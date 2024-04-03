import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about'>
     <div className='heading'>
     <h1>Winning hearts with Cooked Fresh Healthy Meals
     </h1>
     </div>
     <div class="about-box">
       <div className='home'>
       <img src="Home.png" alt="Home" />
       <h1>100+ Outlets Across India</h1>
       <p1>Open in 45+ cities for Delivery & Dine in. India biggest Biryani Delivery chain
       & Dine-in</p1>
       </div>

       <div className='review'>
       <img src="review.png" alt="Review" />
       <h1>Fresh on every order
       </h1>
       <p1>Dum cooked fresh Handi Biryani made individually for every order. Using highest quality ingredients & authentic recipes.

       </p1>
       </div> 

       <div className='rating'>
       <img src="rating.png" alt="Rating" />
       <h1>4.4 Rating</h1>
       <p1>India's most loved Biryani Delivery Chain
       </p1>
       </div> 

       <div className='customers'>
       <img src="customers.png" alt="Customers" />
       <h1>50L+ Customers</h1>
       <p1>Love Biryani by Kilo</p1>
       </div> 
     </div>
  </div>

  )
}

export default About