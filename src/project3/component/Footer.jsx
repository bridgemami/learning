import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faFacebook, faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

export default function Footer () {
    return (
       <footer className='footer'>
        <FontAwesomeIcon icon={faTwitter} className='footer_fa'/>
        <FontAwesomeIcon icon={faFacebook} className='footer_fa'/>
        <FontAwesomeIcon icon={faInstagram} className='footer_fa'/>
        <FontAwesomeIcon icon={faLinkedin} className='footer_fa'/>
        <FontAwesomeIcon icon={faGithub} className='footer_fa'/>
       </footer> 
    )
}