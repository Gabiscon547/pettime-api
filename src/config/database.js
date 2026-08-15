//importar mongoose para conectar la aplicación con MongoDB
const mongoose = require("mongoose");

//función para conectar con MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/pettime");

        console.log("MongoDB conectado correctamente");
    } catch (error) {
        console.error("Error al conectar con MongoDB:", error.message);
        process.exit(1);
    }
};

//exportar la función de conexión
module.exports = connectDB;