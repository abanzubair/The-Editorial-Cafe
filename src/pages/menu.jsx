import { useEffect, useState } from 'react'
import Navbar from '../components/navbar/navbar'
import MenuNav from '../components/menu-nav/menu-nav'
import CoffeeRoasts from '../components/coffee-roasts/coffee-roasts'
import CoffeeQuote from '../components/coffee-quote/coffee-quote'
import ArtisanTea from '../components/artisan-tea/artisan-tea'
import Pastries from '../components/pastries/pastries'
import Sandwiches from '../components/sandwiches/sandwiches'
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

      {/* sticky category navigation */}
      <MenuNav/>

      {/* menu sections*/}
      <CoffeeRoasts/>
      <CoffeeQuote/>
      <ArtisanTea/>
      <Pastries/>
      <Sandwiches/>

      <Footer/>
    </>
  )
}

export default Menu