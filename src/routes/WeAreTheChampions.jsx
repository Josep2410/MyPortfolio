import React from 'react'
import ProjectContainer from '../components/ProjectContainer'
import Button from '../components/Button'
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoFirebase } from "react-icons/io5";
import Icons from '../components/Icons';
import "../styles/routes/WeAreTheChampions.css"

export default function WeAreTheChampions() {
  return (
    <ProjectContainer 
      title="We are the Champions" 
      icons=
        {
          <Icons>
            <IoLogoJavascript 
              className='svg javascriptSVG'
              data-toggle="tooltip" 
              data-placement="top" 
              title="Javascript"
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
    <section className='childrenContainer theChampionsContainer'>

      <InformationalText />

      <div className='btnContainer'>
        <Button text="GitHub Repo" link="https://github.com/Josep2410/weAreTheChampionsProject"/>
        <Button text="Live Site" link="https://wearethechampionsfirebaseproject.netlify.app/"/>
      </div>

    </section>

    <section className='imgContainer theChampionsImgContainer'>
      <img className="img-fluid" src="/portfolio/weAreTheChampionsImg2.PNG" alt="Multiple input entries for user" />
    </section>
    
  </ProjectContainer>
  )
}

function InformationalText(){
  return(
    <>
      <p>
        &ensp;This project was a solo project to <a href="https://scrimba.com/" target='_blank'>Scrimba</a>'s Introduction to Firebase course. It uses <a href="https://firebase.google.com/" target='_blank'>Firebase</a> as the back-end database, and sends data to the front-end, Javascript application. Additional list of requirements included : 
        create, read, update, and delete data from the database in real-time.
      </p>
      <p>
        &ensp;The theme of this application was Freddie Mercury and written endorsements. A user can write an endorsement and have it displayed for other users to see. Endorsements can also be liked.
      </p>
      <p>
        &ensp; The end result is an application that uses <a href="https://firebase.google.com/" target='_blank'>Firebase</a> as a database that can perform create, read, update and delete operations in real-time.
      </p>
      <p>
        <em>
          Disclaimer : At this time, only data from the database can be read. Creating, updating , and deleting operations are reserved only for the owner at this time.
        </em>
      </p>
    </>
  )
}
