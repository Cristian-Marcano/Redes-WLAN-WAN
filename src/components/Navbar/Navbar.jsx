import React, { useContext, useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext'
import AOS from 'aos'
import logoBlack from '../../assets/icons/icon-black-100.png'
import logoWhite from '../../assets/icons/icon-white-100.png'
import './Navbar.css'

const Navbar = () => {

  const { theme, activeNavbar, setActiveNavbar, emptyFields, setLoaderState, setChange, change } = useContext(GlobalContext)

  const navigate = useNavigate()

  useEffect(() => {
    AOS.init()
  }, [theme, activeNavbar])

  return (
    <div
      className={`${!activeNavbar ? 'navbar' : 'navbar activeNavbar'} ${theme}`}
      data-aos="fade-right"
      data-aos-delay="1500">
      <div className='navbarLogo'>
        <div
        className='navbarImage'
        onClick={() => {
          setChange(!change)
          setLoaderState(0)
          setTimeout(()=>navigate('/'), 500)
          setActiveNavbar(false)
          emptyFields()
        }}>
          <img src={theme === 'dark' ? logoWhite : logoBlack} alt="andy canales developer logo" />
        </div>
        <div className='navbarTitle'>
          Redes II
        </div>
      </div>

      <div className='navbarMenu'>
        <ul>
          <li onClick={() => {
            setChange(!change)
            setLoaderState(0)
            setTimeout(()=>navigate('/WLAN'), 500)
            setActiveNavbar(false)
            emptyFields()
          }}>
            WLAN
          </li>
          <li onClick={() => {
            setChange(!change)
            setLoaderState(0)
            setTimeout(()=>navigate('/Consideraciones'), 500)
            setActiveNavbar(false)
            emptyFields()
          }}>
            Consideraciones
          </li>
          <li onClick={() => {
            setChange(!change)
            setLoaderState(0)
            setTimeout(()=>navigate('/WAN'), 500)
            setActiveNavbar(false)
            emptyFields()
          }}>
            WAN
          </li>
          <li onClick={() => {
            setChange(!change)
            setLoaderState(0)
            setTimeout(()=>navigate('/Soporte'), 500)
            setActiveNavbar(false)
            emptyFields()
          }}>
            Soporte
          </li>
        </ul>
      </div>

      <div className='navbarSocial'>
      </div>
    </div>
  )
}

export default Navbar