import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Services } from './components/Services'
import Ourwork from './components/Ourwork'

const App = () => {

const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero theme={theme}/>
      <Services/>
      <Ourwork/>
    </div>
  )
}

export default App