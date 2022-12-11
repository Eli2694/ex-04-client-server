import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'


export const Main = () => {
  return (
    <div className='main-container'>
    <Link to='/' className='alink'>Home</Link>
    <Link to='/addStudent' className='alink'>Add Student</Link>
    </div>
   
  )
}
