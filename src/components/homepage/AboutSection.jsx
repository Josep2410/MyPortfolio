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
       <li>Self taught web developer. I hope to have a career in web development.</li>
       <li>I love spontaneous adventures and I enjoy reading.</li>
       <li>  
        Skill Set : 
        <DisplayIcons />
       </li>
       <li>  
        Dabbled in : 
        <DisplayMoreIcons />
       </li>
      </ul>
    </>
  )
}

function DisplayIcons(){
  return(
    <div className='displayIconsContainer'>
    
      <span >
        <FaReact className='reactSVG'/> 
        React 
      </span>
      <span>
        <img src={figmaLogo} alt="" />
        Figma
      </span>
      <span>
        <IoLogoJavascript className='javascriptSVG'/>
        Javascript
      </span>
      <span>
       <FaHtml5 className='htmlSVG'/>
       HTML
      </span>
      <span>
        <FaCss3Alt className='cssSVG'/>
        CSS
      </span>
    </div>
  )
}

function DisplayMoreIcons(){
  return(
    <div className='moreIconsContainer'>
       <span>
        <FaBootstrap className='bootstrapSVG'/>
        BootStrap
      </span>
      <span >
        <IoLogoFirebase className='firebaseSVG'/>
        Firebase
      </span>
      <span >
        <FaNodeJs className='nodejsSVG'/>
        NodeJS
      </span>
      <span >
        <BiLogoMongodb className='mongodbSVG'/>
        MongoDB
      </span>
    </div>
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