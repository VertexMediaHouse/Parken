import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Hero.jsx'
import Partners from './Partners.jsx'
import Industries from './Industries.jsx'
import Stack from './Stack.jsx'
import About from './About.jsx'
import Services from './Services.jsx'
import Projects from './Projects.jsx'
import Footer from './Footer.jsx'
import AboutUs from './AboutUs.jsx'

// ponytail: pathname switch instead of a router; add react-router when pages > 2
createRoot(document.getElementById('root')).render(
  location.pathname.startsWith('/about') ? <AboutUs /> : <>
    <Hero />
    <Partners />
    <Industries />
    <Stack />
    <About />
    <Services />
    <Projects />
    <Footer />
  </>
)
