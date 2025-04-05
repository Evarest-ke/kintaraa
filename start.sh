#!/bin/bash

# Start MongoDB using Docker Compose
echo "Starting MongoDB..."
docker-compose up -d

# Set up backend
echo "Setting up backend..."
cd backend
npm install
echo "Starting backend server..."
npm run dev &
BACKEND_PID=$!
cd ..

# Set up frontend
echo "Setting up frontend..."
cd src/kintaraa_frontend
npm install
echo "Starting frontend server..."
npm run dev &
FRONTEND_PID=$!
cd ../..

echo "All services are running!"
echo "Backend: http://localhost:5000"
echo "Frontend: http://localhost:5173"
echo "MongoDB: localhost:27017"
echo ""
echo "Press Ctrl+C to stop all services"

# Handle graceful shutdown
function cleanup {
    echo "Shutting down services..."
    kill $BACKEND_PID
    kill $FRONTEND_PID
    docker-compose down
    echo "Services stopped"
    exit 0
}

trap cleanup SIGINT

# Keep the script running
wait 