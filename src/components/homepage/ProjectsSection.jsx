import React from 'react'
import { Link } from 'react-router-dom';
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import figmaLogo from '../../assets/figmaLogo.svg'
import '../../styles/components/homepage/SectionProjects.css'

export default function ProjectsSection() {

  /* When a Link is clicked, scroll view window to top of page. */
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <section 
      id="projects" 
      className='container-sm projectSection'
    >
      <div className='layoutContainer'>
      
        <Link onClick={scrollToTop} to={`/projects/portfolio`} className="box1" >
            <h1 className='titleName'>PORTFOLIO</h1>
            <p className="technologyIcons">
              <FaReact className='miniSize reactSVG mx-1'/>
              <FaBootstrap className='miniSize bootstrapSVG'/>
              <img className="miniSize" src={figmaLogo} alt="Figma Logo" />
            </p>
        </Link>
        
        <Link onClick={scrollToTop} to={`/projects/foodMobileApp`} className="box2">
            <h2 className='titleName'>FOOD MOBILE APP</h2>
            <p className="technologyIcons">
              <FaReact className=' miniSize reactSVG mx-1'/>
              <IoLogoFirebase className='miniSize firebaseSVG'/>
              <img className="miniSize" src={figmaLogo} alt="Figma Logo" />
            </p>
        </Link>

        <Link onClick={scrollToTop} to={`/projects/weAreTheChampions`} className="box3">
            <h3 className='titleName'>WE ARE THE CHAMPIONS</h3>
            <p className="technologyIcons">
              <IoLogoJavascript className='miniSize javascriptSVG'/>
              <IoLogoFirebase className='miniSize firebaseSVG'/>
            </p>
        </Link>

        <Link onClick={scrollToTop} to={`/projects/chromeExtension`} className="box4">
            <h3 className='titleName'>CHROME EXTENSION</h3>
            <p className="technologyIcons">
              <IoLogoJavascript className='miniSize javascriptSVG'/>
              <FaHtml5 className='miniSize htmlSVG'/>
              <FaCss3Alt className='miniSize cssSVG'/></p>
        </Link>

        <div className='miniContainer'>

            <Link onClick={scrollToTop} to={`/projects/javascriptDocumentation`}className="box5">
              <h4 className='titleName'>JAVASCRIPT DOCUMENTATION</h4>
              <p className="technologyIcons">
                
                <FaHtml5 className='miniSize htmlSVG'/>
                <FaCss3Alt className='miniSize cssSVG'/>
              </p>
            </Link>

            <Link onClick={scrollToTop} to={`/projects/yahooHomepage`} className="box6">
                <h4 className='titleName'>HOMEPAGE</h4>
                <p className="technologyIcons">
                  <FaHtml5 className='miniSize htmlSVG'/>
                  <FaCss3Alt className='miniSize cssSVG'/>
                </p>
            </Link>
        </div>
      </div>
    </section>
  )
}
