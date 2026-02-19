import './App.css'
import VehicleRegistration from './components/VehicleRegistration'

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Hoy No Circula - CDMX</h1>
        <p>Sistema de consulta y gestión vehicular</p>
      </header>
      <main>
        <VehicleRegistration />
      </main>
    </div>
  )
}

export default App