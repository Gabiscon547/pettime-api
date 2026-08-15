//importar express para crear el servidor
const express = require("express");

//importar las rutas de autenticación
const authRoutes = require("./src/routes/authRoutes");

//importar la conexión con MongoDB
const connectDB = require("./src/config/database");

//crear una instancia de express
const app = express();

//definir el puerto donde funcionará el servidor
const PORT = 3000;

//conectar con MongoDB
connectDB();

//permitir que el servidor reciba datos en formato JSON
app.use(express.json());

//conectar las rutas de autenticación
app.use("/api/auth", authRoutes);

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