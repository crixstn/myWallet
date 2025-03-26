# MyWallet

Built with Node.js, Express, MongoDB, and React.

## Setup

### Requirements:

- MongoDB
- Node.js
- npm

### How to run locally:

1. Clone this repository.
2. In the backend, install dependencies:
   ```sh
   npm install
   ```
3. Start MongoDB:
   ```sh
   mongod --dbpath <path_to_data>
   ```
4. Set the `DATABASE_URL` variable in the `.env` file.
5. Start the server:
   ```sh
   npm start
   ```
6. In the frontend, install dependencies:
   ```sh
   npm install
   ```
7. Set `REACT_APP_API_URL` in the `.env` file.
8. Start the frontend:
   ```sh
   npm start
   ```
