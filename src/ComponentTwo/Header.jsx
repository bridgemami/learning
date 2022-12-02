import React from "react";
import logo from '../images/logo192.png';
import '../css/project2.css'

function Header () {
  return(
  <>
    <nav className="nav">
        <img src={logo} alt="React Logo" className="reactHeader"/>
        <h3 className="navItem1">ReactFacts</h3>
        <h4 className='navItem2'>React Course - Project 1</h4>
    </nav>
     </>
    )
}

export default Header;