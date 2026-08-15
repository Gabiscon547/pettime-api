//importar express para crear las rutas
const express = require("express");

//importar el modelo de usuario
const User = require("../models/User");

//importar bcrypt para proteger las contraseñas
const bcrypt = require("bcrypt");

//crear un router de express
const router = express.Router();

//ruta para registrar un usuario
router.post("/register", async (req, res) => {
    try {
        //obtener los datos enviados por el usuario
        const {
            names,
            lastNames,
            document,
            birthDate,
            email,
            password
        } = req.body;

        //validar que todos los campos estén completos
        if (
            !names ||
            !lastNames ||
            !document ||
            !birthDate ||
            !email ||
            !password
        ) {
            return res.status(400).json({
                message: "Todos los campos son obligatorios"
            });
        }

        //verificar si ya existe un usuario con ese correo
        const existingEmail = await User.findOne({ email });

        if (existingEmail) {
            return res.status(400).json({
                message: "El correo electrónico ya está registrado"
            });
        }

        //verificar si ya existe un usuario con ese documento
        const existingDocument = await User.findOne({ document });

        if (existingDocument) {
            return res.status(400).json({
                message: "El documento ya está registrado"
            });
        }

        //proteger la contraseña antes de guardarla
        const hashedPassword = await bcrypt.hash(password, 10);

        //crear el nuevo usuario
        const newUser = new User({
            names,
            lastNames,
            document,
            birthDate,
            email,
            password: hashedPassword
        });

        //guardar el usuario en MongoDB
        await newUser.save();

        //enviar respuesta de registro exitoso
        res.status(201).json({
            message: "Usuario registrado correctamente",
            user: {
                id: newUser._id,
                names: newUser.names,
                lastNames: newUser.lastNames,
                document: newUser.document,
                birthDate: newUser.birthDate,
                email: newUser.email
            }
        });

    } catch (error) {
        //mostrar el error en la consola
        console.error("Error al registrar usuario:", error);

        //enviar respuesta de error
        res.status(500).json({
            message: "Error interno del servidor"
        });
    }
});


//ruta para iniciar sesión
router.post("/login", async (req, res) => {
    try {
        //obtener el correo y la contraseña enviados
        const { email, password } = req.body;

        //validar que los campos estén completos
        if (!email || !password) {
            return res.status(400).json({
                message: "El correo y la contraseña son obligatorios"
            });
        }

        //buscar el usuario por correo
        const user = await User.findOne({ email });

        //verificar si el usuario existe
        if (!user) {
            return res.status(401).json({
                message: "Error en la autenticación"
            });
        }

        //comparar la contraseña ingresada con la contraseña guardada
        const passwordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        //verificar si la contraseña es correcta
        if (!passwordCorrect) {
            return res.status(401).json({
                message: "Error en la autenticación"
            });
        }

        //responder cuando la autenticación es correcta
        res.status(200).json({
            message: "Autenticación satisfactoria",
            user: {
                id: user._id,
                names: user.names,
                lastNames: user.lastNames,
                email: user.email
            }
        });

    } catch (error) {
        //mostrar el error en la consola
        console.error("Error en el inicio de sesión:", error);

        //enviar respuesta de error
        res.status(500).json({
            message: "Error interno del servidor"
        });
    }
});

//exportar las rutas
module.exports = router;