
import React from 'react'
import './Header.css'
import logo from '/src/assets/yoga_logo.png'

const Header = () => {
  return (
    <header>
        <div className='logo'>
            <img src={logo} alt=""/>
            <h3>Yoga</h3>
        </div>
        <ul className="navitems">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>Contact Us</li>
            <button className='btn'>get a quote</button>
        </ul>
        
    </header>
  )
}

export default Header
