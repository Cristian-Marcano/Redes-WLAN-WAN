import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import Switch from '../Switch/Switch'
import BlastText from '../BlastText/BlastText'
import Carousel from '../Carousel/Carousel'
import './Projects.css'

/**
 * Videos
 */

const Projects = () => {

  const { theme } = useContext(GlobalContext)

  useEffect(() => {
  }, [theme])

  return (
    <div className={`projects ${theme}`}>
      <Switch />

      <div className={`projects ${theme}`} style={{height: '100vh'}}>
        <div className='bugFix'></div>

          <div className="page">
            <div className="container home-page-3">
              <div className="text-zone">
                <BlastText text="projects" className="blast-root" />
                <p className='projectsText'>
                  Que se deben tomar al elaborar o usar <span>WLAN</span>.
                </p>
              </div>
            </div>

            <Carousel />
        </div>
      </div>
    </div>
  )
}

export default Projects