import './footer.css'

const Footer = () =>{
    return(
        <div className="footer">

            <div className="left">
                <h1>The Editorial Café</h1>
                <p>&copy; 2024 The Editorial Café. All Rights Reserved.</p>
            </div>

            <div className="middle">
                <div className="list">
                    <ul>
                        <li><a href="mailto:abanzubair@gmail.com">CONTACT US</a></li>
                        <li>PRIVACY POLICY</li>
                        <li>TERMS OF SERVICE</li>
                    </ul>
                </div>
            </div>

            <div className="right">
                <div className="social">
                    <ul>
                        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM</a></li>
                        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">FACEBOOK</a></li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;