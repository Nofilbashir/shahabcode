import React from 'react'
import {education_data} from './EducationData'
import './Education.css'


const Education = () => {
  let keys = Object.keys(education_data[0])
  
  return (
    <div className='Education' id='education'>
      {education_data.map((item)=>{
        return(
          <div className='Degree'>
          <h3>{`${keys[0]} : ${item.degree}`}</h3>
          <h6>{`${keys[1]} : ${item.uni}`}</h6>
          <p>{`${keys[2]} : ${item.cgpa}`}</p>
          </div>
        ) 
      })}
    </div>
  )
}

export default Education