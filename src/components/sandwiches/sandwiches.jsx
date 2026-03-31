import './sandwiches.css'

const Sandwiches = () => {

    const items = [
        {
            name: 'Prosciutto & Fig',
            desc: '24-month aged ham, mission figs, and honey-whipped ricotta on a toasted baguette.',
            price: '150.00'
        },
        {
            name: 'Truffled Mushroom',
            desc: 'Roasted oyster mushrooms, black truffle aioli, and micro-greens.',
            price: '145.50'
        },
        {
            name: 'Smoked Salmon Tartine',
            desc: 'House-cured salmon, crème fraîche, capers, and dill on sourdough.',
            price: '160.00'
        }
    ]

    return (
        <section className="sandwiches" id="sandwiches">
            <div className="sandwiches-grid">

                <div className="sandwiches-card">
                    <h2 className="sandwiches-title">Sandwiches</h2>
                    <div className="sandwiches-list">
                        {items.map((item, i) => (
                            <div className="sandwich-item" key={i}>
                                <div className="sandwich-item-top">
                                    <span className="sandwich-item-name">{item.name}</span>
                                    <span className="sandwich-item-price">{item.price}</span>
                                </div>
                                <p className="sandwich-item-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* atmospheric image — the ritual */}
                <div className="sandwiches-image">
                    <img src="/cafe-ritual.png" alt="Experience the ritual" />
                    <span className="ritual-label">Experience the Ritual</span>
                </div>

            </div>
        </section>
    )
}

Sandwiches.displayName = 'Sandwiches'
export default Sandwiches
