# React Concepts — Codebase Analysis

**Project:** Editorial Cafe  
**Framework:** Vite + React 19  
**Files scanned:** 8 JSX, 7 CSS

---

## Checklist

| # | Concept | Status |
|---|---------|--------|
| 1 | React JSX | ✅ |
| 2 | React Components | ✅ |
| 3 | React Component API | ✅ |
| 4 | React Lifecycle | ✅ |
| 5 | React Constructors | ✅ |
| 6 | React DevTools | ✅ |
| 7 | React State | ✅ |
| 8 | React Props | ✅ |
| 9 | React Props Validation | ✅ |
| 10 | Styling React | ✅ |
| 11 | React Hooks | ✅ |
| 12 | React Routing | ❌ |
| 13 | Deployment Readiness | ❌ |

**Summary: 11 / 13 implemented**

---

## Implemented Concepts

### 1. React JSX

Every `.jsx` file uses JSX with `className`, fragments (`<>…</>`), and expression interpolation `{props.x}`.

### 2. React Components

**Functional:** Navbar, Herotext, Atmos, Journal, Card, Footer, App  
**Class:** Seasonal_curation

### 3. React Component API

`setState()` is used in `selectDrink()` inside `seasonal-curation.jsx` to update `selectedDrink` on card click.

### 4. React Lifecycle

`componentDidMount()` and `componentWillUnmount()` are implemented in `seasonal-curation.jsx` with console logs.

### 5. React Constructors

`constructor(props)` with `super(props)` in `seasonal-curation.jsx` — initialises `this.state = { selectedDrink: null }`.

### 7. React State

`this.state.selectedDrink` tracks which drink card the user clicked, updated via `setState()`.

### 8. React Props

Props like `title_main`, `desc_main` are passed to `Seasonal_curation` from `App.jsx`.  
Props like `img`, `volume`, `heading`, `description` are passed to `Card` from `Journal`.

### 10. Styling React

Each component imports its own CSS file (e.g. `import './navbar.css'`). Global styles live in `App.css`.

### 6. React DevTools

`Herotext.displayName = 'Herotext'` added in `herotext.jsx`. Install the [React Developer Tools](https://react.dev/learn/react-developer-tools) browser extension to inspect components.

### 11. React Hooks

`useEffect` and `useState` are used in `herotext.jsx`:  
- **`useState(false)`** — tracks `isVisible` state for the fade-in animation  
- **`useEffect`** — sets browser tab title to *"The Editorial Café — The Poetry of the Pour"* on mount, triggers the fade-in, and cleans up on unmount  

### 9. Props Validation

`prop-types` package installed. `Card.propTypes` defined in `journal_card.jsx` to validate that `img`, `volume`, `heading`, and `description` props are required strings.

---

## Still Missing — How to Implement


### 12. React Routing

```bash
npm install react-router-dom
```

```jsx
// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
```

Create `src/pages/Home.jsx` (current hero sections) and `src/pages/Menu.jsx` (new page).

---

### 13. Deployment

Easiest option — deploy to Vercel:

```bash
npm install -g vercel
vercel
```

Alternatives: Netlify (drag `dist/` folder) or GitHub Pages with `vite-plugin-gh-pages`.
