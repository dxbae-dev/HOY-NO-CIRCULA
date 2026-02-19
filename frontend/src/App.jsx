import './App.css'
import VehicleRegistration from './components/VehicleRegistration'
import CirculationStatus from './components/CirculationStatus'
import Login from './components/Login'

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Hoy No Circula - CDMX</h1>
        <p>Sistema de consulta y gestión vehicular</p>
      </header>
      <main>
        <section className="demo-section">
          <Login />
        </section>
        <hr />
        <section className="demo-section">
          <CirculationStatus />
        </section>
        <hr />
        <section className="demo-section">
          <VehicleRegistration />
        </section>
      </main>
    </div>
  )
}

export default App