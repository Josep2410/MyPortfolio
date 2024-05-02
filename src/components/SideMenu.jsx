import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { GiHamburgerMenu } from "react-icons/gi";
import { HashLink } from 'react-router-hash-link'
import '../styles/components/SideMenu.css'

/* 
  This component modified from Bootstrap - offcanvas 
  https://getbootstrap.com/docs/5.0/components/offcanvas/
*/

export default function SideMenu({...props}) {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <GiHamburgerMenu className="hamburger-svg" onClick={handleShow}/>

      <Offcanvas show={show} onHide={handleClose} {...props} className="sideMenu">
        <Offcanvas.Header closeButton className='closeBtn'>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className='links'>
            <HashLink 
              smooth 
              to="/#home" 
              onClick={handleClose}
            > 
              Home
            </HashLink>
            <HashLink 
              smooth 
              to="/#about" 
              onClick={handleClose}
            > 
              About
            </HashLink>
            <HashLink 
              smooth 
              to="/#projects" 
              onClick={handleClose}
            > 
              Projects
            </HashLink>
            <HashLink 
              smooth 
              to="/#contact" 
              onClick={handleClose}
            > 
              Contact
            </HashLink>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

