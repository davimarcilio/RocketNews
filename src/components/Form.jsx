import React from 'react';
import Send from '../assets/send.svg';
export default function Form() {
    return (
        <form action="https://gmail.us11.list-manage.com/subscribe/post?u=546b5d1aa43417e7644655761&amp;id=97af87a5e6&amp;f_id=00039ae0f0"
            method="post" target="_blank" className='mt-12 flex flex-col gap-4 validate' id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form">
            <h1 className='text-form-color font-Spartan font-bold text-sm'>Insira seu e-mail:</h1>
            <div className='relative h-12 max-md:w-full w-[120%] drop-shadow-3xl'>
                <span className='h-full bg-title-color w-1 absolute'></span>
                <input name="EMAIL" id="mce-EMAIL" required className='p-4 h-full w-full required email focus:outline-none focus:invalid:ring-red-500 focus:ring-purple-400 focus:ring' type="email" placeholder='oi@rocketseat.com' />
                <button name="subscribe" id="mc-embedded-subscribe" type='submit' className='transition-all absolute right-0 top-0 bg-button-color p-3 hover:bg-button-color-hover'><img src={Send} alt="send" /></button>
            </div>
            <div className='hiddenForm' aria-hidden="true"><input type="text" name="b_546b5d1aa43417e7644655761_97af87a5e6" tabindex="-1" value="" /></div>
        </form >
    )
}
