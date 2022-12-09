import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='Intro_div'>
      <div className='image_conatiner'>
      <img src="https://media.licdn.com/dms/image/C4D03AQFgLvxvszILXQ/profile-displayphoto-shrink_400_400/0/1659861349432?e=1675900800&v=beta&t=nLI37IcqKHKBi4099kOQzaUJmptcLbMdSKZYxC0nSps" alt="" />    
      </div>
      <h3 className='Navbar_heading'>React Cooder</h3>
      </div>
    <ul className='Navbar_list'>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>

    </div>
  )
}

export default Navbar