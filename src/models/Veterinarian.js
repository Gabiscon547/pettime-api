const mongoose = require("mongoose");

//crear el esquema de veterinario
const veterinarianSchema = new mongoose.Schema(
    {
        names: {
            type: String,
            required: true
        },
        lastNames: {
            type: String,
            required: true
        },
        document: {
            type: String,
            required: true,
            unique: true
        },
        specialty: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        }
    },
    {
        timestamps: true
    }
);

//exportar el modelo de veterinario
module.exports = mongoose.model("Veterinarian", veterinarianSchema);