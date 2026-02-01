# Backend API

This is the backend API for the FullStack application built with Node.js, Express, and MongoDB.

## Features

- RESTful API architecture
- JWT authentication and authorization
- User management
- Product management
- Input validation
- Error handling
- MongoDB integration with Mongoose

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file from the example:
```bash
cp .env.example .env
```

3. Update the `.env` file with your configuration

## Running the Application

### Development mode with auto-reload:
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Users
- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user (admin only)

### Products
- `GET /api/products` - Get all products (public)
- `GET /api/products/:id` - Get product by ID (public)
- `POST /api/products` - Create product (protected)
- `PUT /api/products/:id` - Update product (protected)
- `DELETE /api/products/:id` - Delete product (protected)

### Health Check
- `GET /api/health` - Check server status

## Testing

```bash
npm test
```

## Project Structure

```
backend/
├── src/
│   ├── config/          # Configuration files
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Custom middleware
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── utils/           # Utility functions
│   └── server.js        # Application entry point
├── tests/               # Test files
├── .env.example         # Environment variables example
├── .gitignore
├── package.json
└── README.md
```

## Environment Variables

See `.env.example` for all available environment variables.

## License

ISC
