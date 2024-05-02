import React from 'react'
import "../../styles/components/homepage/SectionHome.css" 
// exclusive styling for this component

export default function HomeSection() {

  return(
        <section id="home" className='homeSection'>
          <h1 className='display-1'>JOSEPH MORENO</h1>
          <h3 className='display-6'>FRONT END DEVELOPER</h3>
          <p className='author'>
            Photo by 
            <a 
              href="https://unsplash.com/@sadswim?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" 
              target="_blank"
            >
              Ian Dooley
            </a> 
            on
            <a 
              href="https://unsplash.com/photos/cup-of-coffee-near-macbook-pro-DJ7bWa-Gwks?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" 
              target="_blank"
            >
              Unsplash
            </a>
          </p>
        </section>

  )
}
  
