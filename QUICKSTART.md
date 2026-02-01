# Quick Start Guide

## Prerequisites
- Node.js v14 or higher
- npm or yarn package manager

## Setup Instructions

### 1. Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### 2. Configure Environment

**Backend Configuration:**
```bash
cd backend
cp .env.example .env
# Edit .env file with your configuration
```

Default backend runs on port 5000.

### 3. Run the Application

**Option A: Run in Development Mode (Recommended)**

Open two terminal windows:

Terminal 1 - Backend:
```bash
cd backend
npm run dev
```

Terminal 2 - Frontend:
```bash
cd frontend
npm run dev
```

**Option B: Run with Docker Compose**

If you have Docker installed:
```bash
docker-compose up
```

### 4. Access the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Health Check: http://localhost:5000/api/health

## Testing the Setup

1. Open your browser and navigate to http://localhost:3000
2. You should see the Home page with API status
3. Click "About" to navigate to the About page
4. The API status should show "ok" if backend is running

## Project Features

### Backend Features:
- Express.js REST API
- CORS enabled
- Environment-based configuration
- Modular route structure
- Middleware support
- Error handling

### Frontend Features:
- React 18 with modern hooks
- Vite for fast development
- React Router for navigation
- Axios for API integration
- Responsive design
- Component-based architecture

## Development Workflow

### Backend Development:
```bash
cd backend
npm run dev  # Auto-reloads on file changes
```

### Frontend Development:
```bash
cd frontend
npm run dev  # Hot module replacement (HMR)
```

### Building for Production:

**Backend:**
```bash
cd backend
npm start
```

**Frontend:**
```bash
cd frontend
npm run build
npm run preview
```

## API Documentation

### Available Endpoints:

- `GET /` - Welcome message
- `GET /api/health` - Health check endpoint

### Example API Usage:

```javascript
// Using fetch
fetch('http://localhost:5000/api/health')
  .then(response => response.json())
  .then(data => console.log(data));

// Using axios (already configured in frontend)
import api from './services/api';
const response = await api.get('/health');
```

## Troubleshooting

### Port Already in Use
If you get a "port already in use" error:
- Change the PORT in backend/.env
- Update the proxy configuration in frontend/vite.config.js

### Dependencies Issues
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### CORS Issues
Ensure the backend is running and CORS is properly configured in backend/src/server.js

## Next Steps

1. Add database integration (MongoDB, PostgreSQL, etc.)
2. Implement authentication (JWT, OAuth)
3. Add more API endpoints
4. Create additional React components
5. Add testing (Jest, React Testing Library)
6. Set up CI/CD pipeline
7. Configure production deployment

## Support

For issues or questions:
- Check the README files in backend/ and frontend/ directories
- Review the code documentation
- Create an issue in the repository
