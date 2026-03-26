import './App.css'
import Navbar from './components/navbar/navbar'
import Herotext from './components/hero/herotext'
import Seasonal_curation from './components/hero2/seasonal-curation'
import Atmos from './components/hero3/atmos'

function App() {
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
    </>
  )
}

export default App
