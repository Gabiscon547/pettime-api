# PetTime API

Servicio web desarrollado para el proyecto **PetTime – Sistema de Gestión para Clínica Veterinaria**

La API permite gestionar diferentes funcionalidades del sistema mediante servicios web conectados a una base de datos MongoDB

## Tecnologías utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- bcrypt
- Postman
- Git y GitHub

## Servicios disponibles

### Autenticación

#### Registrar usuario

**Método:** `POST`

**Ruta:**

`/api/auth/register`

Permite registrar un nuevo usuario y validar los datos obligatorios, el correo electrónico y el documento

#### Iniciar sesión

**Método:** `POST`

**Ruta:**

`/api/auth/login`

Permite verificar el correo electrónico y la contraseña de un usuario registrado

### Mascotas

#### Registrar mascota

**Método:** `POST`

**Ruta:**

`/api/pets`

Permite registrar una mascota y asociarla con su dueño mediante el ID del usuario

#### Consultar mascotas

**Método:** `GET`

**Ruta:**

`/api/pets`

Permite consultar las mascotas registradas

#### Consultar una mascota

**Método:** `GET`

**Ruta:**

`/api/pets/:id`

Permite consultar la información de una mascota utilizando su identificador

#### Actualizar mascota

**Método:** `PUT`

**Ruta:**

`/api/pets/:id`

Permite actualizar la información de una mascota registrada

#### Eliminar mascota

**Método:** `DELETE`

**Ruta:**

`/api/pets/:id`

Permite eliminar una mascota utilizando su identificador

### Veterinarios

#### Registrar veterinario

**Método:** `POST`

**Ruta:**

`/api/veterinarians`

Permite registrar la información de un veterinario

#### Consultar veterinarios

**Método:** `GET`

**Ruta:**

`/api/veterinarians`

Permite consultar los veterinarios registrados

#### Consultar un veterinario

**Método:** `GET`

**Ruta:**

`/api/veterinarians/:id`

Permite consultar la información de un veterinario utilizando su identificador

#### Actualizar veterinario

**Método:** `PUT`

**Ruta:**

`/api/veterinarians/:id`

Permite actualizar la información de un veterinario registrado

#### Eliminar veterinario

**Método:** `DELETE`

**Ruta:**

`/api/veterinarians/:id`

Permite eliminar un veterinario utilizando su identificador

### Citas

#### Registrar cita

**Método:** `POST`

**Ruta:**

`/api/appointments`

Permite agendar una cita asociando una mascota, un veterinario, un servicio, una fecha y una hora

#### Consultar citas

**Método:** `GET`

**Ruta:**

`/api/appointments`

Permite consultar las citas registradas

#### Consultar una cita

**Método:** `GET`

**Ruta:**

`/api/appointments/:id`

Permite consultar una cita utilizando su identificador

#### Actualizar cita

**Método:** `PUT`

**Ruta:**

`/api/appointments/:id`

Permite actualizar la información de una cita registrada

#### Eliminar cita

**Método:** `DELETE`

**Ruta:**

`/api/appointments/:id`

Permite eliminar una cita utilizando su identificador

#### Consultar historial de una mascota

**Método:** `GET`

**Ruta:**

`/api/appointments/pet/:petId/history`

Permite consultar el historial de citas de una mascota mediante su identificador

## Validaciones

La API realiza validaciones para:

- Campos obligatorios
- Correo electrónico ya registrado
- Documento ya registrado
- Credenciales incorrectas durante el inicio de sesión
- Datos requeridos para registrar mascotas
- Datos requeridos para registrar veterinarios
- Datos requeridos para registrar citas
- Identificadores relacionados entre usuarios, mascotas, veterinarios y citas

Las contraseñas se almacenan protegidas mediante `bcrypt`

## Ejecución del proyecto

Para ejecutar el proyecto localmente se deben instalar las dependencias:

`npm install`

Luego se inicia el servidor:

`node server.js`

La API funciona en:

`http://localhost:3000`

La base de datos utilizada es MongoDB

## Pruebas

Los servicios fueron probados inicialmente mediante Postman y posteriormente integrados con el frontend desarrollado en React

## Versionamiento

El proyecto utiliza Git para el control de versiones y GitHub como repositorio remoto

**Repositorio:**

https://github.com/Gabiscon547/pettime-api