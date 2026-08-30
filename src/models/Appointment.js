const mongoose = require("mongoose");

//crear el esquema de cita
const appointmentSchema = new mongoose.Schema(
    {
        pet: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Pet",
            required: true
        },

        veterinarian: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Veterinarian",
            required: true
        },

        service: {
            type: String,
            required: true
        },

        reason: {
            type: String
        },

        date: {
            type: Date,
            required: true
        },

        time: {
            type: String,
            required: true
        },

        status: {
            type: String,
            default: "Pendiente"
        }
    },
    {
        timestamps: true
    }
);

//exportar el modelo de cita
module.exports = mongoose.model("Appointment", appointmentSchema);