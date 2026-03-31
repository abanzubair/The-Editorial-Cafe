import './pastries.css'

const Pastries = () => {
    return (
        <section className="pastries" id="pastries">
            <div className="pastries-grid">

                {/* signature pastry — big feature card */}
                <div className="pastry-feature">
                    <span className="pastry-tag">Signature Pastry</span>
                    <h2 className="pastry-feature-name">Bourbon Vanilla Mille-Feuille</h2>
                    <p className="pastry-feature-desc">
                        One thousand layers of hand-laminated pastry, Madagascar vanilla bean crème, and a dusting of burnt sugar.
                    </p>
                    <span className="pastry-feature-price">120.00</span>
                    <div className="pastry-feature-img">
                        <img src="/pastries.png" alt="Bourbon Vanilla Mille-Feuille" />
                    </div>
                </div>

                {/* daily scone — smaller card */}
                <div className="pastry-daily">
                    <h3 className="pastry-daily-name">The Daily Scone</h3>
                    <p className="pastry-daily-desc">
                        Consult the chalkboard for today's seasonal pairing.
                    </p>
                    <span className="pastry-daily-price">50.50</span>
                </div>

            </div>
        </section>
    )
}

Pastries.displayName = 'Pastries'
export default Pastries
