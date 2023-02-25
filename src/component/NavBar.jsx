import React from 'react'
import './styles/NavBar.css'
import signatureSrc from '../images/signature.png'

const NavBar = () => {
  return (
    <nav>
        <img src={signatureSrc} alt="logo"/>
        <ul>
            <li className='active'>Stories</li>
            <li>Works</li>
            <li>Contacts</li>
        </ul>
    </nav>
  )
}

export default NavBar