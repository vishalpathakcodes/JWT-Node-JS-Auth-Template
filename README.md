# Node.js JWT Authentication Project

This project is a demonstration of how to implement JWT (JSON Web Token) authentication in a Node.js application. JWT authentication is a popular method for securing APIs and web applications by generating tokens that contain encoded information about a user or session.

## Features

- User registration
- User login
- JWT token generation
- Authentication middleware for protected routes
- Simple REST API endpoints for demonstration purposes

## Technologies Used

- Node.js
- Express.js
- JSON Web Tokens (JWT)
- MongoDB (for storing user data)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed on your machine:

- Node.js (v14.x or higher)
- npm (Node Package Manager) or yarn

### Installation

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/vishalpathakcodes/JWT-Node-JS-Auth-Template.git
   ```



2. Install dependencies using npm or yarn:

   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

3. Environment variables:

   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/auth
   JWT_SECRET=yoursecretkey
   ```

   - `PORT`: The port on which the server will run.
   - `MONGODB_URI`: MongoDB connection string.
   - `JWT_SECRET`: Secret key for JWT token generation.

4. Start the server:

   ```
   npx nodemon
   ```

6. The server should now be running locally. You can access it at `http://localhost:PORT`.

## API Endpoints

- **POST  /register**: Register a new user. Requires `name`, `email`, and `password` in the request body.
- **POST /login**: Login with existing credentials. Requires `email` and `password` in the request body.
- **GET /home**: Get user information. Requires a valid JWT token in the `Authorization` header.


## Acknowledgments

- This project was inspired by various tutorials and resources available online.
- Special thanks to the Node.js, Express.js, and JWT communities for providing excellent tools and documentation.
