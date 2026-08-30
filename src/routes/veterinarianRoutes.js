const express = require("express");

const router = express.Router();

const {
    createVeterinarian,
    getVeterinarians,
    getVeterinarianById,
    updateVeterinarian,
    deleteVeterinarian
} = require("../controllers/VeterinarianController");

//registrar un veterinario
router.post("/", createVeterinarian);

//consultar todos los veterinarios
router.get("/", getVeterinarians);

//consultar un veterinario por su id
router.get("/:id", getVeterinarianById);

//actualizar un veterinario
router.put("/:id", updateVeterinarian);

//eliminar un veterinario
router.delete("/:id", deleteVeterinarian);

module.exports = router;