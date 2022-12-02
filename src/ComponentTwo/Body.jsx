import React from 'react';
import '../css/project2.css'

export default function Body () {
    return (
        <section className='blueish'>
            <h1 className='white header'>Fun Facts about React</h1>
            <ul className=' blueBullet grey'>
                <li>Was First released in 2013</li>
                <li>Was Originally created Jordan Walker</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is Maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </section>
    )
}