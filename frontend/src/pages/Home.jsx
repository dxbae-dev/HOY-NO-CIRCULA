import CirculationStatus from '../components/CirculationStatus';

const Home = () => {
  return (
    <div className="home-page" style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Bienvenido al portal ciudadano</h2>
      <p>Verifica si tu vehículo puede transitar el día de hoy en la CDMX y el Estado de México.</p>
      
      <div style={{ marginTop: '2rem' }}>
        <CirculationStatus />
      </div>
    </div>
  );
};

export default Home;