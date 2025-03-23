import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import './Switch.css'

const Switch = () => {

  const {theme, setTheme} = useContext(GlobalContext)

  useEffect(() => {
  }, [theme])

  return (
    <div className={`switch ${theme}`}>
      <div className='switchText'>{theme === 'light' ? 'Apaga' : 'Enciende'} las luces: </div>
      <div className='switchContainer' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        <div className='switchButton'></div>
      </div>
    </div>
  )
}

export default Switch