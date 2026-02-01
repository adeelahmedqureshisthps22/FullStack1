# FullStack1

A modern fullstack application with React frontend and Express.js backend.

## Project Structure

```
FullStack1/
├── backend/           # Express.js API server
│   ├── src/
│   │   ├── config/    # Configuration files
│   │   ├── controllers/  # Route controllers
│   │   ├── middleware/   # Custom middleware
│   │   ├── models/    # Database models
│   │   ├── routes/    # API routes
│   │   ├── utils/     # Utility functions
│   │   └── server.js  # Server entry point
│   └── package.json
├── frontend/          # React application
│   ├── src/
│   │   ├── assets/    # Static assets
│   │   ├── components/  # React components
│   │   ├── pages/     # Page components
│   │   ├── services/  # API services
│   │   └── utils/     # Helper functions
│   └── package.json
└── docker-compose.yml # Docker setup (optional)
```

## Technology Stack

### Backend
- Node.js
- Express.js
- CORS
- dotenv for environment variables

### Frontend
- React 18
- Vite
- React Router
- Axios
- Modern CSS

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/adeelahmedqureshisthps22/FullStack1.git
   cd FullStack1
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

#### Using separate terminals:

1. Start the backend server (from backend directory):
   ```bash
   cd backend
   npm run dev
   ```
   Backend will run on `http://localhost:5000`

2. Start the frontend (from frontend directory):
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will run on `http://localhost:3000`

#### Using Docker Compose (if Docker is installed):
```bash
docker-compose up
```

## Configuration

### Backend
Create a `.env` file in the backend directory:
```env
PORT=5000
NODE_ENV=development
```

See `backend/.env.example` for all available options.

### Frontend
The frontend is configured to proxy API requests to the backend.
Update `frontend/vite.config.js` if you need to change the backend URL.

## API Endpoints

- `GET /` - Welcome message
- `GET /api/health` - Health check

## Development

### Backend Development
```bash
cd backend
npm run dev  # Starts with nodemon for auto-reload
```

### Frontend Development
```bash
cd frontend
npm run dev  # Starts Vite dev server with hot reload
```

## Building for Production

### Backend
```bash
cd backend
npm start
```

### Frontend
```bash
cd frontend
npm run build
npm run preview
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.
