import React from 'react';
import '../style.css';

export default function About(props) {
    return (
        <div className='about'>
        <h2 className='about_heading'>About</h2>
        <p className='about_par'>I am a {props.position} with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
    )
}