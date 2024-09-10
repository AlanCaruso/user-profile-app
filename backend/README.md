# Backend API

This project serves as a backend API using Node.js and Express.

## Technologies Used

- Node.js
- Express
- CORS
- Body-parser
- Multer

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

Make sure you have Node.js installed on your computer.

### Installing Dependencies

In the project directory, run:

```
npm install
```

### Running the Server

To start the server, run:

```
node server.js
```

The server will run on [http://localhost:5000](http://localhost:5000).

## API Endpoints

### GET `/api/data`

Returns the current data object containing name and avatar information.

### POST `/api/name`

Updates the `name` field in the data object.

### POST `/api/upload-avatar`

Uploads an avatar image to the server. Expects a `multipart/form-data` request with an `avatar` field.

## Learn More

To learn more about Node.js and Express, check out their documentation:

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express Documentation](https://expressjs.com/)
