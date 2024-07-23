import { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'
import { reviews } from './Data'
import Footer from './components/Footer'
import { ThemeProvider } from './contexts/Theme'
import Home from './components/Home'

function App() {
  const [themeMode, setThemeMode] = useState(() => {
    // Check if a theme is stored in localStorage
    return localStorage.getItem('theme') || 'light'
  })
  
  const lightMode= ()=> {
          setThemeMode("light")
          localStorage.setItem('theme', 'light')
  }

  const darkMode=()=>{
    setThemeMode("dark")
    localStorage.setItem('theme', 'dark')
  }

  useEffect(() => {
    
    document.documentElement.classList.remove('light', 'dark')
  
    document.documentElement.classList.add(themeMode)
    

    document.body.classList.add('transition-colors', 'duration-300')
    
    return () => {
      document.body.classList.remove('transition-colors', 'duration-300')
    }
  }, [themeMode])

 

  return (
    <ThemeProvider value={{themeMode,lightMode,darkMode}}>
     
    <div className='h-full w-full dark:bg-darkTheme transition-colors duration-300 dark:text-white'>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects reviews={reviews}/> 
      <Contact/> 
      <Footer/>
      </div>
    
    </ThemeProvider>
  )
}

export default App
