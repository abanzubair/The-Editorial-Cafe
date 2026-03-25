import './App.css'
import Navbar from './components/navbar/navbar'
import Herotext from './components/hero/herotext'
import Seasonal_curation from './components/hero2/seasonal-curation'

function App() {
  return (
    <>
    <div className="Hero-section">
      <Navbar/>
      <Herotext/>
    </div>
      <Seasonal_curation/>
    </>
  )
}

export default App
