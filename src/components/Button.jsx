import React from 'react'
import "../styles/components/Button.css"

// render an anchor element styled as a button
export default function Button({text, link}) {
  return (
   <a href={link} target='_blank' className='BtnLink'>{text}</a>
  )
}
