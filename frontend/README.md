# Frontend React Application

This is the frontend React application for the FullStack project.

## Features

- Modern React with Hooks
- React Router for navigation
- Axios for API calls
- JWT authentication
- Responsive design
- Component-based architecture

## Prerequisites

- Node.js (v14 or higher)
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

3. Update the `.env` file with your API endpoint

## Running the Application

### Development mode:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for production:
```bash
npm run build
```

### Run tests:
```bash
npm test
```

## Project Structure

```
frontend/
├── public/              # Static files
│   └── index.html
├── src/
│   ├── assets/          # Static assets
│   │   ├── images/
│   │   └── styles/
│   ├── components/      # Reusable components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── Loading.js
│   │   ├── ProductCard.js
│   │   └── PrivateRoute.js
│   ├── pages/           # Page components
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── Dashboard.js
│   │   ├── Products.js
│   │   ├── ProductDetail.js
│   │   ├── Profile.js
│   │   └── NotFound.js
│   ├── services/        # API services
│   │   └── api.js
│   ├── utils/           # Utility functions
│   │   ├── auth.js
│   │   └── helpers.js
│   ├── App.js           # Main App component
│   └── index.js         # Entry point
├── .env.example         # Environment variables example
├── .gitignore
├── package.json
└── README.md
```

## Available Pages

- `/` - Home page
- `/login` - Login page
- `/register` - Registration page
- `/products` - Products listing (public)
- `/products/:id` - Product detail (public)
- `/dashboard` - User dashboard (protected)
- `/profile` - User profile (protected)

## Environment Variables

See `.env.example` for all available environment variables.

## License

ISC
