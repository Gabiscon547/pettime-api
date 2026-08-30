# PetTime API

Servicio web desarrollado para el proyecto PetTime, una aplicación web para la gestión de una clínica veterinaria

## Descripción

PetTime API permite gestionar diferentes funcionalidades de una clínica veterinaria mediante servicios web REST, la API permite administrar usuarios, mascotas, veterinarios y citas, realizando operaciones de registro, consulta, actualización y eliminación

También cuenta con validaciones para controlar datos obligatorios, identificadores inválidos, registros duplicados y existencia de mascotas y veterinarios relacionados con las citas

## Tecnologías utilizadas

* Node.js
* Express
* MongoDB
* Mongoose
* bcrypt
* Postman
* Git y GitHub

## Servicios disponibles

### Autenticación de usuarios

**Registro de usuario**

Método: `POST`

Ruta:

`/api/auth/register`

Permite registrar un nuevo usuario y validar que los datos obligatorios estén completos

**Inicio de sesión**

Método: `POST`

Ruta:

`/api/auth/login`

Permite verificar las credenciales de un usuario registrado

### Gestión de mascotas

**Registrar mascota**

Método: `POST`

Ruta:

`/api/pets`

Permite registrar una mascota con sus datos correspondientes

**Consultar mascotas**

Método: `GET`

Ruta:

`/api/pets`

Permite consultar las mascotas registradas

**Consultar mascota por ID**

Método: `GET`

Ruta:

`/api/pets/:id`

Permite consultar una mascota específica mediante su identificador

**Actualizar mascota**

Método: `PUT`

Ruta:

`/api/pets/:id`

Permite actualizar la información de una mascota registrada

**Eliminar mascota**

Método: `DELETE`

Ruta:

`/api/pets/:id`

Permite eliminar una mascota mediante su identificador

### Gestión de veterinarios

**Registrar veterinario**

Método: `POST`

Ruta:

`/api/veterinarians`

Permite registrar un veterinario y validar sus datos

**Consultar veterinarios**

Método: `GET`

Ruta:

`/api/veterinarians`

Permite consultar los veterinarios registrados

**Consultar veterinario por ID**

Método: `GET`

Ruta:

`/api/veterinarians/:id`

Permite consultar un veterinario específico mediante su identificador

**Actualizar veterinario**

Método: `PUT`

Ruta:

`/api/veterinarians/:id`

Permite actualizar la información de un veterinario

**Eliminar veterinario**

Método: `DELETE`

Ruta:

`/api/veterinarians/:id`

Permite eliminar un veterinario mediante su identificador

### Gestión de citas

**Registrar cita**

Método: `POST`

Ruta:

`/api/appointments`

Permite registrar una cita relacionando una mascota con un veterinario

**Consultar citas**

Método: `GET`

Ruta:

`/api/appointments`

Permite consultar las citas registradas

**Consultar cita por ID**

Método: `GET`

Ruta:

`/api/appointments/:id`

Permite consultar una cita específica mediante su identificador

**Actualizar cita**

Método: `PUT`

Ruta:

`/api/appointments/:id`

Permite actualizar la información de una cita

**Eliminar cita**

Método: `DELETE`

Ruta:

`/api/appointments/:id`

Permite eliminar una cita mediante su identificador

**Consultar historial de una mascota**

Método: `GET`

Ruta:

`/api/appointments/pet/:petId/history`

Permite consultar el historial de citas asociadas a una mascota

## Validaciones

La API realiza validaciones para:

* Campos obligatorios
* Correos electrónicos y documentos duplicados
* Identificadores con formato inválido
* Registros inexistentes
* Mascotas inexistentes al registrar o actualizar citas
* Veterinarios inexistentes al registrar o actualizar citas
* Fechas con formato inválido
* Horas con formato inválido
* Credenciales incorrectas durante el inicio de sesión

Las contraseñas de los usuarios se almacenan protegidas mediante bcrypt

## Ejecución del proyecto

Para ejecutar el proyecto se deben instalar las dependencias con:

`npm install`

Luego se inicia el servidor con:

`node server.js`

El servicio funciona en:

`http://localhost:3000`

La conexión a la base de datos se realiza mediante MongoDB

## Pruebas de los servicios

Los servicios fueron probados mediante Postman, verificando respuestas exitosas y respuestas correspondientes a diferentes casos de validación

Entre los códigos HTTP utilizados se encuentran:

* `200 OK`: operación realizada correctamente
* `201 Created`: registro creado correctamente
* `400 Bad Request`: datos o identificadores inválidos
* `404 Not Found`: recurso no encontrado

## Versionamiento

El proyecto utiliza Git para el control de versiones y GitHub como repositorio remoto

Repositorio:

https://github.com/Gabiscon547/pettime-api