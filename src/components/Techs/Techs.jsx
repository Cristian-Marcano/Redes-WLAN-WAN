import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import './Techs.css'

/**
 * Techs
 */

import html from '../../assets/icons/fibra-optica.png'
import css from '../../assets/icons/satelital.png'
import js from '../../assets/icons/mobile-network.png'

import java from '../../assets/icons/vpn.png'
import node from '../../assets/icons/protocol.png'
import mongo from '../../assets/icons/boost.png'

import aws from '../../assets/icons/download.svg'
import firebase from '../../assets/icons/aws.png'
import git from '../../assets/icons/teams.png'

const Techs = () => {
    const { theme } = useContext(GlobalContext)

    useEffect(() => {
    }, [theme])

    return (
        <div className={`techs ${theme}`}>
            <div>
                <h3>Conectividad</h3>
                <div className='frontend'>
                    <div className='techItem'>
                        <img src={html} alt="html" />
                        <p>Fibra optica</p>
                    </div>
                    <div className='techItem'>
                        <img src={css} alt="css" />
                        <p>Redes Satelital</p>
                    </div>
                    <div className='techItem'>
                        <img src={js} alt="js" />
                        <p>Redes Celulares</p>
                    </div>
                </div>
            </div>

            <div>
                <h3>Seguridad</h3>
                <div className='backend'>
                    <div className="techItem">
                        <img src={java} alt="Java" />
                        <p>VPN</p>
                    </div>
                    <div className="techItem">
                        <img src={node} alt="Node" />
                        <p>MPLS</p>
                    </div>
                    <div className="techItem">
                        <img src={mongo} alt="MongoDB" />
                        <p>SD-WAN</p>
                    </div>
                </div>
            </div>

            <div>
                <h3>Herramientas</h3>
                <div className='extra'>
                    <div className="techItem">
                        <img src={aws} alt="AWS" />
                        <p>Parsec</p>
                    </div>
                    <div className="techItem">
                        <img src={firebase} alt="Firebase" />
                        <p>AWS</p>
                    </div>
                    <div className="techItem">
                        <img src={git} alt="Git" />
                        <p>Microsoft Teams</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Techs