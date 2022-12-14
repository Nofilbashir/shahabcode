import React from 'react'
import './Header.css'
import CV from '../../assets/shahab.pdf'

const Header = () => {


  return (
    <div className='Header'>
      <div className='image_container'>
      <img className='header_img' src="https://media.licdn.com/dms/image/C4D03AQFgLvxvszILXQ/profile-displayphoto-shrink_400_400/0/1659861349432?e=1675900800&v=beta&t=nLI37IcqKHKBi4099kOQzaUJmptcLbMdSKZYxC0nSps" alt="" />
      </div>
      <div className='Header_info' >
        <h2>Hi There!</h2>
        <h1>I am Shahab</h1>
        <p>Web Developer & Data Analyst. I love to deliver clean code solutions for interactive web applications.</p>
        <a href={CV} className='btn' download={true}>Download Resume</a>

      </div>
    </div>
  )
}

export default Header