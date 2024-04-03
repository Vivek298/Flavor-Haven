import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <div className='navbar'>  
      <img src='logo1.png' alt='Logo' className='logo'/>
      <ul>
        <li>Home</li>
        <li>Indian Food</li>
        <li>Italian Food</li>
        <li>Chinese Food</li>
        <li>French Food</li>
      </ul>
      <div><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></div>
      <div>
      
      <button className='button'>My Orders</button>
      </div>

    </div>
  )
}

export default Navbar