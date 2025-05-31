# Compliment Generator 🌟  

## Project Overview  
The **Compliment Generator** is a simple yet delightful application designed to brighten someone's day by generating random compliments. 
Whether you're looking for a quick confidence boost or just want to share positive vibes, this tool provides an endless stream of uplifting compliments!  

---

## Project Idea 💡  
The idea behind the Compliment Generator is to spread positivity in a fun and interactive way.
By using technology to craft kind and encouraging words, this project aims to remind users of their unique qualities and uplift their spirits.  

---

## Features ✨  
- **Random Compliments**: Generate a wide variety of compliments with a single click.  
- **User Input**: Personalize compliments by allowing users to enter their name.  
- **Share Options**: Share compliments with friends via a copy-to-clipboard button.  
- **Favorite Compliments**: Save your favorite compliments to revisit them later.  
- **Clean UI**: A simple, user-friendly interface with an aesthetically pleasing design.  
- **Mobile Responsive**: Fully functional on both desktop and mobile devices.  
- **Interactive Animations**: Fun animations and effects for an engaging user experience.  

---

## How It Works 🛠️  
1. The user clicks the "Generate Compliment" button.  
2. The app selects a random compliment from a pre-defined list.  
3. The compliment is displayed on the screen.  
4. Optional: The user can personalize it by entering their name or saving the compliment.  

---

## Technologies Used 🖥️  
- **Frontend**: React, Tailwindcss
- **Backend**: Node.js, Express, MongoDB
- **Deployment**: Frontend on Vercel/Netlify, Backend on Render

## Running Locally 🏃‍♂️

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd asap
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   This will start the frontend on http://localhost:5173

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file with the following variables:
   ```
   PORT=8080
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the backend server:
   ```bash
   npm start
   ```
   Or for development with auto-reload:
   ```bash
   npx nodemon index.js
   ```
   This will start the backend on http://localhost:8080

## Deployment Links 🚀
- Frontend Link - https://s65-compliment-generator-aofz.vercel.app/
- Backend Link - https://s65-compliment-generator.onrender.com

## Deployment Instructions 🚀

### Backend (Render)
1. Push your changes to your GitHub repository
2. Render will automatically redeploy from your main/master branch
3. You can also manually trigger a deployment from the Render dashboard
4. Monitor the deployment logs for any errors

### Frontend (Vercel)
1. Push your changes to your GitHub repository
2. Vercel will automatically redeploy from your main/master branch
3. You can also manually trigger a deployment from the Vercel dashboard
4. Verify CORS is working by testing the compliment sending feature

---

## Future Enhancements 🚀  
- Add localization options to generate compliments in multiple languages.  
- Enable voice playback of compliments for an audio experience.  
- Add a "Compliment of the Day" feature.  
- Allow users to contribute their own compliments to the database.  


