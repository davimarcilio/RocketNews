import React from 'react';
export default function RightImg(props) {
    return (<section className='absolute top-0 right-0 w-9/12 h-full max-md:hidden'>
        <img className='w-full h-full' src={props.img} alt="Old Man" />
    </section>)
}