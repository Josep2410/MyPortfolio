import React from 'react'
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import figmaLogo from '../../assets/figmaLogo.svg'
import { FaGitAlt } from "react-icons/fa";
import "../../styles/components/homepage/SectionAbout.css"

// Just rendering JSX in this file
export default function AboutSection() {
  return(
    <section id="about" className='aboutSection'>
      <AboutMeText />
      <PhotoAuthor />
    </section>
  )
}

function AboutMeText(){
  return(
    <>
      <h1 >Who I Am</h1>      
      <ul className='info'>
        <li>I am online math tutor and a self taught web developer. I have been teaching kids online for over a year, while at the same time developing my skills to become a front end developer. I have dedicated hundreds of hours to learning and have completed tens of small projects. I compiled a small list of projects I am the most proud of. Check the next page to see them. 
        </li>
        <li>  
          My skill set includes : 
          <DisplayIcons />
        </li>
        <li>  
          I have dabbled in : 
          <DisplayMoreIcons />
        </li>
        <li>I am also a firm believer in daily exercise, a jigsaw puzzle enthusiast, and an avid reader.</li>
      </ul>
    </>
  )
}


function DisplayIcons(){
  return(
    <ul className='displayIconsContainer'>
      <li >
        <FaReact className='reactSVG'/> 
        React 
      </li>
      <li>
        <img src={figmaLogo} alt="figma logo" />
        Figma
      </li>
      <li>
        <IoLogoJavascript className='javascriptSVG'/>
        Javascript
      </li>
      <li>
       <FaHtml5 className='htmlSVG'/>
       HTML
      </li>
      <li>
        <FaCss3Alt className='cssSVG'/>
        CSS
      </li>
      <li>
        <FaGitAlt className='gitSVG'/>
        Git
      </li>
    </ul>
  )
}



function DisplayMoreIcons(){
  return(
    <ul className='moreIconsContainer'>
      <li>
        <FaBootstrap className='bootstrapSVG'/>
        BootStrap
      </li>
      <li >
        <IoLogoFirebase className='firebaseSVG'/>
        Firebase
      </li>
      <li >
        <FaNodeJs className='nodejsSVG'/>
        NodeJS
      </li>
      <li >
        <BiLogoMongodb className='mongodbSVG'/>
        MongoDB
      </li>
    </ul>
  )
}

function PhotoAuthor(){
  return (
    <>
      <p className='author'>
          Photo by 
          <a 
            href="https://unsplash.com/@glenncarstenspeters?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" 
            target="_blank"
          >
            Glenn Carstens-Peters
          </a> 
            on 
          <a 
            href="https://unsplash.com/photos/person-using-macbook-pro-npxXWgQ33ZQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank"
          >
            Unsplash
          </a>
        </p>
    </>
  )
}