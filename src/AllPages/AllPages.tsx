import './AllPages.css'

import NavBar from "../components/NavBar/NavBar"
import Home from '../components/Home/Home'
import Footer from '../components/Footer/Footer'
import About from '../components/About/About'
import Project from '../components/Projects/Project'
import Contact from '../components/Contact/Contact'

export const AllPages = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
       <Project />
      <Contact />
     <Footer />
    </div>
  )
}
