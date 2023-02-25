import React from 'react'
import {FaGithub,FaMailBulk,FaInstagram} from 'react-icons/fa'

const Social = () => {
  return (
    <ul className='social'>
        <li><FaGithub style={{color:"#00B2FF"}} /></li>
        <li><FaMailBulk style={{color:"#00FF47"}} /></li>
        <li><FaInstagram style={{color:"#FFD913"}} /></li>
    </ul>
  )
}

export default Social