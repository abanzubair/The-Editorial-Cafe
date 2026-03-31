import './artisan-tea.css'

// artisan tea section — reversed layout from coffee (items left, intro+image right)
const ArtisanTea = () => {

    const items = [
        {
            name: 'Silver Needle White',
            desc: 'Delicate, sweet, and velvety. Harvested in early spring before the buds open.',
            price: '90.00'
        },
        {
            name: 'Lapsang Souchong',
            desc: 'Bold black tea smoke-dried over pinewood fires. Intensely aromatic.',
            price: '60.50'
        },
        {
            name: 'Jasmine Dragon Pearl',
            desc: 'Hand-rolled green tea infused with fresh jasmine blossoms over seven nights.',
            price: '80.50'
        }
    ]

    return (
        <section className="artisan-tea" id="artisan-tea">
            <div className="tea-grid">

                {/* left column — item list */}
                <div className="tea-items">
                    {items.map((item, i) => (
                        <div className="tea-menu-item" key={i}>
                            <div className="tea-item-top">
                                <h3 className="tea-item-name">{item.name}</h3>
                                <span className="tea-item-price">{item.price}</span>
                            </div>
                            <p className="tea-item-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* right column — category intro + image */}
                <div className="tea-intro">
                    <h2 className="tea-title">Artisan Tea</h2>
                    <div className="tea-image-wrap">
                        <img src="/artisan-tea.png" alt="Loose leaf artisan tea" />
                    </div>
                </div>

            </div>
        </section>
    )
}

ArtisanTea.displayName = 'ArtisanTea'
export default ArtisanTea
