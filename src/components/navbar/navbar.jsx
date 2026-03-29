import './navbar.css'

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="logo">The Editorial Café</div>

            <ul>
                <li>Menu</li>
                <li>Journal</li>
                <li>Locations</li>
            </ul>

            <div className="order-btn">
                <button>Order Online</button>
            </div>
        </div>
    )
}

Navbar.displayName = 'Navbar';
export default Navbar