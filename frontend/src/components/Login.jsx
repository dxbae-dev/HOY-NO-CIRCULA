import { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? 'Iniciando sesión con:' : 'Registrando con:', formData);
    alert(isLogin ? 'Mock: Sesión Iniciada' : 'Mock: Usuario Registrado');
  };

  return (
    <div className="login-container">
      <h2>{isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input 
          type="email" 
          placeholder="Correo electrónico" 
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required 
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          required 
        />
        <button type="submit">{isLogin ? 'Entrar' : 'Registrarse'}</button>
      </form>
      <p className="toggle-text" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? '¿No tienes cuenta? Regístrate aquí' : '¿Ya tienes cuenta? Inicia sesión'}
      </p>
    </div>
  );
};

export default Login;