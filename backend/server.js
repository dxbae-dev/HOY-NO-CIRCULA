const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de prueba inicial
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Servidor Backend de Hoy No Circula funcionando correctamente.'
    });
});

// Levantar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});