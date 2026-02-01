# Development Guide

## Setup Development Environment

### Prerequisites
1. Install Node.js (v14+)
2. Install MongoDB (v4.4+)
3. Install Git
4. Install a code editor (VS Code recommended)

### Initial Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd FullStack1
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```
   Or manually:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```

3. **Setup environment variables**
   ```bash
   # Backend
   cd backend
   cp .env.example .env
   # Edit .env with your settings
   
   # Frontend
   cd ../frontend
   cp .env.example .env
   # Edit .env with your API URL
   ```

4. **Start MongoDB**
   ```bash
   # If using local MongoDB
   mongod
   
   # Or using Docker
   docker run -d -p 27017:27017 --name mongodb mongo:latest
   ```

5. **Start the development servers**
   
   Terminal 1 (Backend):
   ```bash
   cd backend
   npm run dev
   ```
   
   Terminal 2 (Frontend):
   ```bash
   cd frontend
   npm start
   ```

## Project Architecture

### Backend Structure
```
backend/
├── src/
│   ├── config/         # Configuration files
│   │   ├── database.js     # MongoDB connection
│   │   └── constants.js    # App constants
│   ├── controllers/    # Request handlers
│   │   ├── auth.controller.js
│   │   ├── user.controller.js
│   │   └── product.controller.js
│   ├── middleware/     # Custom middleware
│   │   ├── auth.middleware.js
│   │   └── validator.middleware.js
│   ├── models/         # Database models
│   │   ├── User.model.js
│   │   └── Product.model.js
│   ├── routes/         # API routes
│   │   ├── auth.routes.js
│   │   ├── user.routes.js
│   │   └── product.routes.js
│   ├── utils/          # Utility functions
│   │   └── response.util.js
│   └── server.js       # Entry point
```

### Frontend Structure
```
frontend/
├── src/
│   ├── assets/         # Static assets
│   │   ├── images/
│   │   └── styles/
│   ├── components/     # Reusable components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── Loading.js
│   │   ├── ProductCard.js
│   │   └── PrivateRoute.js
│   ├── pages/          # Page components
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── Dashboard.js
│   │   ├── Products.js
│   │   ├── ProductDetail.js
│   │   ├── Profile.js
│   │   └── NotFound.js
│   ├── services/       # API services
│   │   └── api.js
│   ├── utils/          # Helper functions
│   │   ├── auth.js
│   │   └── helpers.js
│   ├── App.js          # Main component
│   └── index.js        # Entry point
```

## Development Workflow

### Adding a New Feature

1. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Backend changes**
   - Add model in `models/` if needed
   - Add controller in `controllers/`
   - Add routes in `routes/`
   - Add middleware if needed
   - Test with Postman or similar

3. **Frontend changes**
   - Add components in `components/` or pages in `pages/`
   - Add API calls in `services/api.js`
   - Add styling in appropriate CSS file
   - Test in browser

4. **Commit and push**
   ```bash
   git add .
   git commit -m "Add: your feature description"
   git push origin feature/your-feature-name
   ```

### Code Style Guidelines

#### Backend (JavaScript/Node.js)
- Use `const` and `let`, avoid `var`
- Use async/await for asynchronous code
- Use try-catch for error handling
- Follow REST API conventions
- Add JSDoc comments for functions
- Use meaningful variable names

#### Frontend (React)
- Use functional components with hooks
- Use PascalCase for component names
- Use camelCase for functions and variables
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use PropTypes or TypeScript for type checking

### Testing

#### Backend Tests
```bash
cd backend
npm test
```

Create tests in `backend/tests/`:
```javascript
// Example test
describe('Auth Controller', () => {
  it('should register a new user', async () => {
    // Test implementation
  });
});
```

#### Frontend Tests
```bash
cd frontend
npm test
```

Create tests alongside components:
```javascript
// Example test
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders home page', () => {
  render(<Home />);
  const heading = screen.getByText(/Welcome/i);
  expect(heading).toBeInTheDocument();
});
```

## Common Tasks

### Adding a New API Endpoint

1. **Create/Update Model** (`backend/src/models/`)
2. **Create Controller** (`backend/src/controllers/`)
3. **Create Route** (`backend/src/routes/`)
4. **Add Route to server.js**

### Adding a New Page

1. **Create Page Component** (`frontend/src/pages/`)
2. **Add Route in App.js**
3. **Add Navigation Link** in Header component
4. **Create API Service** if needed

### Database Operations

#### Connect to MongoDB
```bash
mongo
use fullstack
```

#### View Collections
```bash
show collections
```

#### Query Data
```bash
db.users.find()
db.products.find()
```

## Debugging

### Backend Debugging
- Use console.log() for quick debugging
- Use debugger with VS Code
- Check logs in terminal
- Use MongoDB Compass for database inspection

### Frontend Debugging
- Use React DevTools browser extension
- Use console.log() in components
- Use browser DevTools Network tab for API calls
- Check Redux DevTools if using Redux

## Deployment

### Building for Production

#### Backend
```bash
cd backend
NODE_ENV=production npm start
```

#### Frontend
```bash
cd frontend
npm run build
```

### Using Docker

Build and run with Docker Compose:
```bash
docker-compose up -d
```

Stop containers:
```bash
docker-compose down
```

View logs:
```bash
docker-compose logs -f
```

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running
- Check connection string in .env
- Verify network connectivity

### Port Already in Use
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### CORS Issues
- Check CORS_ORIGIN in backend .env
- Verify API URL in frontend .env
- Ensure backend is running

### Dependencies Issues
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Resources

- [Node.js Documentation](https://nodejs.org/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
