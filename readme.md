# Full Stack App for Vidcort

This is a basic full-stack application to understand how MongoDB connects to the backend. This app also delves into the usage of the Axios package and proxies.

## Project Structure

- **Backend**: Runs at `localhost:3000`
- **Frontend**: Runs at the port specified by Vite (typically `localhost:5173`)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- MongoDB installed and running locally or an Atlas account for a hosted MongoDB instance

## Installation

### Backend Setup

1. **Navigate to the backend directory**:
   ```sh
   cd backend
2. **Install dependencies**:
    ```sh
    npm install express mongoose dotenv
3. **Create a .env file in the root of the backend directory and add the following**:
    ```sh
    MONGO_URI=your_mongodb_connection_string
    PORT=3000
4. **Run the backend server**:

    ```sh
    npm start
5. **Frontend Setup**:
    Navigate to the frontend directory:
    ```sh
    cd frontend
6.**Install dependencies**:

    npm install react react-dom react-hook-form axios
7.**Create a vite.config.js in the root of the frontend directory if it doesn't exist and add the following**:

    export default {
      server: {
     proxy: {
        '/api': 'http://localhost:3000',
            },
        },
    };

8.**Run the frontend server**:
    
    npm run dev

9.**Usage**

Backend Connecting to MongoDB:
The backend connects to MongoDB using Mongoose. Ensure your MongoDB URI is correctly configured in the .env file.
API Endpoints:
    
    /api/register: POST endpoint to register a new user.
    /api/users: GET endpoint to retrieve all users.
10.**Frontend
Form Submission**:

The frontend form captures user data (name and email) and submits it to the backend using Axios.