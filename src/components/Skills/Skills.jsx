import React from 'react'
import skillsData from './SkillsData'
import './Skills.css'

const Skills = () => {
  return (
    <div className='Skills_container' id='skills'>
      <h1>Skills and Tallents</h1>
      <div className='skill_list'>
      {skillsData.map((skill,i)=>{
        return(
          <>
          <h3 className='skills'>{skill}</h3>
          {i===skillsData.length-1?null:<p>||</p>}
          </>
        )
      })}
      </div> 
    </div>
  )
}

export default Skills