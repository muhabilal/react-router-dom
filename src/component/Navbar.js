import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <ul className='navbar'>
                <li><NavLink className={'nav-bar-link'} to={'/about'}>About</NavLink></li>
                <li> <NavLink className={'nav-bar-link'} to={'/'}>Home</NavLink></li>
                <li> <NavLink className={'nav-bar-link'} to={'/contact'}>contact</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar
