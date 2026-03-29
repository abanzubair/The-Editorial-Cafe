import { useEffect, useState } from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import './menu.css'

function Menu() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    document.title = 'Menu — The Editorial Café'

    const fadeTimer = setTimeout(() => {
        setIsVisible(true)
    }, 100)

    return () => {
        document.title = 'Editorial Café'
        clearTimeout(fadeTimer)
    }
  }, [])

  return (
    <>
      <div className="menu-hero-section">
        <Navbar/>
        <div className={`menu-text ${isVisible ? 'menu-visible' : ''}`}>
          <p className="anthology">The Autumn Anthology</p>
          <h1>
            Seasonal<br />Selection
          </h1>
          <p className="desc">
            A curated collection of single-origin roasts and hand-crafted infusions, inspired by the lengthening shadows of the solstice.
          </p>
          <div className="availability">
            <div className="line"></div>
            <span>Available through November</span>
          </div>
        </div>
      </div>
      
      <Footer/>
    </>
  )
}

export default Menu