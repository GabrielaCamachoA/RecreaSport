<p align="center">
  <img src="./front/public/images/RecreasportLOGO.png" alt="RecreaSport Logo" width="200"/>
</p>

<h1 align="center"> RecreaSport </h1>

Technological solution for the Alcaldía de Barranquilla  with its new recreational sport project

## Description
This project is a Single Page Application (SPA) designed to manage user participation in a recreational sports program of Barranquilla called "Deporte Recreativo".  

It provides different modules for each type of user:
- 👤 **Contestant Module** – Participants have access to a personal dashboard where they can view their enrollment details, attendance rate and scheduled training sessions.  
- 🏋️ **Trainer Module** – Trainers can monitor participants registered in their classes, track attendance, and manage training schedules.  
- 🏛️ **Admin Module (Mayor’s Office of Barranquilla)** – Administrators can oversee the program, access updated reports on the number of registered participants, manage disciplines, and control system configuration.  

The application is structured with modular views, a custom router for navigation, and a clean separation of scripts and styles.  

## Module Features

### Contestant Module
-  Personal dashboard with enrollment details (discipline, location, contact info).  
- Attendance tracking with visual indicators.  
- Access to scheduled training sessions.  

### Trainer Module
- View participants registered in their discipline.  
- Manage attendance records.  
- Monitor participant progress.  

### Admin Module (Mayor’s Office of Barranquilla)
- Access updated reports on the number of registered participants.  
- Track participation by locality and demographics.  

### General Features
- **Custom Router** – Handles client-side navigation without page reloads.  
- **Modular Design** – Organized views, scripts, and styles for scalability.  
- **Authentication Support** – Includes login/logout flow and role-based navigation.  
- **Responsive Layout** – Optimized for desktop and mobile devices.  
- **Lightweight SPA** – Built with vanilla JavaScript, no heavy frameworks required.  

- Connection to relational database (MySQL)
- **RESTful API** – Well-structured endpoints to expose and consume data
- CRUD operations


## Technologies Used
* Vanilla Javascript
* Node.js
* Express.js
* MySQL
* csv-parser (to load data from CSV files)
* Postman (send various types of API requests (HTTP) to endpoints and view the responses)
* dotenv for environment configuration
* nodemon (for development)

## 📥 Installation

Follow these steps to set up the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/GabrielaCamachoA/RecreaSport.git
   cd your-repo-name
   ```
2. **Install dependencies**
    ```bash
    npm install
    ```
3. **Set up environment variables**
    
    Create a .env file in the root directory.
    #### Environment Variables
    To run this project, you will need to add the following environment variables to your .env file

    `DB_HOST`

    `DB_DATABASE`

    `DB_USER`

    `DB_PASSWORD`

4. **Set up your database**

    #### Use the provided SQL file
    Import the `RecreaSport.sql` file into your MySQL server

## Running the Project
Start the server in development mode:
```
npm run dev
```
## Project credentials
**Admin** - 
User: Juan
Pass: 1010123456

**Trainer** -
User: Camila
Pass: 1011234567

**Contestant** -
User: María
Pass: 2020345678

## Application Preview 

![Admin module](./front/public/images/)

![Contestant module](./front/public/images/)

![Trainer module](./front/public/images/)

## License
This project is licensed under the MIT license. You are free to use, modify, and distribute it.
[MIT](https://choosealicense.com/licenses/mit/)

## 👤 Authors
Developed by:
- [@diegofelipe00Riwi](https://github.com/diegofelipe00Riwi)
- [@GabrielaCamachoA](https://github.com/GabrielaCamachoA)
- [@MariAngelesm](https://github.com/MariAngelesm)
- [@JoelR19](https://github.com/JoelR19)
- [@AnSan29](https://github.com/AnSan29)

