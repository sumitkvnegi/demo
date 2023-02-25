import React from 'react'
import girlSrc from '../images/girl.png'
import './styles/BannerSection.css'
import arrowSrc from '../images/arrow.png'

const BannerSection = () => {
  return (
    <section className='banner'>
        <img src={arrowSrc} alt="arrow" className='arrow' />
        <img className='owner' src={girlSrc} alt="owner" width={300} />
        <p>Hi, I’m a front end developer from india and i have profecient skills on web development technologies.</p>
        <div className='speciality'>
            <span>React Developer</span>
            <span>UI/UX Expert</span>
        </div>
        <button>Download CV</button>
    </section>
  )
}

export default BannerSection