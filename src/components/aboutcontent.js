import './aboutcontent.css'
import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assests/intro1.webp'

const Aboutcontent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>WHO IAM IN</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad laboriosam</p>
            <Link to="/contact">
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={img1} alt="true"  className='img'/>

                </div>

                <div className='img-stack bottom'>
                    <img src={img1} alt="true"  className='img'/>

                </div>

            </div>

        </div>
        
    </div>
  )
}

export default Aboutcontent