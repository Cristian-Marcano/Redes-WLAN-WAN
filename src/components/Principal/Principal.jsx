import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Switch from '../Switch/Switch'
import BlastText from '../BlastText/BlastText'
import Scroll from '../Scroll/Scroll'
import ThreeSphere from '../ThreeSphere/ThreeSphere'
import Carousel from '../Carousel/Carousel'
import wan from "../../assets/wan.webp"
import './Principal.css'

/**
 * Assets
 */

import mongo from '../../assets/icons/lan-icon.png'
import express from '../../assets/icons/security.png'
import react from '../../assets/icons/firewall.png'
import node from '../../assets/icons/realtime.png'
import Techs from '../Techs/Techs'

const Principal = () => {
  const { theme } = useContext(GlobalContext)

  useEffect(() => {
  }, [theme])

  return (
    <div className='rootContainer'>
      <Switch />
      <Fullpage>
        <FullPageSections>
          <FullpageSection>
            <div className={`principal ${theme}`}>
              <div className="page">
                <div className="container home-page-1">
                  <div className="text-zone">
                    <BlastText text="main" className="blast-root" />
                    <h2 data-aos="zoom-in" data-aos-duration="2500" data-aos-delay="1000">Cristian Marcano / Sahir Reyes / Aurelio Rondon</h2>
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="2500" data-aos-delay="1000" className='initialArrowContainer'>
                  <FontAwesomeIcon className='initialIcon' icon={faArrowDown}/>
                  <p>Sigan Viendo</p>
                  <FontAwesomeIcon className='initialIcon' icon={faArrowDown}/>
                </div>
              </div>
              <div className='imageContainer' data-aos="fade-up" data-aos-duration="2500" data-aos-offset="-500">
                <div className='techsLogos'>
                  <img id='mongodb' src={mongo} alt="mongodb" />
                  <img id='express' src={express} alt="express" />
                  <img id='react' src={react} alt="react" />
                  <img id='node' src={node} alt="node" />
                </div>
              </div>
            </div>
          </FullpageSection>

          <FullpageSection>
            <div className={`about ${theme}`}>
              <div className='bugFix'></div>

              <div className="page">
                <div className="container home-page-2">
                  <div className="text-zone">
                    <BlastText text="about" className="blast-root" />
                    <p className='aboutText'>
                      Es un tipo de red que permite la conexión de dispositivos sin necesidad de cables físicos, utilizando tecnología de transmisión inalámbrica, como <br />
                      <span> Wi-Fi</span>.
                    </p>
                  </div>
                </div>

                <div className='threeContainer'>
                  <ThreeSphere />
                </div>
              </div>

              <Scroll />
            </div>
          </FullpageSection>

          <FullpageSection>
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

              <Scroll />
            </div>
          </FullpageSection>

          <FullpageSection>
            <div className={`about ${theme}`}>
              <div className='bugFix'></div>

              <div className="page">
                <div className="container home-page-2">
                  <div className="text-zone">
                    <BlastText text="moreabout" className="blast-root" />
                    <p className='aboutText'>
                      Es un tipo de red que cubre una gran extensión geográfica, conectando múltiples redes locales <span>LAN</span> a través de largas distancias.
                    </p>
                  </div>
                </div>

                <div className='threeContainer'>
                  <img src={wan} alt="wan"  />
                </div>
              </div>

              <Scroll />
            </div>
          </FullpageSection>

          <FullpageSection>
            <div className={`about ${theme}`} style={{ overflowX: 'hidden' }}>

              <div className='bugFix'></div>

              <div className="page">
                <div className="container home-page-2">
                  <div className="text-zone">
                    <BlastText text="skills" className="blast-root" />
                    <p className='aboutText'>
                      WAN utiliza varias tecnologias para distinto tipos de propositos.
                      Entre ellos estan la conectividad y la seguridad.
                      <br /><br />
                      Los soportes de conectividad permiten la transmision de datos en una WAN
                      asegurando que las redes esten interconectadas globalmente.
                      <br /><br />
                      Luego estan los soportes de seguridad que garantizan conexiones seguras entre trabajadores y
                      recursos empresariales.
                      <br /><br />
                      Para los trabajadores remotos <span>WAN</span> es clave porque les permite acceder a los sistemas de la empresa
                      desde cualquier lugar.
                      <br /><br /><br /><br />
                    </p>
                  </div>
                </div>  

                <div className='techsContainer'>
                  <Techs />
                </div>
              </div>
            </div>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  )
}

export default Principal