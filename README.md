# PetTime API

Servicio web desarrollado para el proyecto **PetTime – Sistema de Gestión para Clínica Veterinaria**

La API permite gestionar diferentes funcionalidades del sistema mediante servicios web conectados a una base de datos MongoDB

## Tecnologías utilizadas

* Node.js
* Express
* MongoDB
* Mongoose
* bcrypt
* Postman
* Git y GitHub

## Servicios disponibles

### Autenticación

**Registrar usuario**

Método: `POST`

Ruta:

`/api/auth/register`

Permite registrar un nuevo usuario y validar los datos obligatorios

**Iniciar sesión**

Método: `POST`

Ruta:

`/api/auth/login`

Permite verificar el correo electrónico y la contraseña de un usuario registrado

### Mascotas

**Registrar mascota**

Método: `POST`

Ruta:

`/api/pets`

Permite registrar la información de una mascota y asociarla con su dueño

### Veterinarios

**Registrar veterinario**

Método: `POST`

Ruta:

`/api/veterinarians`

Permite registrar la información de un veterinario

### Citas

**Registrar cita**

Método: `POST`

Ruta:

`/api/appointments`

Permite agendar una cita asociando una mascota, un veterinario, un servicio, una fecha y una hora

**Consultar citas**

Método: `GET`

Ruta:

`/api/appointments`

Permite consultar las citas registradas

**Eliminar cita**

Método: `DELETE`

Ruta:

`/api/appointments/:id`

Permite eliminar una cita registrada utilizando su identificador

## Validaciones

La API realiza validaciones para:

* Campos obligatorios
* Correo electrónico ya registrado
* Documento ya registrado
* Credenciales incorrectas durante el inicio de sesión
* Datos requeridos para registrar mascotas
* Datos requeridos para registrar citas

Las contraseñas se almacenan protegidas mediante `bcrypt`

## Ejecución del proyecto

Para ejecutar el proyecto localmente se deben instalar las dependencias:

`npm install`

Luego iniciar el servidor:

`node server.js`

La API funciona en:

`http://localhost:3000`

La base de datos utilizada es MongoDB

## Pruebas

Los servicios fueron probados inicialmente mediante Postman y posteriormente integrados con el frontend desarrollado en React

## Versionamiento

El proyecto utiliza Git para el control de versiones y GitHub como repositorio remoto

Repositorio:

`https://github.com/Gabiscon547/pettime-api`
