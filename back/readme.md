# RecreaSport - Backend

## 🚀 Descripción del Proyecto

Este es el backend del proyecto **RecreaSport**, una plataforma para la gestión de actividades deportivas en comunidades locales.

---

## 📚 Documentación

Aquí se registra el progreso del desarrollo y la estructura del proyecto.

### **Base de Datos**

- **Archivo**: `docs/recreasportDB.sql`
- **Descripción**: Contiene la definición de la base de datos (tablas, relaciones, etc.).
- **Última Actualización**: [**23/09/2025**] - [**creacion inicial de archivo sql.**]

### **Diagramas**

- **Archivo**: `docs/Diagrama del Modelo Relacional1.pdf`
- **Descripción**: Diagrama visual del esquema de la base de datos.
- **Última Actualización**: [**23/09/2025**] - [**creacion inicial de archivo pdf.**]

### **Seeders y Datos de Carga**

- **Carpeta**: `server/seeders/`
- **Descripción**: Contiene los scripts para poblar la base de datos con datos iniciales o de prueba. El archivo `run_seeders.js` ejecuta la carga de datos.
- **Archivos de datos**: Los archivos CSV en `server/data/` se usan para importar la información a la base de datos.
- **Última Actualización**: 23/08/2025 - Se creó la estructura de seeders para la carga inicial de datos.

## 💻 Configuración y Ejecución

### **Instalación de Dependencias**

```bash
npm install
```

### Configuración del Entorno

- .env y configura tus variables de entorno (por ejemplo, la conexión a la base de datos).

## Implementacion de ORM

- Un ORM (Mapeo Relacional de Objetos) como Sequelize nos permite interactuar con la base de datos usando objetos y métodos de JavaScript en lugar de escribir código SQL. Esto simplifica el desarrollo, reduce errores y hace que la lógica de nuestra aplicación sea más fácil de mantener.

  #### Modelos de Sequelize

  - Hemos definido modelos para cada tabla. Un modelo es una representación de una tabla de la base de datos, lo que nos permite manipular los datos como si fueran objetos JavaScript.

    - ejemplo:
    - En este archivo, defines el modelo para la tabla Users usando la sintaxis de Sequelize.

    ```js
    import { DataTypes } from "sequelize";
    import { sequelize } from "../conexionDB.js";

    const User = sequelize.define(
      "User",
      {
        id_user: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: { type: DataTypes.STRING(100), allowNull: false },
        surname: { type: DataTypes.STRING(100), allowNull: false },
        at_birthday: { type: DataTypes.DATEONLY, allowNull: false },
        phone: { type: DataTypes.STRING(50), allowNull: false },
        id_document_type: { type: DataTypes.INTEGER, allowNull: false },
        number_id: { type: DataTypes.STRING(50), allowNull: false },
        id_gender: { type: DataTypes.INTEGER, allowNull: false },
        id_demographic: { type: DataTypes.INTEGER, allowNull: false },
        id_rol: { type: DataTypes.INTEGER, allowNull: false },
      },
      {
        tableName: "Users",
        timestamps: false,
      }
    );

    export default defineUser;
    ```

  #### ¿Cómo funcionan?

  - Cada archivo en la carpeta server/models (por ejemplo, Users.js) representa una tabla de la base de datos. Dentro de estos archivos, se define el esquema de la tabla (columnas, tipos de datos) y sus relaciones.

  Este enfoque facilita la lectura, el mantenimiento y la escalabilidad del código, permitiendo que el equipo trabaje con la base de datos de forma más intuitiva.

### Carga de Datos Iniciales (Seeders)

- Para poblar la base de datos con los datos de ejemplo, ejecuta:

```bash
node seeders/run_seeders.js
```

### Iniciar el Servidor Express

- Archivo: app.js
- Descripción: Archivo principal que inicia el servidor Express.
- Comando:

```bash
npm run dev
```

---

## 🛠️ Tecnologías Utilizadas

- Node.js
- MySQL
- Express
- mysql2
- sequelize -> ORM
- csv-parser
- [**Agrega más tecnologías según las vayas usando**]

---

## 📝 Notas del Desarrollador

- **23/08/2025** - **Se añadieron las dependencias del proyecto al control de versiones (git add .). Git generó advertencias sobre finales de línea (CRLF a LF) debido a la compatibilidad entre sistemas operativos (Windows y Linux/macOS). No es un error crítico.**

- **24/08/2025** - **Se crearon las carpetas seeders/ y data/. Se implementó el script run_seeders.js para la carga de archivos CSV. Se creó app.js para iniciar el servidor Express.**
