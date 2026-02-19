import './App.css'
import CirculationStatus from './components/CirculationStatus'

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Hoy No Circula - CDMX</h1>
        <p>Sistema de consulta y gestión vehicular</p>
      </header>
      <main>
        <CirculationStatus />
      </main>
    </div>
  )
}

export default App