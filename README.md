# QR-Based Tracking System

A full-stack QR visitor tracking application built with React + Vite on the client side and Express + MongoDB on the server side.

## Project Overview

- Frontend: React application for the user-facing QR tracking experience
- Backend: Express API that receives scan data, enriches it with location metadata, and stores it in MongoDB
- Database: MongoDB Atlas or any reachable MongoDB instance

## Tech Stack

### Frontend
- React 19
- Vite 8
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express 5
- Mongoose
- dotenv
- UA parser

## Prerequisites

Before running the project, make sure you have:

- Node.js installed
- npm installed
- MongoDB connection string available via `MONGO_URI`
- A frontend `.env` with the backend API URL (`VITE_BACKEND_URL`)

## Folder Structure

- `client/` – React frontend
- `server/` – Express backend

## Environment Setup

### 1. Frontend environment

Create a `.env` file in the `client/` folder:

```env
VITE_BACKEND_URL=http://localhost:5000
```

If you are using a deployed backend instead of local development, replace the URL with the deployed API base URL.

### 2. Backend environment

Create a `.env` file in the `server/` folder:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017
```

If you are using MongoDB Atlas, set `MONGO_URI` to your Atlas connection string.

## Installation

From the project root, install dependencies for both apps:

```bash
cd client
npm install

cd ../server
npm install
```

## Running the Project

### Start the backend

```bash
cd server
npm run dev
```

This will run the server with `nodemon`.

### Start the frontend

In a separate terminal:

```bash
cd client
npm run dev
```

This will launch the Vite development server.

## Production Build

### Frontend build

```bash
cd client
npm run build
```

### Backend start

```bash
cd server
npm start
```

## API Endpoints

### Root health check

```http
GET /
```

Returns:

```json
{
  "success": true,
  "message": "QR Visitor Tracking API is running."
}
```

### Save scan data

```http
POST /api/scan
```

Request body should include:

- `latitude`
- `longitude`
- `accuracy`

The backend also extracts client metadata such as IP address, browser, OS, and device type.

### Get saved scan records

```http
GET /api/data
```

## Notes

- The frontend is configured to use `VITE_BACKEND_URL` from the client environment file.
- The backend listens on `PORT` and connects to MongoDB using `MONGO_URI`.
- The backend stores scan records in the MongoDB database named `qr_app`.

## Useful Commands

```bash
# Client
cd client
npm run dev
npm run build

# Server
cd server
npm run dev
npm start
```
