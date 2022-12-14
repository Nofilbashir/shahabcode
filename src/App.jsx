import React from 'react'
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import './index.css'
import { useState } from 'react';
import MobNav from './components/MobNav/MobileNav';
export const App = () => {

  const [width, setWidth] = useState(window.innerWidth)
  window.addEventListener('resize',()=>{
    setWidth(window.innerWidth)
  })

  console.log(width)

  return (
    <div className='app'>
    {width>600?<Navbar/>:<MobNav/>}
    <Header/>
    <Education/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  )
}
