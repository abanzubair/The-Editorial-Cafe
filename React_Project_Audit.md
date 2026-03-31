# React Project Codebase Audit

This report documents the implementation of the required React concepts within the "Editorial Cafe" project codebase. All required topics have been successfully implemented.

---

### 1. React JSX

**Topic:** React JSX
**Status:** Implemented
**File Path:** `src/pages/home.jsx`

**Code Example:**
```javascript
function Home() {
  return (
    <>
    <div className="Hero-section">
      <Navbar/>
      <Herotext/>
    </div>

    {/* props used here */}
      <Seasonal_curation 
        title_main = "Smoked Cinnamon Mocha"
        desc_main = "Ecuadorian dark chocolate, toasted cinnamon bark, and our signature espresso."
      />
      
      <Atmos/>
      <Journal/>
      <Footer/>
    </>
  )
}
```

---

### 2. React Components

**Topic:** React Components
**Status:** Implemented
**File Path:** `src/components/navbar/navbar.jsx`

**Code Example:**
```javascript
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return(
        <div className="navbar">
            <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>The Editorial Café</Link>

            <ul>
                <li><Link to="/menu" style={{ textDecoration: 'none', color: 'inherit' }}>Menu</Link></li>
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
```

---

### 3. React Component API

**Topic:** React Component API
**Status:** Implemented
**File Path:** `src/components/hero2/seasonal-curation.jsx`

**Code Example:**
```javascript
  // Component API — setState updates the selectedDrink value
  selectDrink = (name) => {
    this.setState({ selectedDrink: name });
  };
```

---

### 4. React Component Lifecycle

**Topic:** React Component Lifecycle
**Status:** Implemented
**File Path:** `src/components/hero2/seasonal-curation.jsx`

**Code Example:**
```javascript
  // Lifecycle - fires right after the component appears on screen
  componentDidMount() {
    console.log('Seasonal section mounted');
  }

  componentWillUnmount() {
    console.log('Seasonal section unmounting');
  }
```

---

### 5. React Constructors

**Topic:** React Constructors
**Status:** Implemented
**File Path:** `src/components/hero2/seasonal-curation.jsx`

**Code Example:**
```javascript
class Seasonal_curation extends Component {

  constructor(props) {
    super(props);
    // tracks which drink the user clicked
    this.state = { selectedDrink: null };
  }
// ...
```

---

### 6. React Dev Tools

**Topic:** React Dev Tools
**Status:** Implemented
**File Path:** `src/components/hero/herotext.jsx`

**Code Example:**
```javascript
// displayName helps React DevTools identify this component
Herotext.displayName = 'Herotext'

export default Herotext
```

---

### 7. React State

**Topic:** React State
**Status:** Implemented
**File Path:** `src/pages/menu.jsx`

**Code Example:**
```javascript
function Menu() {
  const [isVisible, setIsVisible] = useState(false)
  // ...
  return (
    // ...
    <div className={`menu-text ${isVisible ? 'menu-visible' : ''}`}>
    // ...
```

---

### 8. React Props

**Topic:** React Props
**Status:** Implemented
**File Path:** `src/components/hero4/journal.jsx`

**Code Example:**
```javascript
<div className="cards">
    <Card img="/journal1.png"
        volume = "Volume 12 // Issue 04"
        heading = "The Solitude of the Morning Roast"
        description = "Exploring the connection between quiet mornings and the creative process through the lens of a barista."
    />

    <Card img="/journal2.png"
        volume = "Volume 12 // Issue 05"
        heading = "On the Architecture of Comfort"
        description = "How physical spaces influence our sensory experience of flavor and aroma."
    />
</div>
```

---

### 9. React Props Validation

**Topic:** React Props Validation
**Status:** Implemented
**File Path:** `src/components/journal_card.jsx`

**Code Example:**
```javascript
import PropTypes from 'prop-types'

// ... component body ...

Card.propTypes = {
  img: PropTypes.string.isRequired,
  volume: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
```

---

### 10. Styling React

**Topic:** Styling React
**Status:** Implemented
**File Path:** `src/pages/menu.jsx` & `src/pages/menu.css`

**Code Example:**
```javascript
// In src/pages/menu.jsx
import './menu.css'

// In src/pages/menu.css
.menu-hero-section {
    height: 100vh;
    padding-top: 10vh;
    display: flex;
    flex-direction: column;
    /* Background gradients and styling... */
}
```

---

### 11. React Hooks

**Topic:** React Hooks
**Status:** Implemented
**File Path:** `src/pages/menu.jsx`

**Code Example:**
```javascript
  useEffect(() => {
    document.title = 'Menu — The Editorial Café'

    const fadeTimer = setTimeout(() => {
        setIsVisible(true)
    }, 100)

    return () => {
        document.title = 'Editorial Café'
        clearTimeout(fadeTimer)
    }
  }, [])
```

---

### 12. React Routing

**Topic:** React Routing
**Status:** Implemented
**File Path:** `src/App.jsx`

**Code Example:**
```javascript
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Menu from './pages/menu'

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/menu" element = {<Menu/>}/>
      </Routes>
    </Router>
  )
}

export default App
```

---

### 13. Deploying React

**Topic:** Deploying React
**Status:** Implemented
**File Path:** `package.json`

**Code Example:**
```json
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
```
