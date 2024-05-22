import React from 'react'
import ProjectContainer from '../components/ProjectContainer'
import Button from '../components/Button'
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import Icons from '../components/Icons';
import "../styles/routes/ChromeExtension.css"

// render only JSX
export default function ChromeExtension() {
  return (
    <ProjectContainer 
      title="Chrome Extension" 
      icons=
        {
          <Icons>
            <IoLogoJavascript 
              className='svg javascriptSVG' 
              data-toggle="tooltip" 
              data-placement="top" 
              title="Javascript"/>
            <FaHtml5 
              className='svg htmlSVG' 
              data-toggle="tooltip" 
              data-placement="top" 
              title="HTML"/>
            <FaCss3Alt 
              className='svg cssSVG' 
              data-toggle="tooltip" 
              data-placement="top" 
              title="CSS"/>
          </Icons>
        }
    >
      <section className='childrenContainer chromeEXTContainer'>
        <InformationalText />
        <div className='btnContainer'>
          <Button text="GitHub Repo" link="https://github.com/Josep2410/chromeExtension"/>
        </div>
      </section>
      <section className='imgContainer chromeEXTImgContainer'>
        <img className="img-fluid" src="/portfolio/chromeExtensionImg.PNG" alt="autumn leaves" />
      </section>
  </ProjectContainer>
  )
}

function InformationalText(){
  return(
    <>
      <p >
        &ensp;A code-along project as part of <a href="https://scrimba.com/" target='_blank'>Scrimba</a>'s Javascript and API course. The main takeaway from this project was learning how to make API calls using the fetch operator. During this time I was not familiar with promises, so this project definitely helped in that regard. Every time a new tab is opened, a new image is fetched from <a href="https://unsplash.com/developers" target='_blank'>Unsplash's image API</a> and data from a <a href="https://openweathermap.org/api" target='_blank'>weather api</a>.
      </p>
      
    </>
  )
}
