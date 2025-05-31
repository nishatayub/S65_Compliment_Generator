// Configuration for API endpoints that works in both development and production

const API_URL = {
  // If running locally, use localhost, otherwise use production URL
  // In Vite, import.meta.env.PROD will be true in production build
  BASE_URL: import.meta.env.PROD 
    ? 'https://s65-compliment-generator.onrender.com' 
    : 'http://localhost:8080',
};

export default API_URL;
