import React from 'react'
import ProjectContainer from '../components/ProjectContainer'
import Button from '../components/Button'
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import Icons from '../components/Icons';
import "../styles/routes/FoodMobileApp.css"

export default function FoodMobileApp() {
  return (
    <ProjectContainer 
      title="Food Mobile App"
      icons=
        {
          <Icons>
            <FaReact 
              className='svg reactSVG' 
              data-toggle="tooltip" 
              data-placement="top" 
              title="React"/>
            <FaBootstrap 
              className='svg bootstrapSVG' 
              data-toggle="tooltip" 
              data-placement="top" 
              title="Bootstrap"
            />
            <IoLogoFirebase 
              className='svg firebaseSVG' 
              data-toggle="tooltip" 
              data-placement="top" 
              title="Firebase"
            />
          </Icons>
        } 
    >
      <section className='childrenContainer foodMobileAppContainer'>
        
        <InformationalText />
        <div className='btnContainer'>
          <Button text="Github Repo" link="https://github.com/Josep2410/mobileApp"/>
          <Button text="Live Site" link="https://foodmobileapplication.netlify.app/"/>
        </div>
      </section>
      <section className='imgContainer foodMobileAppImgContainer'>
        <img className="img-fluid" src="/portfolio/FoodMobileApp2.PNG" alt="pupusas" />
      </section>
    </ProjectContainer>
  )
}

function InformationalText(){
  return(
    <>
      <p>
          &ensp;I finished <a href="https://scrimba.com/" target="_blank">Scrimba</a>'s Advance React course sometime in the end of August 2023, and I wanted to create a project that would showcase what I learned. The caveat, however would be no training wheels. Everything from design to functionality had to originate from me.
        </p>
        <p>
         &ensp;In my first iteration, I didn't know any design tools, like <a href="https://www.figma.com/" target='_blank'>Figma</a>. There was no planning process. I made everything up as I went. This resulted in spending long hours re-designing and re-writing previous work. This was my first major <a href="https://react.dev/" target='_blank'>React</a> project.
        </p>
        <p>
          &ensp; As time passed, I did the project again ...and again ...and again. Every time I restarted , previous ideas and concepts were reinforced and lesser code was written. I was astounded how much simpler and deliberate my code became. Each iteration was better than the last.
        </p>
        <p>
          &ensp;The end result is an easy-to-use application designed for mobile screens. Users can browse a catelog of menu items, add and remove items from their cart, and checkout when they are ready. <a href="https://www.figma.com/file/ST8ugsf6aWwmNSAiEswxQV/pupuseria?type=design&node-id=0%3A1&mode=design&t=3ODZGjHE3anX1zfT-1" target='_blank'>Figma design files</a>.
        </p>
    </>
  )
}