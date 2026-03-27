import Card from '../journal_card'
import './journal.css'

const Journal = () =>{
    return(
        <div className="journal">

            <div className="heading">
                <h1><span className="underline">From</span> The Journal</h1>
            </div>

            <div className="cards">
                <Card img="/journal1.png"
                    volume = "Volume 12 // Issue 04"
                    heading = "The Solitude of the Morning Roast"
                    description = "Exploring the connection between quiet mornings and the creative process through the lens of a barista."
                />

                <Card img="/journal2.png"
                    volume = "Volume 12 // Issue 05"
                    heading = "On the Architecture of Comfort"
                    description = "How physical spaces influence our sensory experience of flavor and aroma."
                />
            </div>

        </div>
    )
}

export default Journal