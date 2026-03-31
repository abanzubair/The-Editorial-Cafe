import './coffee-quote.css'

// editorial pull-quote displayed after the coffee roasts section per design spec
const CoffeeQuote = () => {
    return (
        <section className="coffee-quote">
            <div className="coffee-quote-inner">
                <div className="coffee-quote-bar"></div>
                <div className="coffee-quote-content">
                    <p className="coffee-quote-text">
                        "Coffee is a language in itself, a narrative written in steam and aroma that awakens the writer within us all."
                    </p>
                    <span className="coffee-quote-author">— The Chief Editor</span>
                </div>
            </div>
        </section>
    )
}

CoffeeQuote.displayName = 'CoffeeQuote'
export default CoffeeQuote
