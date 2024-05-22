import React from 'react'
import ProjectContainer from '../components/ProjectContainer'
import Button from '../components/Button'
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import Icons from '../components/Icons';
import "../styles/routes/YahooHomepage.css"

export default function YahooHomePage() {
  return (
    <ProjectContainer 
      title="Yahoo Homepage" 
      icons=
        {
          <Icons>  
            <FaHtml5 
              className='svg htmlSVG'
              data-toggle="tooltip" 
              data-placement="top" 
              title="HTML"
            />
            <FaCss3Alt 
              className='svg cssSVG' 
              data-toggle="tooltip" 
              data-placement="top" 
              title="CSS"
            />
          </Icons>
        }
    >
    <section className='childrenContainer yahooHPContainer'>
        
      <InformationalText />
      <div className='btnContainer'>
        <Button text="GitHub Repo" link="https://github.com/Josep2410/004YahooWebpage"/>
        <Button text="Live Site" link="https://yahoohomepagereplica.netlify.app/"/>
      </div>
    </section>
    <section className='imgContainer yahooHPImgContainer'>
      <img className="img-fluid"src="/portfolio/yahooHomePage.PNG" alt="yahoo look-a-like" />
    </section>
  </ProjectContainer>
  )
}

function InformationalText(){
  return(
    <>
      <p>
        &ensp; My first ever web development project. I had just completed <a href="https://www.youtube.com/watch?v=G3e-cpL7ofc" target="_blank">SuperSimpleDev's HTML and CSS course</a> on <a href="https://www.youtube.com/" target='_blank'>Youtube</a>, and I wanted to do a project that would showcase my new HTML and CSS skills. As a result, I decided to make a replica of Yahoo's homepage. I did every possible mistake a beginner could make : div soups, not using semantic HTML, non-responsive design, and not knowing how to properly structure my HTML. Nevertheless, I created a decent looking static webpage for my first project.
      </p>
      <p>
        &ensp; This document serves a great reminder how far I've come. From only using HTML and CSS for static webpages to being able to work with design tools, like <a href="https://www.figma.com/" target="_blank">Figma.</a>, and front-end technologies such as <a href="https://react.dev/" target="_blank">React</a> and  <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a>.
      </p>
    </>
  )
}