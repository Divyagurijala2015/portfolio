import './pricecard.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Pricecard = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
           
        <div className='card'>
                <h3>Basic</h3>
                <span className='bar'></span>
                <p className='btc'>$</p>
                <p>- 3 days</p>
                <p>-3 pages-</p>
                <p>-featured-</p>
                <p>-Responsive Design-</p>
                <Link to="/contact" className='btn'>PURCHASE NOW</Link>
            </div>

            <div className='card'>
                <h3>Premium</h3>
                <span className='bar'></span>
                <p className='btc'>$</p>
                <p>-5 days</p>
                <p>-8 pages-</p>
                <p>-featured-</p>
                <p>-Responsive Design-</p>
                <Link to="/contact" className='btn'>PURCHASE NOW</Link>
            </div>

            <div className='card'>
                <h3>Bussiness</h3>
                <span className='bar'></span>
                <p className='btc'>$</p>
                <p>- 10 days</p>
                <p>-100 pages-</p>
                <p>-featured-</p>
                <p>-Responsive Design-</p>
                <Link to="/contact" className='btn'>PURCHASE NOW</Link>
            </div>
        </div>
        
    </div>
  )
}

export default Pricecard