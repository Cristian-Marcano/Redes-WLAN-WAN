import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../components/About/About'
import Layout from '../components/Layout'
import Principal from '../components/Principal/Principal'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'

const Rutas = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Principal/>}/>
                <Route path='/WLAN' element={<About text="about">
                  Es un tipo de red que permite la conexión de dispositivos sin necesidad de cables físicos, utilizando tecnología de transmisión inalámbrica, como <br />
                  <span> Wi-Fi</span>.
                </About>}/>
                <Route path='/Soporte' element={<Skills/>}/>
                <Route path='/Consideraciones' element={<Projects/>}/>
                <Route path='/WAN' element={<About text="moreabout">
                  Es un tipo de red que cubre una gran extensión geográfica, conectando múltiples redes locales <span>LAN</span> a través de largas distancias.
                </About>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Rutas