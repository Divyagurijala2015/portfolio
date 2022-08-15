import './heroimage.css'

import React from 'react'
import { Link } from 'react-router-dom'
import Introimg from '../assests/intro1.webp'

const Heroimage = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={Introimg} alt="Introimg"  />
        </div>
        <div className='content'>
          <p>HI IAM A FREELANCER</p>
          <h1>REACT DEVELOPER</h1>
          <div>
           <Link to="/project" className='btn'>Projects</Link>
           <Link to="/contact" className='btn btn-light'>Contact</Link>
          </div>

        </div>

    </div>
  )
}

export default Heroimage