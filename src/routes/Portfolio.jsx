import React from 'react'
import ProjectContainer from '../components/ProjectContainer'
import { HashLink } from 'react-router-hash-link'
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import Icons from "../components/Icons"
import Button from '../components/Button';
import "../styles/routes/Portfolio.css"
// Additional Styling in "../styles/components/ProjectContainer.css"

export default function Portfolio() {
  return (
    <ProjectContainer 
      title="Portfolio"
      icons=
        {
          <Icons>
            <FaReact 
              className='svg reactSVG' 
              data-toggle="tooltip" 
              data-placement="top" 
              title="React"
            />
            <FaBootstrap 
              className='svg bootstrapSVG' 
              data-toggle="tooltip" 
              data-placement="top" 
              title="Bootstrap"
            />
          </Icons>
        }
    >
      <section className='childrenContainer portfolioContainer'>
        <InformationalText />
        <div className='btnContainer'>
          <Button text="GitHub Repo" link="https://github.com/Josep2410/MyPortfolio"/>
          <Button text="Live Site" link="https://josephmorenoportfolio.netlify.app/"/>
        </div>
      </section>
      <section className='imgContainer portfolioImgContainer'>
          <img className="img-fluid" src="/portfolio/portfolioImgX.PNG" alt="Desk materials" />
      </section>
    </ProjectContainer>
  )
}


function InformationalText(){
  return(
    <>
      <p>
          &ensp; This project took me little over two weeks from start to finish. My approach to this project was handle the design first then work on implementation.
        </p>
       <p>
          &ensp;I used <a href="https://www.figma.com/" target="_blank">Figma</a> to help create the layouts and design. Working on the design first was a tremendous time-saver as I could see how my website would look before building it. <a href="https://www.figma.com/file/fNkv3BQMszl4LfC9tLi5w9/Portfolio?type=design&node-id=0%3A1&mode=design&t=OYA49ITffxDupgch-1" target='_blank'> Portfolio design files .</a> 
       </p>
        <p>
          &ensp; The implementation phase consisted of using the design files and create a functional website. For the front-end, I used <a href="https://react.dev/" target="_blank">React</a> to help structure and build functionalities, <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a> to handle responsive design, and <a href="http://www.netlify.com/" target="_blank">Netlify</a> to host this project.
        </p>
        <p>
          &ensp;The end result is a functioning website that shares information <HashLink smooth to="/#about" > about myself</HashLink>, showcases some of my <HashLink smooth to="/#projects">previous projects</HashLink>, and <HashLink smooth to="/#contact">my contact info</HashLink>.
        </p>
        <p className='dateCompleted'>
          <em>Date Completed : MAY'24</em>
        </p>
    </>
  )
}