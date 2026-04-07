import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}><h1>The Editorial Café</h1></Link>

            <ul>
                <li><Link to="/menu" style={{ textDecoration: 'none', color: 'inherit' }}>Menu</Link></li>
                <li>Journal</li>
                <li><Link to="/locations" style={{ textDecoration: 'none', color: 'inherit' }}>Locations</Link></li>
            </ul>

            <div className="order-btn">
                <button>Order Online</button>
            </div>
        </div>
    )
}

Navbar.displayName = 'Navbar';
export default Navbar