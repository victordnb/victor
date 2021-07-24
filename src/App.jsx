import React, { useState } from 'react'
import Intro from './componentes/intro/Intro'
import Topbar from './componentes/topbar/Topbar'
import Portfolio from './componentes/portfolio/Portfolio'
import Works from './componentes/works/Works'
import Blog from './componentes/blog/Blog'
import Testimonial from './componentes/testimonials/Testimonial'
import Contact from './componentes/contact/Contact'
import "./App.scss"

function App() {
  
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Blog/>
        <Testimonial/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
