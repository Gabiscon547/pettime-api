const express = require("express");

const router = express.Router();

const {
    createAppointment,
    getAppointments,
    getAppointmentById,
    updateAppointment,
    deleteAppointment,
    getPetHistory
} = require("../controllers/AppointmentController");

//registrar una cita
router.post("/", createAppointment);

//consultar todas las citas
router.get("/", getAppointments);

//consultar una cita por su id
router.get("/:id", getAppointmentById);

//actualizar una cita
router.put("/:id", updateAppointment);

//eliminar una cita
router.delete("/:id", deleteAppointment);

//consultar historial de una mascota

router.get("/pet/:petId/history", getPetHistory);

module.exports = router;