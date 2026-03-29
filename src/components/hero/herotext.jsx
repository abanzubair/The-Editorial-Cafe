import { useEffect, useState } from 'react'
import './herotext.css'

const Herotext = () => {

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {

        document.title = 'The Editorial Café — The Poetry of the Pour'

        const fadeTimer = setTimeout(() => {
            setIsVisible(true)
        }, 100)

        return () => {
            document.title = 'Editorial Café'
            clearTimeout(fadeTimer)
        }
    }, [])

    return (
        <div className={`hero-text ${isVisible ? 'hero-visible' : ''}`}>
            <p>EST. 2025</p>
            <h1>
                The <i>Poetry</i> of the Pour
            </h1>
            <h2>A curated space where literary depth meets artisanal precision. Every cup is a chapter, every visit an essay in stillness.</h2>

            <div className="btns">
                <div className="explr-btn">
                    <button>EXPLORE THE MENU</button>
                </div>
                <div className="philosophy-btn">
                    <button>OUR PHILOSOPHY<div className="arrow">→</div></button>
                </div>
            </div>
        </div>
    )
}

// displayName helps React DevTools identify this component
Herotext.displayName = 'Herotext'

export default Herotext