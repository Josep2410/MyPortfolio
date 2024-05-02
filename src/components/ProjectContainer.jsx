import React from 'react'
import "../styles/components/ProjectContainer.css"

// Purpose is for the /projects/:projectName routes - see App.jsx
export default function ProjectContainer({title, icons, children}) {
  return (
    <div className='projectContainer'>
     <div className='container-sm contentContainer'>
     <h1 className='title'>{title} {icons}</h1>
        {children}
     </div>
    </div>
  )
}
