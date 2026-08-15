//importar mongoose para crear el modelo
const mongoose = require("mongoose");

//definir la estructura de los usuarios
const userSchema = new mongoose.Schema(
    {
        names: {
            type: String,
            required: true,
            trim: true
        },

        lastNames: {
            type: String,
            required: true,
            trim: true
        },

        document: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        birthDate: {
            type: Date,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

//crear el modelo de usuario
const User = mongoose.model("User", userSchema);

//exportar el modelo
module.exports = User;