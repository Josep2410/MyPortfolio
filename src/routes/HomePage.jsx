import React from 'react'
import HomeSection from '../components/homepage/HomeSection';
import AboutSection from '../components/homepage/AboutSection';
import ProjectsSection from '../components/homepage/ProjectsSection';
import ContactSection from '../components/homepage/ContactSection'
import "../styles/routes/HomePage.css" 
/* 
  ^^ Universal styles for HomeSection , AboutSection , ProjectsSection, and ContactsSection 
*/

export default function HomePage() {
  // Display these four components in succession at the root URL
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}





