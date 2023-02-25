import React from 'react'
import './styles/Stories.css'
import NavBar from './NavBar.jsx'
import Social from './Social.jsx'
import BannerSection from './BannerSection.jsx'
import SkillsSection from './SkillsSection.jsx'

const Stories = () => {
  return (
    <>
    <header>
        <NavBar/>
    </header>
    <Social/>
    <BannerSection/>
    <SkillsSection/>
    </>
  )
}

export default Stories