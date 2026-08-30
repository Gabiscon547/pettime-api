const Appointment = require("../models/Appointment");
const Pet = require("../models/Pet");
const Veterinarian = require("../models/Veterinarian");
const mongoose = require("mongoose");

//registrar una cita
const createAppointment = async (req, res) => {

    try {
        const { pet, veterinarian, service, reason, date, time, status } = req.body;

        if (!pet || !veterinarian || !service || !date || !time) {
            return res.status(400).json({
                message: "Los campos mascota, veterinario, servicio, fecha y hora son obligatorios"
            });
        }

        //validar formato de los IDs
        if (!mongoose.Types.ObjectId.isValid(pet)) {
            return res.status(400).json({
                message: "El ID de la mascota no tiene un formato válido"
            });
        }

        if (!mongoose.Types.ObjectId.isValid(veterinarian)) {
            return res.status(400).json({
                message: "El ID del veterinario no tiene un formato válido"
            });
        }

        //validar fecha
        if (isNaN(new Date(date).getTime())) {
            return res.status(400).json({
                message: "La fecha indicada no tiene un formato válido"
            });
        }

        //validar hora
        const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

        if (!timeRegex.test(time)) {
            return res.status(400).json({
                message: "La hora indicada no tiene un formato válido"
            });
        }

        //comprobar que la mascota exista
        const existingPet = await Pet.findById(pet);

        if (!existingPet) {
            return res.status(404).json({
                message: "La mascota indicada no existe"
            });
        }

        //comprobar que el veterinario exista
        const existingVeterinarian = await Veterinarian.findById(veterinarian);

        if (!existingVeterinarian) {
            return res.status(404).json({
                message: "El veterinario indicado no existe"
            });
        }

        const appointment = new Appointment({
            pet,
            veterinarian,
            service,
            reason,
            date,
            time,
            status
        });

        await appointment.save();

        res.status(201).json({
            message: "Cita registrada correctamente",
            appointment
        });

    } catch (error) {
        console.error("Error al registrar cita:", error);

        res.status(500).json({
            message: "Error al registrar la cita"
        });
    }
};


//consultar todas las citas
const getAppointments = async (req, res) => {

    try {
        const appointments = await Appointment.find()
            .populate("pet", "name species breed")
            .populate("veterinarian", "names lastNames specialty");

        res.status(200).json({
            appointments
        });

    } catch (error) {
        console.error("Error al consultar citas:", error);

        res.status(500).json({
            message: "Error al consultar las citas"
        });
    }
};


//consultar una cita por su id
const getAppointmentById = async (req, res) => {

    try {

        //validar formato del ID
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                message: "El ID de la cita no tiene un formato válido"
            });
        }

        const appointment = await Appointment.findById(req.params.id)
            .populate("pet", "name species breed")
            .populate("veterinarian", "names lastNames specialty");

        if (!appointment) {
            return res.status(404).json({
                message: "Cita no encontrada"
            });
        }

        res.status(200).json({
            appointment
        });

    } catch (error) {
        console.error("Error al consultar cita:", error);

        res.status(500).json({
            message: "Error al consultar la cita"
        });
    }
};


//actualizar una cita
const updateAppointment = async (req, res) => {

    try {

        const { pet, veterinarian, service, reason, date, time, status } = req.body;

        if (!pet || !veterinarian || !service || !date || !time) {
            return res.status(400).json({
                message: "Los campos mascota, veterinario, servicio, fecha y hora son obligatorios"
            });
        }

        //validar formato del ID de la cita
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                message: "El ID de la cita no tiene un formato válido"
            });
        }

        //validar formato de los IDs
        if (!mongoose.Types.ObjectId.isValid(pet)) {
            return res.status(400).json({
                message: "El ID de la mascota no tiene un formato válido"
            });
        }

        if (!mongoose.Types.ObjectId.isValid(veterinarian)) {
            return res.status(400).json({
                message: "El ID del veterinario no tiene un formato válido"
            });
        }

        //validar fecha
        if (isNaN(new Date(date).getTime())) {
            return res.status(400).json({
                message: "La fecha indicada no tiene un formato válido"
            });
        }

        //validar hora
        const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

        if (!timeRegex.test(time)) {
            return res.status(400).json({
                message: "La hora indicada no tiene un formato válido"
            });
        }

        //comprobar que la mascota exista
        const existingPet = await Pet.findById(pet);

        if (!existingPet) {
            return res.status(404).json({
                message: "La mascota indicada no existe"
            });
        }

        //comprobar que el veterinario exista
        const existingVeterinarian = await Veterinarian.findById(veterinarian);

        if (!existingVeterinarian) {
            return res.status(404).json({
                message: "El veterinario indicado no existe"
            });
        }

        const appointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            {
                pet,
                veterinarian,
                service,
                reason,
                date,
                time,
                status
            },
            {
                new: true,
                runValidators: true
            }
        )
            .populate("pet", "name species breed")
            .populate("veterinarian", "names lastNames specialty");

        if (!appointment) {
            return res.status(404).json({
                message: "Cita no encontrada"
            });
        }

        res.status(200).json({
            message: "Cita actualizada correctamente",
            appointment
        });

    } catch (error) {

        console.error("Error al actualizar cita:", error);

        res.status(500).json({
            message: "Error al actualizar la cita"
        });
    }
};


//eliminar una cita
const deleteAppointment = async (req, res) => {

    try {

        //validar formato del ID
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                message: "El ID de la cita no tiene un formato válido"
            });
        }

        const appointment = await Appointment.findByIdAndDelete(req.params.id);

        if (!appointment) {
            return res.status(404).json({
                message: "Cita no encontrada"
            });
        }

        res.status(200).json({
            message: "Cita eliminada correctamente"
        });

    } catch (error) {

        console.error("Error al eliminar cita:", error);

        res.status(500).json({
            message: "Error al eliminar la cita"
        });
    }
};


//consultar historial de una mascota
const getPetHistory = async (req, res) => {

    try {

        //validar formato del ID de la mascota
        if (!mongoose.Types.ObjectId.isValid(req.params.petId)) {
            return res.status(400).json({
                message: "El ID de la mascota no tiene un formato válido"
            });
        }

        //comprobar que la mascota exista
        const existingPet = await Pet.findById(req.params.petId);

        if (!existingPet) {
            return res.status(404).json({
                message: "La mascota indicada no existe"
            });
        }

        const appointments = await Appointment.find({
            pet: req.params.petId
        })
            .populate("pet", "name species breed")
            .populate("veterinarian", "names lastNames specialty");

        res.status(200).json({
            appointments
        });

    } catch (error) {

        console.error("Error al consultar historial de mascota:", error);

        res.status(500).json({
            message: "Error al consultar el historial de la mascota"
        });
    }
};


module.exports = {
    createAppointment,
    getAppointments,
    getAppointmentById,
    updateAppointment,
    deleteAppointment,
    getPetHistory
};