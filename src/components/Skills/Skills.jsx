import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import BlastText from '../BlastText/BlastText'
import Switch from '../Switch/Switch'
import Techs from '../Techs/Techs'
import './Skills.css'

const Skills = () => {
    const { theme } = useContext(GlobalContext)

    useEffect(() => {
    }, [theme])

    return (
        <div className={`about ${theme}`} style={{ overflowX: 'hidden' }}>
            <Switch />

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
                            <br /><br />
                            
                        </p>
                    </div>
                </div>

                <div className='techsContainer'>
                    <Techs />
                </div>
            </div>
        </div>
    )
}

export default Skills