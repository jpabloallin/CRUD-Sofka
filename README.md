# CRUD-Sofka
CRUD about contacts using Springboot, React, MySQL

### Ejecución.

Clonar el repositorio usando el comando: git clone https://github.com/jpabloallin/CRUD-Sofka

Instalar el node_modules en el paquete frontend utilizando el comando: npm install

Recuerda que debes correr primero la apliación de springboot [backend] y luego correr el proyectode react con el comando npm start para que pueda llamar la API.

¡Maneja tu agenda de contactos a tu antojo! :)

### Paquetes

El documeto `CRUD-Sofka` tiene los siguientes archivos:

- [backend] - Contiene la parte del servidor en Sprintboot, conexión a base de datos, ontroladores para las rutas, etc.
- [frontend] - Contiene la parte del cliente, formularios para crear y editar contactos, ver lista de contactos, eliminar contactos.
- [contact.sql] - Base de datos de contacto.
- [contact Datagrid project] - Proyecto de la base de datos en Datagrid.

### Base de datos

La app maneja una unica base de datos la cual es `MySQL`.

@Author Juan Pablo Allin Cañas - jpac.647@gmail.com
@Version 0.0.0

"dependencies": {
   "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.4",
    "@testing-library/user-event": "^13.5.0",
    "bootstrap": "5.1",
    "react": "^17.0.2",
    "react-bootstrap": "^2.2.1",
    "react-cookie": "^4.1.1",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.3.0",
    "react-scripts": "5.0.0",
    "reactstrap": "^8.10.0",
    "web-vitals": "^2.1.4"
  }
