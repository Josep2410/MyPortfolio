import React from 'react'
import ProjectContainer from '../components/ProjectContainer'
import Button from '../components/Button'
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import Icons from '../components/Icons';
import "../styles/routes/JSDoc.css"

export default function JSDoc() {
  return (
    <ProjectContainer 
      title="Javascript Document"
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
    <section className='childrenContainer jsDocContainer'>
      <InformationalText />
      <div className='btnContainer'>
        <Button text="GitHub Repo" link="https://github.com/Josep2410/TechnicalDocumentation"/>
        <Button text="Live Site" link="https://javascript-technical-documentation-pr.netlify.app/"/>
      </div>
    </section>
    <section className='imgContainer jsDocImgContainer'>
      <img className="img-fluid" src="/portfolio/jsDocs.PNG" alt="A single page document filled with words like a textbook" />
    </section>
  </ProjectContainer>
  )
}

function InformationalText(){
  return(
    <>
      <p>
        &ensp;One of my first projects. This project is from <a href="https://www.freecodecamp.org/" target="_blank">FreeCodeCamp</a>'s HTML and CSS course. The purpose of this project was to use HTML and CSS and make a webpage that resembles a Javascript documentation page.
      </p>
      <p>
        &ensp;This webpage isn't the prettiest and there are mistakes. However, this project serves as a great reminder we all started as a beginner once, and that time is required to further develop our skills.
      </p>
      <p className='dateCompleted'>
        <em>Date Completed : JAN '23</em>
      </p>
    </>
  )
}