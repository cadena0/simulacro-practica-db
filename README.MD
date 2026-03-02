# Hybrid Persistence System - CSV Migration API

## Overview

This project implements a hybrid persistence architecture using PostgreSQL and MongoDB.  
It reads data from a CSV file, processes it, and stores it in both databases depending on the data structure.  
An Express server exposes REST API endpoints to interact with the stored data.

The system follows an ETL process:

- Extract data from a CSV file
- Transform the data if necessary
- Load structured data into PostgreSQL
- Load document-based data into MongoDB
- Expose API endpoints using Express

---

## Technologies

- Node.js
- Express
- PostgreSQL
- MongoDB
- CSV file processing

---

## Dependencies

The project uses the following libraries:

### express
A minimal and flexible Node.js web framework used to create the REST API and handle HTTP requests.

### mongoose
An ODM (Object Data Modeling) library for MongoDB.  
It is used to define schemas and interact with MongoDB collections.

### pg
A PostgreSQL client for Node.js.  
Used to connect and execute SQL queries in the PostgreSQL database.

### csv-parser
A streaming CSV parser that converts CSV rows into JavaScript objects.

### fs
Node.js built-in File System module.  
Used to read the CSV file from the local directory.

### dotenv
Loads environment variables from a `.env` file into `process.env`.  
Used to securely manage database credentials and configuration.

---

## Project Structure Example

```
project-root/
│
├── src/
│   ├── config/
│   │   ├── mongo.js
│   │   └── postgres.js
│   │
│   ├── models/
│   │   └── model.js
│   │
│   ├── services/
│   │   └── migrationService.js
│   │
│   ├── routes/
│   │   └── routes.js
│   │
│   └── server.js
│
├── data/
│   └── data.csv
│
├── .env
├── package.json
└── README.md
```

---

## Environment Variables

Create a `.env` file in the root directory:

```
PORT=3000

# PostgreSQL configuration
PG_HOST=localhost
PG_PORT=5432
PG_USER=your_username
PG_PASSWORD=your_password
PG_DATABASE=your_database

# MongoDB configuration
MONGO_URI=mongodb://localhost:27017/your_database
```

---

## Installation

1. Clone the repository:

```
git clone <repository-url>
```

2. Navigate into the project folder:

```
cd project-folder
```

3. Install dependencies:

```
npm install
```

---

## Scripts

Make sure your `package.json` contains the following script:

```
"scripts": {
  "dev": "nodemon src/server.js"
}
```

If you do not have nodemon installed, install it as a development dependency:

```
npm install --save-dev nodemon
```

---

## Running the Project

To start the server in development mode, run:

```
npm run dev
```

The application will start on the port defined in your `.env` file.

Example output:

```
Server running on http://localhost:3000
```

---

## How the Migration Works

1. The `fs` module reads the CSV file from the local directory.
2. `csv-parser` converts CSV rows into JavaScript objects.
3. The system processes and validates the data.
4. Structured relational data is inserted into PostgreSQL using `pg`.
5. Document-based or flexible data is inserted into MongoDB using `mongoose`.
6. Express exposes endpoints to access and manage the stored data.

---

## Example API Endpoints

```
GET /api/data
POST /api/migrate
```

- GET /api/data → Retrieves stored records.
- POST /api/migrate → Executes the CSV migration process.

---

## Requirements

- Node.js installed
- PostgreSQL running
- MongoDB running

Make sure both databases are active before starting the server.

---

## License

This project is intended for educational purposes.