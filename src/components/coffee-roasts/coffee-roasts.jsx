import './coffee-roasts.css'

// the coffee roasts section — editorial two-column layout with category intro + item list
const CoffeeRoasts = () => {

    const items = [
        {
            name: 'Midnight Manuscript Blend',
            desc: 'Notes of dark chocolate, cedar, and dried fig. Our signature dark roast.',
            price: '60.50'
        },
        {
            name: 'Ethiopian Yirgacheffe',
            desc: 'Light, floral, and tea-like with distinct notes of bergamot and jasmine.',
            price: '70.00'
        },
        {
            name: 'Editorial Pour Over',
            desc: 'Rotating single-origin micro-lots, brewed with precision at 94°C.',
            price: '80.00'
        }
    ]

    return (
        <section className="coffee-roasts" id="coffee-roasts">
            <div className="coffee-roasts-grid">

                {/* left column — category intro */}
                <div className="coffee-intro">
                    <h2 className="coffee-title">Coffee</h2>
                    <p className="coffee-desc">
                        Ethically sourced beans, roasted in small batches to preserve the nuanced narrative of their origin.
                    </p>
                </div>

                {/* right column — item list */}
                <div className="coffee-items">
                    {items.map((item, i) => (
                        <div className="menu-item" key={i}>
                            <div className="menu-item-top">
                                <h3 className="menu-item-name">{item.name}</h3>
                                <span className="menu-item-price">{item.price}</span>
                            </div>
                            <p className="menu-item-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

CoffeeRoasts.displayName = 'CoffeeRoasts'
export default CoffeeRoasts
