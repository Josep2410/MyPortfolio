import React from 'react'
import RESUME from '../../assets/2024_Resume.pdf'
import '../../styles/components/homepage/SectionContact.css'

// Only rendering JSX in this file
export default function ContactSection() {
  return (
    <section id="contact" className='container-sm contactSection'>
      <ul className='contactInfo'>
        <li onClick={() => window.open('mailto:josephpinoy2@yahoo.com')}>
          EMAIL
        </li>
        <li>
          <a 
            target="_blank" rel="noopener noreferrer"
            href="https://github.com/Josep2410" 
          >
            GITHUB
          </a>
        </li>
        <li>
          <a href={RESUME} download="JOSEPH MORENO RESUME" target="_blank">RESUM&#200;</a>
        </li>
        <li>
          <a 
            target="_blank" rel="noopener noreferrer"
            href="https://www.linkedin.com/in/joseph-moreno-47038a164/" 
          >
            LINKEDIN
          </a>
        </li>
        <li>
          <a  
            target="_blank" rel="noopener noreferrer" 
            href="https://www.goodreads.com/user/show/116178641-joseph"
          >
            GOODREADS
          </a>
        </li>
      </ul>
    </section>
  )
}
