import React from 'react'
 import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
  <ul>
    <li>About Us</li>
    <li>Contact</li>
    <li>Terms of Service</li>
    <li>Privacy Policy</li>
  </ul>
  <div className='social-icons'>
    <img src='facebook.png' alt='Facebook'/>
    <img src='twitter.png' alt='Twitter'/>
    <img src='instagram.png' alt='Instagram'/>
  </div>
</div>

  )
}

export default Footer
