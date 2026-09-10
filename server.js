//importar express para crear el servidor
const express = require("express");
const cors = require('cors');

//importar las rutas de autenticación
const authRoutes = require("./src/routes/authRoutes");
const petRoutes = require("./src/routes/petRoutes");
const veterinarianRoutes = require("./src/routes/veterinarianRoutes");
const appointmentRoutes = require("./src/routes/appointmentRoutes");

//importar la conexión con MongoDB
const connectDB = require("./src/config/database");

//crear una instancia de express (esto siempre debe ir antes de los app.use)
const app = express();

//permitir que el frontend se conecte sin bloqueos de seguridad
app.use(cors());

//permitir que el servidor reciba datos en formato JSON
app.use(express.json());

//definir el puerto donde funcionará el servidor
const PORT = 3000;

//conectar con MongoDB
connectDB();

//conectar las rutas de autenticación
app.use("/api/auth", authRoutes);
app.use("/api/pets", petRoutes);
app.use("/api/veterinarians", veterinarianRoutes);
app.use("/api/appointments", appointmentRoutes);

//ruta de prueba
app.get("/", (req, res) => {
    res.json({
        message: "API de PetTime funcionando correctamente"
    });
});

//iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});