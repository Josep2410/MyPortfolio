import React , {useEffect } from 'react'
import { Outlet , useLocation } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';
import useWindowSizeHook from '../hooks/useWindowSizeHook'
import SideMenu from './SideMenu'
import "../styles/components/Layout.css"

export default function Layout() {
  
  // grab window's width
  const {width} = useWindowSizeHook() 

  let isActive = {}
  const location = useLocation()

  /*  
  render NavigationBar or SideMenu depending on window's width 
  and persist render throughout all routes - layout.
  */

  return (
    <div className='container-fluid p-0 '>
      <header>
        { width >= 992 ? <NavigationBar /> : <SideMenu name="end" placement="end"/> }
      </header>
      <Outlet />
    </div>
  )
}

function NavigationBar(){
  return (
      <nav >
        <NavHashLink 
          smooth 
          to="/#home"  
          className={location.hash === "#home" ? "selected" : ""}
        > 
          Home
        </NavHashLink>

        <NavHashLink 
          smooth 
          to="/#about" 
          className={location.hash === "#about" ? "selected" : ""}
        > 
          About
        </NavHashLink>

        <NavHashLink 
          smooth 
          to="/#projects" 
          className={
            location.hash === "#projects" || location.pathname.includes('projects')? "selected" : ""
          }
        >
          Projects
        </NavHashLink>

        <NavHashLink 
          smooth
          to="/#contact" 
          className={location.hash === "#contact" ? "selected" : ""}
        > 
          Contact
        </NavHashLink>
      </nav>
  )
}