# Zerodha Clone

A full-stack Zerodha-inspired trading platform clone built with React, Express, and MongoDB.

This project is split into three parts:

- `frontend` for the public landing website
- `dashboard` for the authenticated trading dashboard
- `backend` for authentication, portfolio data, and order APIs

## Features

- Responsive landing pages for home, about, products, pricing, support, signup, and login
- User signup and login with JWT-based authentication
- Cookie-based session verification for protected dashboard access
- Holdings and positions data rendering in the dashboard
- Order placement API for creating new orders
- Separate frontend and dashboard apps for a cleaner project structure

## Tech Stack

- React
- React Router
- Express.js
- MongoDB with Mongoose
- JWT authentication
- Cookie-based auth flow
- Material UI
- Chart.js

## Project Structure

```text
Zerodha clone/
├── frontend/   # Public website
├── dashboard/  # Logged-in dashboard
├── backend/    # Express API and database logic
└── README.md
```

## Local Setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd "Zerodha clone"
```

### 2. Install dependencies

Install dependencies in each app separately:

```bash
cd frontend && npm install
cd ../dashboard && npm install
cd ../backend && npm install
```

## Environment Variables

Create a `.env` file inside the `backend` folder:

```env
MONGO_URL=your_mongodb_connection_string
TOKEN_KEY=your_jwt_secret
```

## Running the Project

Open three terminals and run:

### Backend

```bash
cd backend
npm start
```

Runs on `http://localhost:3002`

### Frontend

```bash
cd frontend
npm start
```

Runs on `http://localhost:3000`

### Dashboard

```bash
cd dashboard
npm start
```

Runs on `http://localhost:3001`

## API Endpoints

The backend currently exposes these routes:

- `POST /signup` - register a new user
- `POST /login` - log in a user
- `GET /verify` - verify authenticated user from cookie token
- `POST /logout` - clear auth cookie
- `GET /allHoldings` - fetch holdings data
- `GET /allPositions` - fetch positions data
- `POST /newOrder` - create a new order

## Authentication Flow

- Users sign up or log in through the frontend
- The backend creates a JWT and stores it in an HTTP-only cookie
- The dashboard checks `/verify` before allowing access
- Unauthenticated users are redirected to the login page

## Notes

- The backend CORS configuration currently allows `http://localhost:3000` and `http://localhost:3001`
- MongoDB must be running or reachable through the `MONGO_URL` connection string
- The backend includes commented seed routes for holdings and positions data

## Future Improvements

- Add screenshots or demo GIFs
- Add input validation and better error handling
- Add order history and user profile pages
- Add tests for backend routes and frontend flows
- Add deployment instructions

## Author

Created by Nitish.
