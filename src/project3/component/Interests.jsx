import React from 'react';

export default  function Interests (props) {
    return (
        <>
         <div className='interests'>
        <h2 className='interests_heading'>Interests</h2>
        <p className='interests_par'>{props.fiction} expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
        </>
    )
}