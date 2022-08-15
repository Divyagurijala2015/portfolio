import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Heroimage2 from '../components/heroimage2'
import Pricecard from '../components/pricecard'
import Work from '../components/work'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimage2 heading="PROJECTS" text="Some of my most recent works"/>
      <Work/>
      <Pricecard/>
      <Footer/>
    </div>
  )
}

export default Project