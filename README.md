# MERN Stack Email Authentication

This is a **MERN (MongoDB, Express, React, Node.js)** application that implements email-based authentication with **JWT (JSON Web Token)** and **Nodemailer** for sending emails.

## Features
- User Registration with Email Verification
- User Login with JWT Authentication
- Password Reset via Email
- Protected Routes with JWT
- Logout Functionality

## Tech Stack
- **Frontend:** React, Axios, React Router
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, Nodemailer, bcryptjs

## Installation

### Clone the repository
```sh
git clone https://github.com/your-username/mern-email-auth.git
cd mern-email-auth
```

### Backend Setup
1. Navigate to the `server` directory:
   ```sh
   cd server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup
1. Navigate to the `client` directory:
   ```sh
   cd ../client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend server:
   ```sh
   npm run dev
   ```

## Usage
- Register a new user and verify the email via the link received.
- Log in using email and password to get a JWT token.
- Access protected routes using the token.
- Use "Forgot Password" to reset the password.

## License
This project is open-source and available under the [MIT License](LICENSE).
