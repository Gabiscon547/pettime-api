const Veterinarian = require("../models/Veterinarian");
const mongoose = require("mongoose");


//registrar un veterinario
const createVeterinarian = async (req, res) => {

    try {
        const { names, lastNames, document, specialty, phone, email } = req.body;

        if (!names || !lastNames || !document || !specialty || !phone || !email) {
            return res.status(400).json({
                message: "Los campos nombres, apellidos, documento, especialidad, teléfono y correo son obligatorios"
            });
        }

        const veterinarian = new Veterinarian({
            names,
            lastNames,
            document,
            specialty,
            phone,
            email
        });

        await veterinarian.save();

        res.status(201).json({
            message: "Veterinario registrado correctamente",
            veterinarian
        });

        
        } catch (error) {

            console.error("Error al registrar veterinario:", error);

            if (error.code === 11000) {

                if (error.keyPattern?.document) {
                    return res.status(400).json({
                        message: "El documento ya está registrado"
                    });
                }

                if (error.keyPattern?.email) {
                    return res.status(400).json({
                        message: "El correo electrónico ya está registrado"
                    });
                }

            }

            res.status(500).json({
                message: "Error al registrar el veterinario"
            });
        }
};

//consultar todos los veterinarios
const getVeterinarians = async (req, res) => {

    try {
        const veterinarians = await Veterinarian.find();

        res.status(200).json({
            veterinarians
        });

    } catch (error) {
        console.error("Error al consultar veterinarios:", error);

        res.status(500).json({
            message: "Error al consultar los veterinarios"
        });
    }
};

//consultar un veterinario por su id
const getVeterinarianById = async (req, res) => {

    try {

        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
                return res.status(400).json({
                    message: "El ID del veterinario no tiene un formato válido"
                });
            }

        const veterinarian = await Veterinarian.findById(req.params.id);

        if (!veterinarian) {
            return res.status(404).json({
                message: "Veterinario no encontrado"
            });
        }

        res.status(200).json({
            veterinarian
        });

    } catch (error) {
        console.error("Error al consultar veterinario:", error);

        res.status(500).json({
            message: "Error al consultar el veterinario"
        });
    }
};

//actualizar un veterinario
const updateVeterinarian = async (req, res) => {

    try {

        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                message: "El ID del veterinario no tiene un formato válido"
        });
    }
        const { names, lastNames, document, specialty, phone, email } = req.body;

        if (!names || !lastNames || !document || !specialty || !phone || !email) {
            return res.status(400).json({
                message: "Los campos nombres, apellidos, documento, especialidad, teléfono y correo son obligatorios"
            });
        }

        const veterinarian = await Veterinarian.findByIdAndUpdate(
            req.params.id,
            {
                names,
                lastNames,
                document,
                specialty,
                phone,
                email
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!veterinarian) {
            return res.status(404).json({
                message: "Veterinario no encontrado"
            });
        }

        res.status(200).json({
            message: "Veterinario actualizado correctamente",
            veterinarian
        });

    } catch (error) {
        console.error("Error al actualizar veterinario:", error);

        res.status(500).json({
            message: "Error al actualizar el veterinario"
        });
    }
};

//eliminar un veterinario
const deleteVeterinarian = async (req, res) => {

    try {

        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                message: "El ID del veterinario no tiene un formato válido"
            });
        }

        const veterinarian = await Veterinarian.findByIdAndDelete(req.params.id);

        if (!veterinarian) {
            return res.status(404).json({
                message: "Veterinario no encontrado"
            });
        }

        res.status(200).json({
            message: "Veterinario eliminado correctamente"
        });

    } catch (error) {
        console.error("Error al eliminar veterinario:", error);

        res.status(500).json({
            message: "Error al eliminar el veterinario"
        });
    }
};

module.exports = {
    createVeterinarian,
    getVeterinarians,
    getVeterinarianById,
    updateVeterinarian,
    deleteVeterinarian
};