# Frontend Application

This is the frontend application for the FullStack1 project, built with React and Vite.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure the API endpoint in `vite.config.js` if needed

## Running the Application

### Development mode:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for production:
```bash
npm run build
```

### Preview production build:
```bash
npm run preview
```

## Project Structure

```
frontend/
├── src/
│   ├── assets/         # Static assets (images, fonts, etc.)
│   ├── components/     # Reusable React components
│   ├── pages/          # Page components
│   ├── services/       # API services and utilities
│   ├── utils/          # Helper functions
│   ├── App.jsx         # Main App component
│   ├── App.css         # App styles
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
└── package.json        # Project dependencies
```

## Features

- React 18 with hooks
- React Router for navigation
- Axios for API calls
- Vite for fast development and building
- Modern ES6+ syntax
