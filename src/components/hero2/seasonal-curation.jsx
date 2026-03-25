import './seasonal-curation.css'

const Seasonal_curation = () =>{
    return(
        <section className="seasonal">
            
            <div className="heading">
                <h1>Seasonal Curations</h1>
                <p>Autumn / Winter Edition</p>
            </div>

            <div className="catalogue">

                <div className="card big">
                    <div className="overlay">
                        <p className="tag">NEW ARRIVAL</p>
                        <h2>Smoked Cinnamon Mocha</h2>
                        <p className="desc">
                            Ecuadorian dark chocolate, toasted cinnamon bark,
                            and our signature espresso.
                        </p>
                        <span className="price">Rs.249</span>
                    </div>
                </div>

                <div className="right">

                    <div className="card small scone">
                        <div className="overlay">
                            <h3>Maple Sage Scone</h3>
                            <span>Rs.99</span>
                        </div>
                    </div>

                    <div className="card small brew">
                        <div className="overlay">
                            <h3>Amber Cold Brew</h3>
                            <span>Rs.159</span>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Seasonal_curation;