const express = require("express");

const router = express.Router();

const { createPet, getPets, getPetById, updatePet, deletePet } = require("../controllers/PetController");

//registrar una mascota
router.post("/", createPet);

//consultar todas las mascotas
router.get("/", getPets);

//consultar una mascota por su id
router.get("/:id", getPetById);

//actualizar una mascota
router.put("/:id", updatePet);

//eliminar una mascota
router.delete("/:id", deletePet);

module.exports = router;