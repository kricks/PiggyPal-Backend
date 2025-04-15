# PiggyPal Backend

This repository contains the backend portion of the PiggyPal application, built using Node.js, Express, and TypeScript with PostgreSQL as the database. The backend follows a modular architecture separating concerns into controllers, services, data access objects (DAOs), middleware, validation, and utilities.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Development](#development)
- [Testing](#testing)
- [License](#license)

## Features
- **Modular Architecture:** Controllers, services, DAOs, middleware, and validations are separated for maintainability and testability.
- **TypeScript:** Provides strong typing and compile-time type checking.
- **Express API:** Implements RESTful endpoints for managing guinea pig data.
- **PostgreSQL Integration:** Uses a connection pool and parameterized queries for secure database operations.
- **Validation:** Uses Joi to validate incoming HTTP request payloads.
- **Centralized Error Handling:** A single error-handling middleware to process and log errors uniformly.

## Project Structure

```
PiggyPal-Backend/
├── .env                   # Environment variables (ignored by Git)
├── .gitignore             # Files/folders ignored by Git
├── package.json           # Backend dependencies and scripts
├── tsconfig.json          # TypeScript compiler configuration
├── bin/
│   └── www                # File to bootstrap the Express server
├── public/                # Static assets
├── src/
│   ├── app.ts             # Express application setup and middleware registration
│   ├── db.config.ts       # PostgreSQL connection pool configuration
│   ├── controllers/       # Controllers for HTTP endpoints (e.g. guineaPigController.ts)
│   ├── dao/               # Data access objects (e.g. guineaPigDao.ts)
│   ├── middleware/        # Custom middleware (e.g. errorHandler.ts, authMiddleware.ts)
│   ├── models/            # TypeScript models and interfaces (e.g. GuineaPig.ts)
│   ├── routes/            # Route definitions (e.g. guinea-pigs.ts)
│   ├── services/          # Business logic layer (e.g. guineaPigService.ts)
│   ├── utilities/         # Helper functions (e.g. conversions.ts)
│   ├── validation/        # Joi validation schemas (e.g. guineaPigValidation.ts)
│   └── views/             # Templating views (if applicable)
```

## Technologies
- **Backend Framework:** Node.js with Express  
- **Language:** TypeScript
- **Database:** PostgreSQL
- **Validation:** Joi
- **Environment Management:** dotenv

## Installation

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/yourusername/PiggyPal-Backend.git
   cd PiggyPal-Backend
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   ```

## Configuration

1. **Environment Variables:**  
   Create a `.env` file in the project root with the following (update values as needed):
   ```properties
   DB_USER=DB_USER
   DB_HOST=DB_HOST
   DB_DATABASE=DB_DATABASE
   DB_PASSWORD=DB_PASSWORD
   DB_PORT=DB_PORT
   NODE_ENV=NODE_ENV
   ```
2. **Database Setup:**  
   Ensure you have PostgreSQL installed and a database called `piggy_pal` created.  
   Import the necessary schema or run the migrations (if available).

## Usage

### Running the Server
- **Development Mode:**  
  Use ts-node-dev (or your preferred method) for hot reloading during development.
  ```sh
  npm run dev
  ```
- **Production Mode:**  
  First, build the project then run:
  ```sh
  npm run build
  npm start
  ```

The server will run on the port specified (default is 3000 unless overridden by environment settings).

### API Endpoints
- **GET /guinea-pigs:** List all guinea pigs.
- **GET /guinea-pigs/:id:** Retrieve a specific guinea pig by ID.
- **POST /guinea-pigs/create:** Create a new guinea pig entry.
- **PUT /guinea-pigs/:id:** Update a guinea pig by ID.
- **DELETE /guinea-pigs/delete/:id:** Delete a guinea pig by ID.

## Development

- **Compiling TypeScript:**  
  The project uses TypeScript. Use the build script to compile your code to JavaScript:
  ```sh
  npm run build
  ```
- **Hot Reloading in Development:**  
  The `npm run dev` script uses `ts-node-dev` for automatic server restarts upon file changes.
- **Linting:**  
  Ensure code style consistency with ESLint (if configured):
  ```sh
  npm run lint
  ```

## Testing

- **Unit & Integration Tests:**  
  Set up and run tests using your preferred testing framework (e.g., Jest or Mocha).  
  Example commands:
  ```sh
  npm run test
  ```

## License

This project is licensed under the [MIT License](LICENSE).

---

Contributions are welcome! Please open an issue or submit a pull request for improvements or bug fixes.
