import './atmos.css'

const Atmos = () =>{
    return(
        <div className="atmos">
            <div className="hero3-img">
                <img src="atmos.png" alt="" />
            </div>

            <div className="atmos-brew">
                <h1>The Art of Atmospheric Brewing</h1>

                <div className="details">
                    <div className="narrative">
                        <span><img src="/narrative-icon.png" alt="icon" /></span>
                        <p><h3>The Narrative Roast</h3>Our beans are sourced from single-origin estates with stories as rich as their flavor profiles. We roast in small batches at dusk.</p>
                    </div>

                    <div className="design">
                        <span><img src="/design-icon.png" alt="icon" /></span>
                        <p><h3>Quietude by Design</h3>Every corner of the café is acoustically tuned for reading, writing, and deep conversation.</p>
                    </div>                    
                </div>

                <div className="quote-box">
                    <p className="quote">"Coffee is a way of stealing time that should by rights belong to your older self."</p>

                    <span className="quote-author">— THE EDITORIAL ARCHIVES</span>
                </div>
            </div>
        </div>
    )
}
export default Atmos