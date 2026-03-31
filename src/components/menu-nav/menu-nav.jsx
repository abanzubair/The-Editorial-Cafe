import './menu-nav.css'

// sticky sub-navigation for the menu page — lets users jump between categories
const MenuNav = () => {
    const categories = ['Coffee Roasts', 'Artisan Tea', 'Pastries', 'Sandwiches']

    const scrollToSection = (id) => {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <nav className="menu-nav">
            {categories.map((cat) => (
                <span
                    key={cat}
                    className="menu-nav-item"
                    onClick={() => scrollToSection(cat.toLowerCase().replace(/\s/g, '-'))}
                >
                    {cat}
                </span>
            ))}
        </nav>
    )
}

MenuNav.displayName = 'MenuNav'
export default MenuNav
