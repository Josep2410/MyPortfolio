import React from 'react'
import { Outlet } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import useWindowSizeHook from '../hooks/useWindowSizeHook'
import SideMenu from './SideMenu'
import "../styles/components/Layout.css"

export default function Layout() {
  
  // grab window's width
  const {width} = useWindowSizeHook() 

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
        <HashLink smooth to="/#home"> Home</HashLink>
        <HashLink smooth to="/#about"> About</HashLink>
        <HashLink smooth to="/#projects"> Projects</HashLink>
        <HashLink smooth to="/#contact"> Contact</HashLink>
      </nav>
  )
}