# FullStack Project

A modern fullstack web application built with React (Frontend) and Node.js/Express (Backend).

## 🚀 Project Overview

This is a complete fullstack application featuring:
- **Backend**: RESTful API with Node.js, Express, and MongoDB
- **Frontend**: React-based single-page application
- **Authentication**: JWT-based authentication and authorization
- **Database**: MongoDB with Mongoose ODM
- **Features**: User management, Product management, Role-based access control

## 📁 Project Structure

```
FullStack1/
├── backend/                 # Backend API (Node.js/Express)
│   ├── src/
│   │   ├── config/         # Configuration files
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Custom middleware
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── utils/          # Utility functions
│   │   └── server.js       # Entry point
│   ├── tests/              # Test files
│   ├── .env.example        # Environment variables template
│   ├── package.json
│   └── README.md
│
├── frontend/               # Frontend application (React)
│   ├── public/            # Static files
│   ├── src/
│   │   ├── assets/        # Images and styles
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   ├── utils/         # Helper functions
│   │   ├── App.js         # Main App component
│   │   └── index.js       # Entry point
│   ├── .env.example       # Environment variables template
│   ├── package.json
│   └── README.md
│
├── .gitignore
└── README.md              # This file
```

## 🛠️ Technology Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Authentication**: JWT (jsonwebtoken)
- **Validation**: express-validator
- **Security**: bcryptjs for password hashing

### Frontend
- **Framework**: React 18
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **Styling**: CSS3
- **Icons**: React Icons

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd FullStack1
```

### 2. Setup Backend

```bash
cd backend
npm install
cp .env.example .env
# Edit .env file with your configuration
npm run dev
```

The backend server will start at `http://localhost:5000`

### 3. Setup Frontend

```bash
cd frontend
npm install
cp .env.example .env
# Edit .env file with your API endpoint
npm start
```

The frontend app will start at `http://localhost:3000`

## 🔑 Key Features

### Authentication & Authorization
- User registration and login
- JWT token-based authentication
- Role-based access control (User, Admin, Moderator)
- Protected routes and API endpoints

### User Management
- User profile management
- User listing (admin only)
- User CRUD operations

### Product Management
- Browse products (public)
- Create, update, delete products (authenticated users)
- Product search and filtering
- Category-based organization

## 📚 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### User Endpoints
- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user (admin only)

### Product Endpoints
- `GET /api/products` - Get all products (public)
- `GET /api/products/:id` - Get product by ID (public)
- `POST /api/products` - Create product (protected)
- `PUT /api/products/:id` - Update product (protected)
- `DELETE /api/products/:id` - Delete product (protected)

### Health Check
- `GET /api/health` - Server health check

## 🔒 Environment Variables

### Backend (.env)
```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/fullstack
JWT_SECRET=your-secret-key
JWT_EXPIRE=7d
CORS_ORIGIN=http://localhost:3000
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## 📦 Building for Production

### Backend
```bash
cd backend
npm start
```

### Frontend
```bash
cd frontend
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👥 Authors

- Your Name

## 🙏 Acknowledgments

- Node.js and Express.js communities
- React team
- MongoDB team
