# User Profile App

This project consists of a simple API and a frontend that allows users to retrieve and store a name, and upload an avatar image.

The API is built with Node.js (Express), and the frontend is a minimal React app. The project covers the following:

1. **Retrieve Name**: An API endpoint that returns the stored name.
2. **Submit Name**: An API endpoint that allows users to submit and store a name.
3. **Upload Avatar**: An API endpoint that allows users to upload an avatar image.
4. **Frontend**: A React frontend to interact with the API, allowing users to view the stored name, submit a new name, and upload an avatar.

## Features

- **API**

  - `GET /api/name`: Returns the current stored name.
  - `POST /api/name`: Takes a name and stores it in the database.
  - `POST /api/avatar`: Accepts an avatar image and stores it on the server.

- **Frontend**
  - Displays the current name stored in the API.
  - Provides an input field to submit a new name.
  - Provides an input field to upload an avatar image.

## Technologies

- **Backend**: Node.js, Express, Multer (for handling file uploads), Mongoose (for MongoDB storage).
- **Frontend**: React, Axios (for API requests).

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB installed or access to a MongoDB instance

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AlanCaruso/user-profile-app.git
   cd user-profile-app
   ```

2. **Install server dependencies**:

   ```bash
   cd backend
   npm install
   ```

3. **Install client dependencies**:

   ```bash
   cd ../frontend
   npm install
   ```

### Running the Backend

1. **Start the MongoDB server**:

   If you are running MongoDB locally, make sure it's running.

2. **Run the backend**:

   ```bash
   cd backend
   npm start
   ```

   The backend should now be running on `http://localhost:5000`.

### Running the Frontend

1. **Run the frontend**:

   ```bash
   cd frontend
   npm start
   ```

   The frontend should now be running on `http://localhost:3000`.

## API Endpoints

### `GET /api/name`

- **Description**: Returns the stored name.
- **Response**:

  ```json
  {
    "name": "John Doe"
  }
  ```

### `POST /api/name`

- **Description**: Stores a new name.
- **Request Body**:

  ```json
  {
    "name": "Jane Doe"
  }
  ```

- **Response**:

  ```json
  {
    "message": "Name updated successfully."
  }
  ```

### `POST /api/avatar`

- **Description**: Uploads an avatar image.
- **Form Data**:

  - `avatar`: The image file to upload.

- **Response**:

  ```json
  {
    "message": "Avatar uploaded successfully."
  }
  ```

## Frontend Features

### Name Display and Submission

1. The current stored name is displayed on the frontend.
2. You can input a new name and submit it to update the name in the backend.

### Avatar Upload

1. Use the file input to select an image to upload as the avatar.
2. On submission, the avatar will be sent to the backend and stored.

## Example Usage

1. Open the frontend (`http://localhost:3000`).
2. See the current stored name.
3. Use the input field to submit a new name.
4. Upload an avatar using the file input.

## License

This project is licensed under the MIT License.
