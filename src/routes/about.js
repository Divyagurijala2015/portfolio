import React from "react";
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Heroimage2 from "../components/heroimage2";
import Aboutcontent from "../components/aboutcontent";

const About = () => {
    return (
      <div>
        <Navbar/>
        <Heroimage2 heading="ABOUT" text="Im a friendly front-end developer"/>
        <Aboutcontent/>
       <Footer/>
      </div>
    )
  }
  
  export default About