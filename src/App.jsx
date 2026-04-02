import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Menu from './pages/menu'
import Location from './pages/Location'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/locations" element={<Location />} />
      </Routes>
    </Router>
  )
}

export default App
