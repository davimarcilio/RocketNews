import React from 'react';
import Logo from '../assets/logo.svg';

export default function Header() {
    return (
        <header>
            <img className='mt-12 w-96' src={Logo} alt="logo" />
        </header>
    )
}