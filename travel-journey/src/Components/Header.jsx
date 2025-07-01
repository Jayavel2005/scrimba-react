import React from 'react'
import globeImg from "../assets/globe.png"
const Header = () => {
    return (
        <header className='header'>
            <nav  className='navbar'>
                <img src={globeImg} alt="globe Image" className='nav-image' />
                <small className='nav-text'>my travel journey.</small>
            </nav>
        </header>
    )
}

export default Header
