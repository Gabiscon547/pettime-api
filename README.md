# PetTime API

Servicio web desarrollado para el proyecto PetTime, una aplicación web para la gestión de una clínica veterinaria

## Descripción

Esta API permite realizar el registro de usuarios y el inicio de sesión mediante servicios web

## Tecnologías utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- bcrypt
- Postman
- Git y GitHub

## Servicios disponibles

### Registro de usuario

Método: `POST`

Ruta:

`/api/auth/register`

Permite registrar un nuevo usuario y validar que los datos obligatorios estén completos

### Inicio de sesión

Método: `POST`

Ruta:

`/api/auth/login`

Permite verificar el correo electrónico y la contraseña de un usuario registrado

Si los datos son correctos devuelve un mensaje de autenticación satisfactoria, si son incorrectos devuelve un error de autenticación

## Validaciones

La API realiza validaciones para:

- Campos obligatorios
- Correo electrónico ya registrado
- Documento ya registrado
- Credenciales incorrectas durante el inicio de sesión

Las contraseñas se almacenan protegidas mediante bcrypt

## Ejecución del proyecto

Para ejecutar el proyecto se deben instalar las dependencias con:

`npm install`

Luego se inicia el servidor con:

`node server.js`

El servicio funciona en:

`http://localhost:3000`

## Versionamiento

El proyecto utiliza Git para el control de versiones y GitHub como repositorio remoto

Repositorio:

https://github.com/Gabiscon547/pettime-api