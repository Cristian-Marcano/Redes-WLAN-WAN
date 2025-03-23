import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import Switch from '../Switch/Switch'
import BlastText from '../BlastText/BlastText'
import './About.css'
import ThreeSphere from '../ThreeSphere/ThreeSphere'
import wan from "../../assets/wan.webp"

const About = ({text, children}) => {
  const { theme } = useContext(GlobalContext)

  useEffect(() => {
  }, [theme])

  return (
    <div className={`about ${theme}`}>
      <Switch/>
      <div className="page">
        <div className="container home-page-1">
          <div className="text-zone">
            <BlastText text={text} className="blast-root" />
            <p className='aboutText'>
              {children}
            </p>
          </div>
        </div>

        <div className='threeContainer'>
          {text==='moreabout' ? <img src={wan} alt="wan"  /> : <ThreeSphere/> }
        </div>
      </div>
    </div>
  )
}

export default About