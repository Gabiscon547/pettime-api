const Pet = require("../models/Pet");
const User = require("../models/User");
const mongoose = require("mongoose");

//registrar una mascota
const createPet = async (req, res) => {

    try {
        const { name, species, breed, age, weight, owner, photo } = req.body;

        if (!name || !species || age === undefined || weight === undefined || !owner) {
            return res.status(400).json({
                message: "Los campos nombre, especie, edad, peso y dueño son obligatorios"
            });
        }

        // validar formato del ID del dueño
        if (!mongoose.Types.ObjectId.isValid(owner)) {
            return res.status(400).json({
                message: "El ID del dueño no tiene un formato válido"
            });
        }

        // comprobar que el dueño exista
        const existingOwner = await User.findById(owner);

        if (!existingOwner) {
            return res.status(404).json({
                message: "El dueño indicado no existe"
            });
        }

        const pet = new Pet({
            name,
            species,
            breed,
            age,
            weight,
            owner,
            photo
        });

        await pet.save();

        res.status(201).json({
            message: "Mascota registrada correctamente",
            pet
        });

    } catch (error) {
        console.error("Error al registrar mascota:", error);

        res.status(500).json({
            message: "Error al registrar la mascota"
        });
    }
};

//consultar todas las mascotas
const getPets = async (req, res) => {

    try {
        const pets = await Pet.find().populate("owner", "names lastNames document");
        res.status(200).json({
            pets
        });

    } catch (error) {
        console.error("Error al consultar mascotas:", error);
        res.status(500).json({
            message: "Error al consultar las mascotas"
        });
    }
};

//consultar una mascota por su id
const getPetById = async (req, res) => {

    try {

        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                message: "El ID de la mascota no tiene un formato válido"
            });
        }

        const pet = await Pet.findById(req.params.id).populate(
            "owner",
            "names lastNames document"
        );

        if (!pet) {
            return res.status(404).json({
                message: "Mascota no encontrada"
            });
        }

        res.status(200).json({
            pet
        });

    } catch (error) {
        console.error("Error al consultar mascota:", error);
        res.status(500).json({
            message: "Error al consultar la mascota"
        });
    }
};

//actualizar una mascota
const updatePet = async (req, res) => {

    try {

        //validar formato del ID de la mascota

        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                message: "El ID de la mascota no tiene un formato válido"
            });
        }

        const { name, species, breed, age, weight, owner, photo } = req.body;

        if (!name || !species || age === undefined || weight === undefined || !owner) {
            return res.status(400).json({
                message: "Los campos nombre, especie, edad, peso y dueño son obligatorios"
            });
        }

        const pet = await Pet.findByIdAndUpdate(
            req.params.id,
            {
                name,
                species,
                breed,
                age,
                weight,
                owner,
                photo
            },
            {
                new: true,
                runValidators: true
            }
        ).populate("owner", "names lastNames document");

        if (!pet) {
            return res.status(404).json({
                message: "Mascota no encontrada"
            });
        }

        res.status(200).json({
            message: "Mascota actualizada correctamente",
            pet
        });

    } catch (error) {

        console.error("Error al actualizar mascota:", error);

        res.status(500).json({
            message: "Error al actualizar la mascota"
        });
    }
};


//eliminar una mascota
const deletePet = async (req, res) => {

    try {

        //validar formato del ID de la mascota

        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                message: "El ID de la mascota no tiene un formato válido"
            });
        }

        const pet = await Pet.findByIdAndDelete(req.params.id);

        if (!pet) {
            return res.status(404).json({
                message: "Mascota no encontrada"
            });
        }

        res.status(200).json({
            message: "Mascota eliminada correctamente"
        });

    } catch (error) {

        console.error("Error al eliminar mascota:", error);

        res.status(500).json({
            message: "Error al eliminar la mascota"
        });
    }
};

module.exports = {

    createPet,
    getPets,
    getPetById,
    updatePet,
    deletePet

};