import React from 'react';
import Portrait from '../../images/logo512.png'
import '../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

  


export default function Info() {
    return (
        <>
        <img src= {Portrait}  alt='portrait'  className='portrait'/>
        <h1 className='name'>
            Michael Bridgeman
        </h1>
        <h3 className='position'>
            Frontend Developer
        </h3>
        <p className='site'>michaelbridgeman.website</p>
        <button className='big'><FontAwesomeIcon icon={faEnvelope} className='env' />Email</button>
        </>
    )
}