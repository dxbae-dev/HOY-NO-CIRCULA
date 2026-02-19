import { useState } from 'react';
import './CirculationStatus.css';

const CirculationStatus = () => {
  const [placa, setPlaca] = useState('');
  const [holograma, setHolograma] = useState('0');
  const [status, setStatus] = useState(null); // null, 'circula', 'no-circula'

  const handleSubmit = (e) => {
    e.preventDefault();
    // Si la placa termina en par, circula. Si es impar, no circula.
    // Esto se reemplazará después con la llamada al backend.
    const lastDigit = parseInt(placa.slice(-1));
    if (isNaN(lastDigit)) {
      alert("Por favor, ingresa una placa válida que termine en número.");
      return;
    }

    if (lastDigit % 2 === 0) {
      setStatus('circula');
    } else {
      setStatus('no-circula');
    }
  };

  return (
    <div className="status-container">
      <h2>Consulta de Circulación (Hoy)</h2>
      <form onSubmit={handleSubmit} className="status-form">
        <div className="input-group">
          <input 
            type="text" 
            value={placa} 
            onChange={(e) => setPlaca(e.target.value)} 
            placeholder="Ingresa tu placa (ej. ABC-123)" 
            required 
          />
          <select value={holograma} onChange={(e) => setHolograma(e.target.value)}>
            <option value="00">00</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <button type="submit">Consultar</button>
        </div>
      </form>

      {status && (
        <div className={`result-card ${status}`}>
          <h3>{status === 'circula' ? '¡Hoy CIRCULAS!' : 'Hoy NO CIRCULAS'}</h3>
          <p>
            {status === 'circula' 
              ? 'Puedes transitar libremente.' 
              : 'Restricción de 5:00 a 22:00 hrs.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default CirculationStatus;