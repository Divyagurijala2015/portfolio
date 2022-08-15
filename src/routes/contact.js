import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Heroimage2 from "../components/heroimage2";
import Form from "../components/form";

const Contact = () => {
    return (
      <div>
        <Navbar/>
        <Heroimage2 heading="CONTACT" text="Lets have a chat"/>
        <Form/>
        <Footer/>
      </div>
    )
  }
  
  export default Contact