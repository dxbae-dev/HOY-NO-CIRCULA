import { useState } from 'react';
import './VehicleRegistration.css'; // Crearemos este archivo en el siguiente paso

const VehicleRegistration = () => {
  const [formData, setFormData] = useState({
    placa: '',
    modelo: '',
    holograma: '0'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí después conectaremos con el Backend (HU-01)
    console.log('Datos a enviar al backend:', formData);
    alert('Vehículo registrado localmente (Mock)');
  };

  return (
    <div className="registration-container">
      <h2>Registrar Nuevo Vehículo</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        
        <div className="form-group">
          <label htmlFor="placa">Placa (ej. ABC-123-A):</label>
          <input 
            type="text" 
            id="placa" 
            name="placa" 
            value={formData.placa} 
            onChange={handleChange} 
            placeholder="Ingresa la placa"
            required 
            maxLength="10"
          />
        </div>

        <div className="form-group">
          <label htmlFor="modelo">Modelo (Año):</label>
          <input 
            type="number" 
            id="modelo" 
            name="modelo" 
            value={formData.modelo} 
            onChange={handleChange} 
            placeholder="Ej. 2020"
            required 
            min="1950" 
            max="2025"
          />
        </div>

        <div className="form-group">
          <label htmlFor="holograma">Holograma:</label>
          <select 
            id="holograma" 
            name="holograma" 
            value={formData.holograma} 
            onChange={handleChange}
          >
            <option value="00">00</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Guardar Vehículo</button>
      </form>
    </div>
  );
};

export default VehicleRegistration;