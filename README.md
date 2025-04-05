# Kintaraa

Kintaraa is a platform that connects survivors of gender-based violence with essential services, including medical, legal, counseling, and police assistance.

## Project Structure

The application is split into two main parts:

1. **Backend API**: An Express.js API server with MongoDB database
2. **Frontend**: A React.js application built with Vite

## Features

- User authentication (survivor, medical, legal, counselor, police, chv)
- Service request submission and tracking
- Appointment scheduling
- Provider management
- Admin dashboard

## Setup and Installation

### Prerequisites

- Node.js (v16+)
- Docker and Docker Compose (for MongoDB)

### MongoDB Setup

1. Start MongoDB using Docker:
   ```
   docker-compose up -d
   ```

   This will start MongoDB on the default port 27017.

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the backend directory with the following content:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/kintaraa
   JWT_SECRET=your_secure_secret_here
   ```

4. Start the development server:
   ```
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd src/kintaraa_frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

## Usage

- The backend API runs on `http://localhost:5000`
- The frontend application runs on `http://localhost:5173`

## Development

### Backend API

The API follows RESTful principles and provides the following endpoints:

- `/api/auth` - Authentication routes
- `/api/users` - User management routes
- `/api/services` - Service-related routes

### Frontend Application

The frontend is built with React and uses:

- React Router for routing
- React Hook Form with Zod for form validation
- Tailwind CSS for styling
- React Context API for state management

## Deployment

### Backend Deployment

1. Build the application:
   ```
   cd backend
   npm run build
   ```

2. Deploy to your hosting provider of choice (e.g., Heroku, AWS, DigitalOcean)

### Frontend Deployment

1. Build the application:
   ```
   cd src/kintaraa_frontend
   npm run build
   ```

2. Deploy the `dist` directory to a static hosting service (e.g., Netlify, Vercel, Firebase)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Future Plans

This project is currently using Express.js and MongoDB as a transitional solution. In the future, we plan to migrate to:

- A Rust-based backend for improved performance and security
- A more robust database system (likely PostgreSQL)

For more details on the migration plan, see the `DEVELOPER_GUIDE.md` file.
