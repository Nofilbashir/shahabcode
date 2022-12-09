import React from 'react'
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import './index.css'

export const App = () => {
  return (
    <div className='app'>
    <Navbar/>
    <Header/>
    <Education/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  )
}
