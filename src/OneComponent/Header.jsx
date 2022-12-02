import React from "react";
import logo from '../images/logo192.png'

function Header() {
    return ( 
        <>   
        <nav className="navinfo">
       <img className= "image" src= {logo} alt="React logo" />
            <ul className="navitems">
                <li><a href="https://www.google.com">Pricing</a></li>
                <li><a href="https://www.google.com">About</a></li>
                <li><a href="https://www.google.com">Contact</a></li>
            </ul>
        </nav>
        </>
    )
 }

 export default Header;
