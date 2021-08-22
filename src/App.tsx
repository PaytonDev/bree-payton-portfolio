import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import { Fade, useMediaQuery } from '@material-ui/core';
import { ArrowUpward } from '@material-ui/icons';
import NavBar from './Components/NavBar';
import Hero from "./Components/Hero"
import Projects from './Components/Projects';
import Skills from './Components/Skills'
import Contact from './Components/Contact';
import Sidebar from './Components/Sidebar';
import styles from "./styles"
import './App.css';

function App() {
  const [fabVisible, setFabVisible] = useState(false)
  const classes = styles()
  const tablet = useMediaQuery('(max-width: 768px)')
  

  const scrollToView = (name: string) => (
    document.querySelector(`#${name}`)?.scrollIntoView({
        behavior: 'smooth'
    })
  )

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    scrolled > 300 ? setFabVisible(true) : setFabVisible(false)
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <div className="App">
      {tablet ? <Sidebar/> : <NavBar/>}
      <Hero/>
      <Projects />
      <Skills />
      <Contact />
      <Fade in={fabVisible}>
        <Fab color="inherit" aria-label="scroll to top" className={classes.fab} onClick={() => {scrollToView(tablet ? 'Sidebar' : 'NavBar')}}>
          <ArrowUpward className={classes.fabIcon}/>
        </Fab>
      </Fade>
    </div>
  );
}

export default App;
