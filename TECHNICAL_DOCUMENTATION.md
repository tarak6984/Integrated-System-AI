# 🚀 Integrated Systems AI - Complete Technical Documentation

> **For Beginners**: This document explains how our web application works, what technologies we use, and how everything fits together. Don't worry if you're new to programming - we'll explain each concept in simple terms with detailed explanations!

## 📚 Table of Contents

1. [Project Overview](#1-project-overview) - What this project is about
2. [Technology Stack](#2-technology-stack) - What tools and languages we use
3. [Architecture](#3-architecture) - How the application is structured
4. [Project Structure](#4-project-structure) - How files are organized
5. [Frontend Architecture](#5-frontend-architecture) - The user interface (what you see)
6. [Backend Architecture](#6-backend-architecture) - The server (behind the scenes)
7. [Database Schema](#7-database-schema) - How we store user information
8. [Authentication System](#8-authentication-system) - How we keep accounts safe
9. [API Endpoints](#9-api-endpoints) - How frontend and backend talk
10. [Features & Components](#10-features--components) - What the website can do
11. [Environment Configuration](#11-environment-configuration) - Setup and settings
12. [Deployment](#12-deployment) - How to put the website online
13. [Development Workflow](#13-development-workflow) - How to work on the project
14. [How It All Works Together](#14-how-it-all-works-together) - The big picture

---

## 1. Project Overview

### What is Integrated Systems AI?

**Integrated Systems AI** is a modern, full-stack web application that showcases AI-powered solutions for various industries. Think of it as a professional company website with advanced features like user accounts, a smart chatbot, live news, and interactive dashboards.

### 🎯 Target Industries

Our platform demonstrates AI solutions for:
- **Manufacturing & Quality Control** - Helping factories ensure product quality
- **Healthcare & Diagnostics** - Assisting medical professionals with patient care
- **Agriculture & Smart Farming** - Optimizing crop yields and farm management
- **Finance & Risk Management** - Analyzing financial data and predicting risks
- **Education & Learning Systems** - Personalizing education for students

### ✨ Key Features

Our website includes these awesome features:

- ✅ **User Authentication** - Secure login and signup system (like Facebook or Gmail)
- ✅ **AI Chatbot Integration** - A smart assistant that can answer questions
- ✅ **Live News Feed** - Real-time technology news from around the world
- ✅ **Weather Widget** - Shows current weather conditions
- ✅ **Analytics Dashboard** - Visual charts and graphs showing data insights
- ✅ **Contact Form** - Easy way for visitors to get in touch
- ✅ **Interactive Global Map** - Visual representation of global reach
- ✅ **Responsive Design** - Works perfectly on phones, tablets, and computers

---

## 2. Technology Stack

### 🤔 What is a Technology Stack?

Think of a technology stack like the ingredients needed to bake a cake. Just as you need flour, eggs, sugar, and butter to bake, we need different technologies to build a website. Our "stack" is the collection of programming languages, frameworks, and tools we use.

### 🎨 Frontend Technologies (What Users See)

The frontend is everything users interact with - buttons, forms, colors, animations, etc.

#### Core Framework
- **React 18.3.1** 
  - **What it is**: A JavaScript library for building user interfaces
  - **Why we use it**: Makes it easy to create interactive, dynamic websites
  - **Analogy**: Like LEGO blocks - build complex UIs from small, reusable pieces

#### Build Tool
- **Vite 5.2.0**
  - **What it is**: A super-fast development server and build tool
  - **Why we use it**: Starts instantly and updates changes immediately
  - **Analogy**: Like a lightning-fast chef that prepares your meal in seconds

#### Routing
- **React Router DOM 6.22.3**
  - **What it is**: Manages navigation between different pages
  - **Why we use it**: Allows smooth page transitions without reloading
  - **Analogy**: Like a GPS that shows you different rooms in a house without leaving the building

#### Styling
- **Tailwind CSS 3.4.1**
  - **What it is**: A utility-first CSS framework for styling
  - **Why we use it**: Makes styling fast and consistent
  - **Analogy**: Like having pre-made paint colors instead of mixing your own

#### Animations
- **Framer Motion 11.0.8**
  - **What it is**: A library for smooth, professional animations
  - **Why we use it**: Makes the website feel alive and interactive
  - **Analogy**: Like adding special effects to a movie

#### Icons
- **Lucide React 0.358.0**
  - **What it is**: A collection of beautiful, consistent icons
  - **Why we use it**: Provides professional-looking symbols and graphics
  - **Analogy**: Like having a sticker collection for your website

### ⚙️ Backend Technologies (Behind the Scenes)

The backend handles data, security, and communication with databases and other services.

#### Runtime Environment
- **Node.js**
  - **What it is**: JavaScript runtime that lets us run JavaScript on servers
  - **Why we use it**: Allows using JavaScript for both frontend and backend
  - **Analogy**: Like having a universal translator that speaks the same language everywhere

#### Server Framework
- **Express.js 4.18.2**
  - **What it is**: A web framework for building servers and APIs
  - **Why we use it**: Simple and powerful for handling web requests
  - **Analogy**: Like a receptionist that handles all incoming visitors and directs them appropriately

#### Database
- **SQLite with better-sqlite3 9.4.0**
  - **What it is**: A lightweight, file-based database
  - **Why we use it**: Easy to set up, no complex installation needed
  - **Analogy**: Like a filing cabinet that stores all user information organized in folders

#### Authentication
- **JWT (jsonwebtoken 9.0.2)**
  - **What it is**: JSON Web Tokens for secure authentication
  - **Why we use it**: Secure way to verify user identity
  - **Analogy**: Like a VIP pass that proves you're allowed to enter certain areas

#### Password Security
- **bcryptjs 2.4.3**
  - **What it is**: Library for hashing (encrypting) passwords
  - **Why we use it**: Keeps passwords secure even if database is compromised
  - **Analogy**: Like a safe that locks passwords so nobody can read them

#### CORS
- **cors 2.8.5**
  - **What it is**: Cross-Origin Resource Sharing middleware
  - **Why we use it**: Allows frontend and backend to communicate safely
  - **Analogy**: Like a security checkpoint that allows trusted visitors

#### Cookie Management
- **cookie-parser 1.4.6**
  - **What it is**: Middleware for reading and writing cookies
  - **Why we use it**: Stores session information in the browser
  - **Analogy**: Like a ticket stub that remembers you're logged in

#### Environment Variables
- **dotenv 16.4.1**
  - **What it is**: Loads configuration from .env files
  - **Why we use it**: Keeps sensitive information (like API keys) secure
  - **Analogy**: Like a secret notebook that stores passwords and keys

### 🛠️ Development Tools

These tools help developers work more efficiently:

- **ESLint 8.57.0** - Checks code for errors and enforces style
- **Nodemon 3.0.3** - Auto-restarts server when code changes
- **Concurrently 8.2.2** - Runs multiple commands at once

---

## 3. Architecture

### 🏗️ What is Architecture?

Architecture is the blueprint of how all parts of our application work together. Think of it like the floor plan of a house - it shows how rooms connect and where everything goes.

### High-Level Architecture Diagram

`
┌─────────────────────────────────────────────────────────────┐
│                    CLIENT SIDE (Browser)                     │
│  ┌────────────────────────────────────────────────────────┐ │
│  │         React Application (Built with Vite)             │ │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐            │ │
│  │  │  Pages   │  │Components│  │ Services │            │ │
│  │  │ (Routes) │  │   (UI)   │  │  (API)   │            │ │
│  │  └──────────┘  └──────────┘  └──────────┘            │ │
│  │                                                         │ │
│  │  Context API (Global State) + React Router             │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                        ↕ HTTP/REST API (JSON)
┌─────────────────────────────────────────────────────────────┐
│                    SERVER SIDE (Node.js)                     │
│  ┌────────────────────────────────────────────────────────┐ │
│  │           Express.js Backend Server                     │ │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐            │ │
│  │  │  Routes  │  │Controllers│ │Middleware│            │ │
│  │  │ (/api/*) │  │ (Logic)  │  │ (Auth)   │            │ │
│  │  └──────────┘  └──────────┘  └──────────┘            │ │
│  │                                                         │ │
│  │  ┌────────────────────────────────────────┐           │ │
│  │  │      SQLite Database (better-sqlite3)  │           │ │
│  │  │  - users table (id, name, email, pwd)  │           │ │
│  │  │  - Stores all user accounts securely   │           │ │
│  │  └────────────────────────────────────────┘           │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                        ↕ External API Calls
┌─────────────────────────────────────────────────────────────┐
│                   EXTERNAL SERVICES (APIs)                   │
│  - NewsAPI.org (Real-time technology news)                  │
│  - Google Gemini API (AI Chatbot intelligence)              │
│  - OpenWeather API (Weather data)                           │
└─────────────────────────────────────────────────────────────┘
`

### 📊 Application Flow (How It Works)

Let's walk through what happens when you use the website:

1. **User Opens Website** 
   - Browser loads the React application
   - Single Page Application (SPA) loads once, then feels instant

2. **User Signs Up/Logs In**
   - Frontend sends credentials to backend
   - Backend checks database and creates JWT token
   - Token stored in browser cookie (secure)

3. **User Accesses Protected Features**
   - Frontend sends token with each request
   - Backend verifies token before allowing access
   - If valid: user gets data; if invalid: redirected to login

4. **Real-Time Features Update**
   - News feed fetches latest articles every few minutes
   - Weather widget updates based on location
   - Chatbot processes questions and provides answers

5. **User Interacts with Dashboard**
   - Analytics charts display data
   - Global map shows interactive locations
   - Everything updates smoothly without page reload

---

## 4. Project Structure

### 📁 Understanding the File Organization

Our project is organized like a well-organized library. Each folder has a specific purpose, making it easy to find and modify code.

`
integrated-systems-ai-website/
│
├── 📂 public/                          # Static files (images, videos)
│   ├── logo.svg                        # Company logo (light version)
│   ├── logo-white.svg                  # Company logo (dark version)
│   ├── hero-background.mp4             # Video for homepage hero section
│   └── standard-quality-control-concept-m.jpg  # Industry image
│
├── 📂 src/                             # Source code (the heart of the app)
│   ├── main.jsx                        # Entry point - starts the React app
│   ├── App.jsx                         # Root component - defines all routes
│   ├── index.css                       # Global styles for entire site
│   │
│   ├── 📂 components/                  # Reusable React components
│   │   │
│   │   ├── 📂 auth/                    # Authentication-related components
│   │   │   └── ProtectedRoute.jsx      # Guards private routes (like a bouncer)
│   │   │
│   │   ├── 📂 features/                # Major feature components
│   │   │   ├── AIChatbot.jsx           # Floating AI assistant chatbot
│   │   │   ├── AnalyticsDashboard.jsx  # Charts and data visualization
│   │   │   ├── EnhancedContactForm.jsx # Contact form with validation
│   │   │   ├── GlobalMap.jsx           # Interactive world map
│   │   │   ├── NewsFeed.jsx            # Live news articles widget
│   │   │   └── WeatherWidget.jsx       # Current weather display
│   │   │
│   │   ├── 📂 layout/                  # Layout structure components
│   │   │   ├── Header.jsx              # Top navigation bar
│   │   │   ├── Footer.jsx              # Bottom footer with links
│   │   │   └── Layout.jsx              # Wrapper that adds header/footer
│   │   │
│   │   ├── 📂 sections/                # Homepage section components
│   │   │   ├── Hero.jsx                # Large banner at top of homepage
│   │   │   ├── Services.jsx            # Our AI services showcase
│   │   │   ├── CoreValues.jsx          # Company values display
│   │   │   ├── WhyChooseUs.jsx         # Benefits of our services
│   │   │   ├── VisionMission.jsx       # Company vision and mission
│   │   │   ├── GlobalVision.jsx        # Our global reach section
│   │   │   └── Contact.jsx             # Contact information section
│   │   │
│   │   └── 📂 ui/                      # Basic UI building blocks
│   │       ├── Button.jsx              # Reusable button component
│   │       ├── Card.jsx                # Card container component
│   │       └── SectionTitle.jsx        # Styled section headers
│   │
│   ├── 📂 pages/                       # Full page components (routes)
│   │   ├── Home.jsx                    # Landing page (/)
│   │   ├── Login.jsx                   # Login page (/login)
│   │   ├── Signup.jsx                  # Registration page (/signup)
│   │   └── Dashboard.jsx               # User dashboard (/dashboard)
│   │
│   ├── 📂 context/                     # React Context for global state
│   │   └── AuthContext.jsx             # User authentication state
│   │
│   ├── 📂 services/                    # API communication services
│   │   ├── authService.js              # Login, signup, logout functions
│   │   ├── chatbotService.js           # Chatbot API integration
│   │   └── newsService.js              # News API integration
│   │
│   └── 📂 config/                      # Configuration files
│       └── api.js                      # API base URL configuration
│
├── 📂 server/                          # Backend Node.js server
│   ├── index.js                        # Server entry point - starts Express
│   │
│   ├── 📂 config/                      # Server configuration
│   │   └── database.js                 # SQLite database initialization
│   │
│   ├── 📂 models/                      # Database models (data structure)
│   │   └── User.js                     # User model with CRUD operations
│   │
│   ├── 📂 controllers/                 # Business logic (what to do)
│   │   └── authController.js           # Handles login, signup, logout logic
│   │
│   ├── 📂 middleware/                  # Express middleware (interceptors)
│   │   └── auth.js                     # JWT token verification
│   │
│   └── 📂 routes/                      # API route definitions
│       └── authRoutes.js               # Authentication API endpoints
│
├── 📄 Configuration Files              # Project setup files
├── .env                                # Environment variables (local - NOT in git)
├── .env.example                        # Example environment file template
├── .env.production                     # Production environment variables
├── package.json                        # Project dependencies and scripts
├── vite.config.js                      # Vite bundler configuration
├── tailwind.config.js                  # Tailwind CSS customization
├── postcss.config.js                   # PostCSS configuration
├── .eslintrc.cjs                       # ESLint code quality rules
├── railway.json                        # Railway deployment config
├── vercel.json                         # Vercel deployment config
├── Procfile                            # Process configuration for deployment
├── .gitignore                          # Files to exclude from git
└── README.md                           # Project documentation
`

### 🔑 Key Folders Explained

#### /public - Static Assets
**Purpose**: Files that don't change and are served directly to the browser
**Examples**: Images, videos, fonts, favicons
**Analogy**: Like a display case in a store - items shown as-is

#### /src - Source Code
**Purpose**: All the JavaScript/React code that makes the app work
**Analogy**: Like the kitchen in a restaurant - where the magic happens

#### /server - Backend Code
**Purpose**: Handles data, authentication, and API requests
**Analogy**: Like the back office that manages operations

---

## 5. Frontend Architecture

### 🎨 What is the Frontend?

The frontend is everything users see and interact with in their browser - buttons, forms, images, animations, etc. It's built with React, which makes creating interactive websites easier.


### 5.1 Entry Point (main.jsx)

**What it does**: This is the first file that runs when your app starts. It tells React where to display the application on the webpage.

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

**Breaking it down for beginners**:
1. **Import statements**: Bring in code from other files (like ingredients for a recipe)
2. **ReactDOM.createRoot**: Finds the 'root' element in your HTML (like finding a container)
3. **render()**: Displays your React app inside that container
4. **React.StrictMode**: Helps catch errors during development (like a spell-checker)
5. **BrowserRouter**: Enables navigation between pages

---

### 5.2 Root Component (App.jsx)

**What it does**: Defines all the pages (routes) in your application and how to navigate between them.

```javascript
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/auth/ProtectedRoute'
import AIChatbot from './components/features/AIChatbot'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
      {/* Global AI Chatbot - Available on all pages */}
      <AIChatbot />
    </AuthProvider>
  )
}

export default App
```

**Breaking it down for beginners**:

- **AuthProvider**: Wraps the entire app so any component can check if user is logged in
- **Routes**: Container for all your page routes
- **Route**: Defines a single page/URL
  - path="/" → Homepage (www.example.com/)
  - path="/login" → Login page (www.example.com/login)
  - path="/dashboard" → Dashboard page (www.example.com/dashboard)
- **ProtectedRoute**: Only allows access if user is logged in (like a security guard)
- **AIChatbot**: Appears on every page as a floating button

---

### 5.3 Authentication Context (AuthContext.jsx)

**What it does**: Manages user login state across the entire application. Instead of every component checking if someone is logged in separately, they can all ask this one central place.

**Key Concepts**:

```javascript
import { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);          // Current user info
  const [loading, setLoading] = useState(true);    // Loading state

  // Check if user is already logged in when app starts
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const userData = await authService.getCurrentUser();
      setUser(userData);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    const userData = await authService.login(email, password);
    setUser(userData);
    return userData;
  };

  const signup = async (name, email, password) => {
    const userData = await authService.signup(name, email, password);
    setUser(userData);
    return userData;
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth in any component
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
```

**For Beginners - What is Context?**

Imagine you're at a party and you want to know the Wi-Fi password. Instead of asking each person individually, there's a sign at the entrance with the password. That sign is like Context - one central place where information is available to everyone.

**What this context provides**:
- user: Information about the logged-in user (or null if not logged in)
- loading: Whether we're still checking authentication status
- login(): Function to log in
- signup(): Function to create a new account
- logout(): Function to log out

**How to use it in any component**:
```javascript
import { useAuth } from '../context/AuthContext';

function MyComponent() {
  const { user, login, logout } = useAuth();
  
  if (user) {
    return <div>Welcome, {user.name}!</div>;
  }
  return <div>Please log in</div>;
}
```

---

### 5.4 Page Components

#### Home.jsx - Landing Page

**What it does**: Combines all homepage sections into one scrollable page

```javascript
import Hero from '../components/sections/Hero'
import VisionMission from '../components/sections/VisionMission'
import Services from '../components/sections/Services'
import CoreValues from '../components/sections/CoreValues'
import GlobalVision from '../components/sections/GlobalVision'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Contact from '../components/sections/Contact'

const Home = () => {
  return (
    <>
      <Hero />           {/* Top banner with video background */}
      <VisionMission />  {/* Company vision and mission */}
      <Services />       {/* AI services we offer */}
      <CoreValues />     {/* Our core values */}
      <GlobalVision />   {/* Our global reach */}
      <WhyChooseUs />    {/* Why choose our services */}
      <Contact />        {/* Contact form */}
    </>
  )
}

export default Home
```

**For Beginners**: Think of this like assembling a sandwich - each section is an ingredient, and Home.jsx stacks them all together in the right order.

---

#### Dashboard.jsx - User Dashboard

**What it does**: Shows personalized content for logged-in users with analytics, news, and maps

**Key Features**:
- User profile information (name, email, ID)
- Analytics charts with visualizations
- Global map showing locations
- Live news feed
- Logout functionality

**Code Structure**:
```javascript
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import AnalyticsDashboard from '../components/features/AnalyticsDashboard';
import NewsFeed from '../components/features/NewsFeed';
import GlobalMap from '../components/features/GlobalMap';

const Dashboard = () => {
  const { user, logout } = useAuth();  // Get user info and logout function
  const navigate = useNavigate();      // For navigation after logout

  const handleLogout = async () => {
    await logout();
    navigate('/');  // Send user back to homepage
  };

  return (
    <div className="dashboard-container">
      {/* Welcome Header */}
      <h1>Welcome back, {user?.name}! 👋</h1>
      
      {/* User Info Cards */}
      <div className="user-info">
        <div>Name: {user?.name}</div>
        <div>Email: {user?.email}</div>
        <div>ID: {user?.id}</div>
      </div>

      {/* Analytics Dashboard */}
      <AnalyticsDashboard />

      {/* Map and News Side by Side */}
      <div className="grid">
        <GlobalMap />
        <NewsFeed />
      </div>
    </div>
  );
};
```

**For Beginners**: The dashboard is like a personal control panel. Once you log in, you see your information and interactive tools.

---

### 5.5 Feature Components

#### AIChatbot.jsx - Intelligent Assistant

**What it does**: A floating chatbot button that users can click to ask questions. It uses Google's Gemini AI to provide intelligent responses.

**Key Features**:
- Floating button in bottom-right corner
- Expandable chat window
- Context-aware responses
- Conversation history
- Professional and friendly tone

**How it works**:
1. User clicks the chatbot icon
2. Chat window opens
3. User types a question
4. Frontend sends question to backend
5. Backend calls Gemini AI API
6. AI generates response
7. Response displayed to user

---

#### AnalyticsDashboard.jsx - Data Visualization

**What it does**: Displays business metrics and data in beautiful, easy-to-understand charts

**Features**:
- Bar charts for comparisons
- Line charts for trends over time
- Pie charts for proportions
- Live data updates
- Interactive tooltips

**For Beginners**: Think of it like a digital scoreboard that shows how well different parts of the business are performing.

---

#### NewsFeed.jsx - Live News Widget

**What it does**: Fetches and displays the latest technology news articles from around the world

**How it works**:
1. Component loads on dashboard
2. Calls NewsAPI.org to fetch latest articles
3. Displays articles with images and summaries
4. Updates automatically every few minutes
5. Users can click to read full articles

**API Used**: NewsAPI.org (free tier allows 100 requests/day)

---

#### GlobalMap.jsx - Interactive World Map


**What it does**: Shows an interactive map highlighting countries where our AI solutions are deployed

**Features**:
- Visual representation of global presence
- Hover effects on countries
- Responsive design
- Beautiful gradients and colors

**For Beginners**: Like a world map in a classroom, but digital and interactive. You can see where the company operates globally.

---

## 6. Backend Architecture

### ⚙️ What is the Backend?

The backend is the "server-side" of the application - the part users don't see but that makes everything work. It's like the engine of a car: you don't see it while driving, but it powers everything.

**What the backend does**:
- Stores and retrieves user data
- Verifies user login credentials
- Protects sensitive information
- Communicates with external APIs
- Handles business logic

---

### 6.1 Server Entry Point (server/index.js)

**What it does**: Starts the Express server and configures all middleware

```javascript
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware Configuration
const allowedOrigins = [
  'http://localhost:5173',  // Vite dev server
  'http://localhost:5174',
  'http://localhost:5175',
  process.env.CLIENT_URL
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());                    // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(cookieParser());                    // Parse cookies

// API Routes
app.use('/api/auth', authRoutes);

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Serve Static Files in Production
if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, '../dist');
  app.use(express.static(distPath));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log('🚀 Server is running on port', PORT);
  console.log('📡 API available at: http://localhost:' + PORT + '/api');
});
```

**For Beginners - Breaking Down the Code**:

1. **Imports**: Bring in necessary libraries
2. **express()**: Creates a new server application
3. **CORS**: Cross-Origin Resource Sharing - allows frontend (port 5173) to talk to backend (port 5001)
4. **Middleware**: Functions that process every request before it reaches your routes
5. **Routes**: Define what happens when someone visits /api/auth/login, etc.
6. **listen()**: Starts the server and listens for incoming requests

**What is Middleware?**

Middleware is like a security checkpoint at an airport. Every request must go through it before reaching its destination.

- express.json(): Reads JSON data from requests
- cookieParser(): Reads cookies sent by browser
- cors(): Checks if the request is from an allowed origin

---

### 6.2 Database Configuration (server/config/database.js)

**What it does**: Sets up the SQLite database and creates the users table if it doesn't exist

```javascript
import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create or connect to database
const db = new Database(path.join(__dirname, '../database.sqlite'));

// Enable foreign keys
db.pragma('foreign_keys = ON');

// Create users table if it doesn't exist
const createUsersTable = db.prepare(
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
);

createUsersTable.run();

console.log('✅ Database initialized successfully');

export default db;
```

**For Beginners**:

**What is a Database?**
Think of a database like a digital filing cabinet. Each drawer (table) contains folders (rows) with documents (data).

**Our Users Table Structure**:
- id: Unique number for each user (like a student ID)
- 
ame: User's full name
- email: User's email address (must be unique)
- password: Encrypted password (nobody can read it)
- created_at: When the account was created

**Why SQLite?**
- Easy to set up (just a file, no complex server)
- Perfect for small to medium applications
- No installation required
- Great for learning and development

---

### 6.3 User Model (server/models/User.js)

**What it does**: Defines functions for creating, reading, updating, and deleting (CRUD) users

```javascript
import db from '../config/database.js';
import bcrypt from 'bcryptjs';

const User = {
  // Create a new user
  create: (name, email, password) => {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const stmt = db.prepare(
      INSERT INTO users (name, email, password) 
      VALUES (?, ?, ?)
    );
    const result = stmt.run(name, email, hashedPassword);
    return result.lastInsertRowid;
  },

  // Find user by email
  findByEmail: (email) => {
    const stmt = db.prepare('SELECT * FROM users WHERE email = ?');
    return stmt.get(email);
  },

  // Find user by ID
  findById: (id) => {
    const stmt = db.prepare('SELECT * FROM users WHERE id = ?');
    return stmt.get(id);
  },

  // Verify password
  comparePassword: (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
  },

  // Get all users (admin function)
  findAll: () => {
    const stmt = db.prepare('SELECT id, name, email, created_at FROM users');
    return stmt.all();
  }
};

export default User;
```

**For Beginners - Key Concepts**:

**Password Hashing with bcrypt**:
- Never store passwords in plain text!
- crypt.hashSync(): Converts "password123" into gibberish like "..."
- Even if database is stolen, hackers can't read passwords
- compareSync(): Checks if entered password matches the hash

**SQL Prepared Statements**:
- The ? symbols are placeholders for values
- Prevents SQL injection attacks (a common hacking method)
- Example: INSERT INTO users (name, email) VALUES (?, ?)
- Then we provide: stmt.run('John', 'john@example.com')

---

### 6.4 Authentication Controller (server/controllers/authController.js)

**What it does**: Contains the logic for signup, login, logout, and checking authentication

```javascript
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const authController = {
  // User Registration
  signup: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      // Validation
      if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      // Check if user already exists
      const existingUser = User.findByEmail(email);
      if (existingUser) {
        return res.status(400).json({ message: 'Email already registered' });
      }

      // Create new user
      const userId = User.create(name, email, password);
      const user = User.findById(userId);

      // Generate JWT token
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
      );

      // Send token as cookie
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
      });

      // Send user data (without password)
      res.status(201).json({
        message: 'User created successfully',
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      });
    } catch (error) {
      console.error('Signup error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  // User Login
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Validation
      if (!email || !password) {
        return res.status(400).json({ message: 'Email and password required' });
      }

      // Find user
      const user = User.findByEmail(email);
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Check password
      const isValidPassword = User.comparePassword(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Generate JWT token
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
      );

      // Send token as cookie
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 7 * 24 * 60 * 60 * 1000
      });

      res.json({
        message: 'Login successful',
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  // User Logout
  logout: async (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Logout successful' });
  },

  // Get Current User
  getCurrentUser: async (req, res) => {
    try {
      const user = User.findById(req.userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json({
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      });
    } catch (error) {
      console.error('Get user error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  }
};

export default authController;
```

**For Beginners - Understanding the Flow**:

**Signup Process**:
1. User fills out form (name, email, password)
2. Frontend sends data to /api/auth/signup
3. Backend checks if email already exists
4. If new: create user with hashed password
5. Generate JWT token (like a VIP pass)
6. Send token back as secure cookie
7. User is now logged in!

**Login Process**:
1. User enters email and password
2. Frontend sends to /api/auth/login
3. Backend finds user by email
4. Compares entered password with hashed password
5. If match: generate JWT token
6. Send token as cookie
7. User logged in!

**What is JWT?**
JWT (JSON Web Token) is like a digital passport. It contains:
- User ID
- Email
- Expiration date
- Digital signature (proves it's real)

When you visit protected pages, you show your JWT "passport" to prove who you are.

---

### 6.5 Authentication Middleware (server/middleware/auth.js)

**What it does**: Verifies JWT tokens before allowing access to protected routes

```javascript
import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  try {
    // Get token from cookie
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Add user ID to request
    req.userId = decoded.id;
    req.userEmail = decoded.email;
    
    // Continue to next middleware or route
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is invalid or expired' });
  }
};

export default authMiddleware;
```

**For Beginners**:

Think of this middleware as a security guard at a concert:
1. You show your ticket (JWT token)
2. Guard verifies it's real and not expired
3. If valid: you can enter (call 
ext())
4. If invalid: you're turned away (send error response)

**How to use it**:
```javascript
// In authRoutes.js
router.get('/profile', authMiddleware, authController.getCurrentUser);
```

This means: "Before running getCurrentUser, first check authentication"

---

## 7. Database Schema

### 📊 Understanding Database Tables

Our application uses SQLite with a simple but effective schema. Currently, we have one main table:

### Users Table

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

**Column Explanations**:

| Column | Type | Description | Example |
|--------|------|-------------|---------|
| id | INTEGER | Unique identifier for each user. Auto-increments (1, 2, 3, ...) | 42 |
| 
ame | TEXT | User's full name. Required (NOT NULL) | "John Doe" |
| email | TEXT | User's email address. Must be unique | "john@example.com" |
| password | TEXT | Hashed password (not plain text!) | "..." |
| created_at | DATETIME | When the account was created | "2024-01-15 10:30:00" |

**For Beginners - Database Concepts**:

**Primary Key (id)**:
- Like a unique student ID number
- No two users can have the same ID
- Used to identify specific users

**UNIQUE Constraint (email)**:
- Ensures no duplicate emails
- If someone tries to register with existing email, database rejects it

**NOT NULL Constraint**:
- Field must have a value
- Can't create user without name, email, or password

**AUTOINCREMENT**:
- Database automatically assigns next number
- You don't need to specify ID when creating user

**Example Data**:
`
| id | name          | email                | password (hashed) | created_at          |
|----|---------------|----------------------|-------------------|---------------------|
| 1  | John Doe      | john@example.com     | ...   | 2024-01-15 10:30:00 |
| 2  | Jane Smith    | jane@example.com     | ...   | 2024-01-15 11:15:00 |
| 3  | Bob Johnson   | bob@example.com      | ...   | 2024-01-15 12:00:00 |
`

---

## 8. Authentication System

### 🔐 How User Authentication Works

Our authentication system uses industry-standard practices to keep user accounts secure.

### 8.1 Authentication Flow Diagram

`
┌─────────────┐
│  User Opens │
│   Website   │
└──────┬──────┘
       │
       ├─────────────────┐
       │                 │
       ▼                 ▼
┌─────────────┐   ┌─────────────┐
│   Sign Up   │   │    Login    │
└──────┬──────┘   └──────┬──────┘
       │                 │
       │  POST data      │  POST data
       ▼                 ▼
┌───────────────────────────────┐
│  Backend: /api/auth/signup    │
│           /api/auth/login     │
└──────────────┬────────────────┘
               │
               │ Check credentials
               ▼
┌───────────────────────────────┐
│      Verify in Database       │
│   - Email exists?             │
│   - Password correct?         │
└──────────────┬────────────────┘
               │
               │ If valid
               ▼
┌───────────────────────────────┐
│     Generate JWT Token        │
│   { id: 1, email: "..." }     │
└──────────────┬────────────────┘
               │
               │ Send as cookie
               ▼
┌───────────────────────────────┐
│   Browser Stores Token        │
│   (httpOnly, secure cookie)   │
└──────────────┬────────────────┘
               │
               │ User navigates
               ▼
┌───────────────────────────────┐
│   Protected Page Request      │
│   /dashboard (with cookie)    │
└──────────────┬────────────────┘
               │
               │ Token sent automatically
               ▼
┌───────────────────────────────┐
│   Middleware Verifies Token   │
│   - Valid signature?          │
│   - Not expired?              │
└──────────────┬────────────────┘
               │
               ├─── Valid ──────────> Allow Access
               │
               └─── Invalid ────────> Redirect to Login
`

### 8.2 Password Security

**How We Protect Passwords**:

1. **Never Store Plain Text**: 
   - User enters: "mypassword123"
   - We store: ""

2. **Bcrypt Hashing**:
   - One-way encryption (can't reverse it)
   - Includes "salt" (random data added to password)
   - Takes time to compute (prevents brute force attacks)

3. **Salt Rounds (10)**:
   - Higher number = more secure but slower
   - 10 is a good balance for most applications

**Example**:
```javascript
// During signup
const password = "mypassword123";
const hashed = bcrypt.hashSync(password, 10);
// Result: "..."

// During login
const isValid = bcrypt.compareSync("mypassword123", hashed);
// Result: true
```

### 8.3 JWT (JSON Web Tokens)

**What is a JWT?**

A JWT is like a digital ID card that contains information and is cryptographically signed.

**Structure**:
`
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huQGV4YW1wbGUuY29tIiwiaWF0IjoxNjE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
`

This decodes to:

**Header**:
```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

**Payload (the data)**:
```json
{
  "id": 1,
  "email": "john@example.com",
  "iat": 1616239022,
  "exp": 1616843822
}
```

**Signature**:
- Cryptographic signature proving token is genuine
- Generated using secret key (only server knows)

**For Beginners**:
- **Header**: Says "I'm a JWT token"
- **Payload**: The actual data (user ID, email, expiration)
- **Signature**: Digital stamp proving it's real

### 8.4 Cookie Security

We store JWT tokens in HTTP-only cookies for security:

```javascript
res.cookie('token', token, {
  httpOnly: true,        // JavaScript can't access (prevents XSS attacks)
  secure: true,          // Only sent over HTTPS in production
  maxAge: 7 * 24 * 60 * 60 * 1000  // 7 days
});
```

**Security Benefits**:
- **httpOnly**: Prevents JavaScript from reading token (stops hackers using XSS)
- **secure**: Only works on HTTPS (encrypted connections)
- **maxAge**: Token expires after 7 days (must log in again)

---

## 9. API Endpoints

### 📡 What is an API?

API (Application Programming Interface) is how the frontend and backend communicate. Think of it like a waiter in a restaurant:
- You (frontend) tell the waiter (API) what you want
- Waiter tells the kitchen (backend)
- Kitchen prepares food (processes data)
- Waiter brings it back to you (response)

### 9.1 Authentication Endpoints

#### POST /api/auth/signup
**Purpose**: Create a new user account

**Request**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Success Response (201)**:
```json
{
  "message": "User created successfully",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Error Response (400)**:
```json
{
  "message": "Email already registered"
}
```

---

#### POST /api/auth/login
**Purpose**: Log in existing user

**Request**:
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Success Response (200)**:
```json
{
  "message": "Login successful",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Error Response (401)**:
```json
{
  "message": "Invalid credentials"
}
```

---

#### POST /api/auth/logout
**Purpose**: Log out current user

**Request**: No body needed (token in cookie)

**Success Response (200)**:
```json
{
  "message": "Logout successful"
}
```

---

#### GET /api/auth/me
**Purpose**: Get current logged-in user info
**Requires**: Valid JWT token in cookie

**Success Response (200)**:
```json
{
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Error Response (401)**:
```json
{
  "message": "No token, authorization denied"
}
```

---

### 9.2 Health Check Endpoint

#### GET /api/health
**Purpose**: Check if server is running

**Success Response (200)**:
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

**For Beginners**: This is like pinging the server to see if it's awake. Useful for monitoring and debugging.

---

## 10. Features & Components

### 🎯 Complete Feature Breakdown


### 10.1 AI Chatbot

**File**: src/components/features/AIChatbot.jsx

**What it does**: 
- Provides an intelligent AI assistant available on all pages
- Uses Google Gemini API for natural language understanding
- Maintains conversation context
- Offers friendly, professional responses

**Key Features**:
- Floating button in bottom-right corner
- Expandable chat window
- Message history
- Loading states
- Error handling
- Smooth animations

**How to integrate Google Gemini**:
1. Get API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Add to .env file: VITE_GEMINI_API_KEY=your_key_here
3. Chatbot automatically uses it for responses

**For Beginners**: The chatbot is like having a helpful assistant who knows about your company and can answer customer questions 24/7.

---

### 10.2 Analytics Dashboard

**File**: src/components/features/AnalyticsDashboard.jsx

**What it does**:
- Displays business metrics in visual charts
- Shows trends over time
- Compares different data points
- Provides actionable insights

**Chart Types**:
- **Bar Charts**: Compare values (e.g., sales by month)
- **Line Charts**: Show trends (e.g., user growth over time)
- **Pie Charts**: Display proportions (e.g., market share)
- **Area Charts**: Visualize cumulative data

**Sample Data Shown**:
- User engagement metrics
- Revenue trends
- Performance indicators
- System health statistics

**For Beginners**: Think of it as a visual scoreboard that makes complex data easy to understand at a glance.

---

### 10.3 News Feed

**File**: src/components/features/NewsFeed.jsx

**What it does**:
- Fetches latest technology news from NewsAPI
- Displays articles with images and summaries
- Updates automatically
- Links to full articles

**API Integration**:
```javascript
const fetchNews = async () => {
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  const url = https://newsapi.org/v2/top-headlines?category=technology&apiKey=;
  
  const response = await fetch(url);
  const data = await response.json();
  setArticles(data.articles);
};
```

**Setup Steps**:
1. Sign up at [NewsAPI.org](https://newsapi.org/)
2. Get your free API key
3. Add to .env: VITE_NEWS_API_KEY=your_key
4. News feed automatically displays latest articles

**For Beginners**: Like having a personalized newspaper that automatically updates with the latest tech news from around the world.

---

### 10.4 Global Map

**File**: src/components/features/GlobalMap.jsx

**What it does**:
- Shows interactive world map
- Highlights countries where services are available
- Responsive and mobile-friendly
- Beautiful visual design

**Technologies Used**:
- SVG for scalable graphics
- CSS for styling and hover effects
- JavaScript for interactivity

**For Beginners**: An attractive way to show your company's global presence, making the website feel international and professional.

---

### 10.5 Weather Widget

**File**: src/components/features/WeatherWidget.jsx

**What it does**:
- Shows current weather conditions
- Displays temperature, humidity, conditions
- Auto-detects user location (with permission)
- Updates periodically

**For Beginners**: A nice extra feature that makes the dashboard feel dynamic and connected to the real world.

---

### 10.6 Contact Form

**File**: src/components/features/EnhancedContactForm.jsx

**What it does**:
- Collects visitor inquiries
- Validates input (email format, required fields)
- Provides user feedback
- Can integrate with email services

**Form Fields**:
- Name (required)
- Email (required, validated)
- Phone (optional)
- Subject (required)
- Message (required)

**Validation Example**:
```javascript
const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
```

**For Beginners**: Like a digital suggestion box where visitors can reach out to your company. Validation ensures you receive properly formatted information.

---

## 11. Environment Configuration

### 🔧 What are Environment Variables?

Environment variables are settings that change based on where your app is running (development, production, etc.). They're like having different sets of keys for your home, office, and car.

### 11.1 Required Environment Variables

#### Frontend (.env)
```bash
# Vite requires VITE_ prefix for variables accessible in browser

# Google Gemini AI for chatbot
VITE_GEMINI_API_KEY=your_gemini_api_key_here

# NewsAPI for news feed
VITE_NEWS_API_KEY=your_newsapi_key_here

# Backend API URL
VITE_API_URL=http://localhost:5001

# OpenWeather API (optional, for weather widget)
VITE_WEATHER_API_KEY=your_weather_api_key_here
```

#### Backend (.env)
```bash
# Server configuration
PORT=5001
NODE_ENV=development

# Database
DATABASE_PATH=./server/database.sqlite

# JWT Secret (use a long, random string)
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production

# Frontend URL (for CORS)
CLIENT_URL=http://localhost:5173

# Cookie Settings
COOKIE_SECRET=another_random_secret_for_cookies
```

### 11.2 How to Set Up Environment Variables

**Step-by-Step for Beginners**:

1. **Copy the example file**:
   ```bash
   # In project root
   cp .env.example .env
   ```

2. **Get API Keys**:
   - **Gemini AI**: Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - **NewsAPI**: Sign up at [NewsAPI.org](https://newsapi.org/)
   - **OpenWeather**: Register at [OpenWeatherMap](https://openweathermap.org/api)

3. **Generate JWT Secret**:
   ```bash
   # In terminal/PowerShell
   node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
   ```
   This creates a secure random string

4. **Fill in your .env file**:
   Replace your_key_here with actual keys

5. **Never commit .env to Git**:
   The .gitignore file already excludes .env files

**For Beginners**: Environment variables are like secret passwords - they should never be shared publicly or committed to GitHub. Each developer has their own .env file locally.

---

## 12. Deployment

### 🚀 Putting Your Website Online

Deployment means making your website accessible on the internet, not just your computer.

### 12.1 Deployment Options

We support multiple deployment platforms:

#### Option 1: Railway (Recommended for Beginners)

**Why Railway?**
- Free tier available
- Automatic deployments from GitHub
- Handles both frontend and backend
- Easy database management

**Steps**:
1. Push code to GitHub
2. Sign up at [Railway.app](https://railway.app/)
3. Create new project from GitHub repo
4. Add environment variables in Railway dashboard
5. Deploy automatically!

**Configuration**: The ailway.json file is already set up

---

#### Option 2: Vercel (Frontend) + Railway (Backend)

**Why This Combo?**
- Vercel: Excellent for React/Vite apps
- Railway: Great for Node.js backend
- Both have generous free tiers

**Steps**:

**For Backend (Railway)**:
1. Deploy backend separately
2. Note the backend URL (e.g., https://your-app.railway.app)

**For Frontend (Vercel)**:
1. Push to GitHub
2. Sign up at [Vercel.com](https://vercel.com)
3. Import GitHub repository
4. Add environment variables:
   - VITE_API_URL=https://your-backend.railway.app
   - Add all VITE_ prefixed variables
5. Deploy!

**Configuration**: The ercel.json file is already set up

---

#### Option 3: Self-Hosting (VPS)

**For Advanced Users**: Deploy on your own server (DigitalOcean, AWS, etc.)

**Requirements**:
- Linux server with Node.js
- Domain name
- SSL certificate (Let's Encrypt)
- Process manager (PM2)

---

### 12.2 Pre-Deployment Checklist

Before deploying, make sure:

- ✅ All environment variables are set
- ✅ API keys are valid
- ✅ Database is initialized
- ✅ Build completes without errors (
pm run build)
- ✅ No console errors in browser
- ✅ Login/signup works locally
- ✅ All features tested
- ✅ Mobile responsiveness checked
- ✅ .env files NOT committed to Git

---

### 12.3 Environment-Specific Settings

**Development** (on your computer):
```javascript
NODE_ENV=development
VITE_API_URL=http://localhost:5001
```

**Production** (deployed online):
```javascript
NODE_ENV=production
VITE_API_URL=https://your-actual-domain.com
```

**For Beginners**: Think of development as your kitchen where you experiment, and production as the restaurant where you serve customers. Different settings for different environments!

---

## 13. Development Workflow

### 💻 How to Work on This Project

This section explains the day-to-day process of developing and testing the application.

### 13.1 Setting Up Development Environment

**Prerequisites**:
- Node.js 18+ installed
- npm or yarn package manager
- Code editor (VS Code recommended)
- Git for version control

**Initial Setup**:
```bash
# Clone the repository
git clone https://github.com/your-username/integrated-systems-ai.git
cd integrated-systems-ai

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env and add your API keys

# Initialize database (automatically done on first run)
npm run server
```

---

### 13.2 Running the Application Locally

**Option 1: Run Everything Together** (Recommended)
```bash
npm run dev:all
```
This runs both frontend (port 5173) and backend (port 5001) simultaneously.

**Option 2: Run Separately**

Terminal 1 - Frontend:
```bash
npm run dev
```

Terminal 2 - Backend:
```bash
npm run dev:server
```

**What's happening?**
- Frontend: Vite dev server with hot reload (changes appear instantly)
- Backend: Nodemon watches for changes and restarts server automatically

---

### 13.3 NPM Scripts Explained

Open package.json to see all available commands:

| Command | What It Does | When to Use |
|---------|--------------|-------------|
| 
pm run dev | Starts frontend dev server | Developing UI |
| 
pm run server | Starts backend server | Developing API |
| 
pm run dev:server | Starts backend with auto-restart | Developing API |
| 
pm run dev:all | Runs both frontend & backend | Full-stack development |
| 
pm run build | Builds production-ready frontend | Before deployment |
| 
pm run preview | Preview production build locally | Testing before deploy |
| 
pm run lint | Check code for errors | Before committing |
| 
pm start | Build and start production server | Production only |

**For Beginners**:
- Use 
pm run dev:all during development
- Use 
pm run build before deploying
- Use 
pm run lint to catch errors early

---

### 13.4 Development Best Practices

**Code Organization**:
- Keep components small and focused
- Use meaningful names (e.g., UserProfile.jsx, not Component1.jsx)
- One component per file
- Group related components in folders

**Git Workflow**:
```bash
# Create a new branch for each feature
git checkout -b feature/add-user-profile

# Make changes, then commit
git add .
git commit -m "Add user profile component"

# Push to GitHub
git push origin feature/add-user-profile

# Create pull request on GitHub
```

**Testing Checklist**:
- Test on Chrome, Firefox, Safari
- Test on mobile devices (use Chrome DevTools device emulation)
- Test all user flows (signup, login, dashboard)
- Check console for errors
- Verify API responses

---

### 13.5 Debugging Tips

**Frontend Debugging**:
```javascript
// Use console.log to see what's happening
console.log('User data:', user);

// Check state in React DevTools (browser extension)
// Inspect component props and state

// Network tab shows API calls
// Check if requests are successful
```

**Backend Debugging**:
```javascript
// Add console logs in server code
console.log('Request received:', req.body);
console.log('User found:', user);

// Check server terminal for errors
// Read error messages carefully - they tell you what's wrong!
```

**Common Issues and Solutions**:

**Problem**: "Cannot connect to server"
- ✅ Check if backend is running (
pm run server)
- ✅ Verify port 5001 is not in use
- ✅ Check VITE_API_URL in .env

**Problem**: "CORS error"
- ✅ Check allowedOrigins in server/index.js
- ✅ Make sure frontend port matches

**Problem**: "Token invalid"
- ✅ Clear cookies and log in again
- ✅ Check JWT_SECRET matches in .env

---

## 14. How It All Works Together

### 🎭 The Complete Picture

Let's walk through a real-world example of how everything works together.

### 14.1 User Journey: From Landing to Dashboard

**Step 1: User Visits Website**
```
User types: www.integratedsystems.com
↓
Browser requests: index.html
↓
Server sends: React app bundle
↓
React Router loads: Home page
↓
User sees: Hero section with video background
```

**Step 2: User Clicks "Sign Up"**
```
React Router navigates to: /signup
↓
Signup.jsx component renders
↓
User fills form: name, email, password
↓
Frontend validates: email format, password strength
↓
onClick: authService.signup() called
```

**Step 3: Signup Request Sent**
```
Frontend: POST /api/auth/signup
Body: { name, email, password }
↓
Backend: Express receives request
↓
Middleware: express.json() parses body
↓
Route: authRoutes handles /api/auth/signup
↓
Controller: authController.signup() executes
```

**Step 4: Backend Processes Signup**
```
Controller checks: Is email already used?
↓
NO → Continue
↓
bcrypt.hashSync(): Password → Hash
↓
Database: INSERT new user
↓
jwt.sign(): Create token
↓
res.cookie(): Send token as cookie
↓
Response: { user: { id, name, email } }
```

**Step 5: Frontend Handles Response**
```
authService receives: user data
↓
AuthContext updates: setUser(userData)
↓
User state changes: null → { id, name, email }
↓
React Router navigates to: /dashboard
↓
ProtectedRoute checks: Is user logged in? YES
↓
Dashboard.jsx renders
```

**Step 6: Dashboard Loads Features**
```
Dashboard mounts
↓
Parallel requests:
  ├─ AnalyticsDashboard → Fetch analytics data
  ├─ NewsFeed → Fetch latest news from NewsAPI
  ├─ GlobalMap → Render SVG map
  └─ WeatherWidget → Fetch weather data
↓
All components render with data
↓
User sees: Complete dashboard with live data
```

**Step 7: User Interacts with Chatbot**
```
User clicks: Chatbot button
↓
AIChatbot state: isOpen = true
↓
Chat window animates open
↓
User types: "What services do you offer?"
↓
Frontend: POST to chatbot service
↓
Backend: Calls Google Gemini API
↓
Gemini processes: Question + context
↓
Response: "We offer AI solutions for..."
↓
Frontend displays: AI response in chat
```

**Step 8: User Logs Out**
```
User clicks: Logout button
↓
authContext.logout() called
↓
Backend: res.clearCookie('token')
↓
Frontend: setUser(null)
↓
React Router navigates to: /
↓
User back at: Homepage (logged out)
```

---

### 14.2 Data Flow Diagram

`
┌─────────────────────────────────────────────────┐
│                   USER ACTIONS                   │
├─────────────────────────────────────────────────┤
│  Click, Type, Submit, Navigate, Scroll, etc.    │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│              REACT COMPONENTS                    │
├─────────────────────────────────────────────────┤
│  - Handle user events                           │
│  - Update local state (useState)                │
│  - Call service functions                       │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│               SERVICE LAYER                      │
├─────────────────────────────────────────────────┤
│  - authService.js (login, signup)               │
│  - chatbotService.js (AI chat)                  │
│  - newsService.js (fetch news)                  │
│  - Prepare API requests                         │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│             HTTP REQUEST (fetch)                 │
├─────────────────────────────────────────────────┤
│  - POST /api/auth/login                         │
│  - GET /api/auth/me                             │
│  - Includes cookies (JWT token)                 │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│            EXPRESS BACKEND                       │
├─────────────────────────────────────────────────┤
│  1. Middleware (CORS, JSON parser, cookies)     │
│  2. Routes (map URLs to controllers)            │
│  3. Controllers (business logic)                │
│  4. Models (database operations)                │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│             SQLITE DATABASE                      │
├─────────────────────────────────────────────────┤
│  - Query user data                              │
│  - Insert new records                           │
│  - Update existing data                         │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│          HTTP RESPONSE (JSON)                    │
├─────────────────────────────────────────────────┤
│  - Success: { user: {...}, message: "..." }     │
│  - Error: { message: "..." }                    │
│  - Status codes: 200, 201, 400, 401, 500        │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│           SERVICE PROCESSES RESPONSE             │
├─────────────────────────────────────────────────┤
│  - Parse JSON                                   │
│  - Handle errors                                │
│  - Return data to component                     │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│         COMPONENT UPDATES STATE                  │
├─────────────────────────────────────────────────┤
│  - setState() triggers re-render               │
│  - UI updates automatically                     │
│  - User sees changes                            │
└─────────────────────────────────────────────────┘
`

---

### 14.3 Key Takeaways for Beginners

**Frontend (React)**:
- Components are like LEGO blocks
- State (useState) makes components interactive
- Props pass data from parent to child
- Context shares data across entire app
- React Router handles navigation

**Backend (Node.js/Express)**:
- Express handles HTTP requests
- Middleware processes requests before routes
- Controllers contain business logic
- Models interact with database
- JWT tokens secure authentication

**Database (SQLite)**:
- Tables are like spreadsheets
- Rows are individual records
- SQL queries retrieve/modify data
- Primary keys uniquely identify records

**Communication**:
- Frontend and backend talk via HTTP/REST API
- JSON format for data exchange
- Cookies store authentication tokens
- CORS allows cross-origin requests

---

## 🎓 Conclusion

Congratulations! You now understand how the entire Integrated Systems AI web application works, from frontend to backend, from user signup to dashboard features.

### What You've Learned:

✅ Modern web development with React and Node.js
✅ User authentication with JWT
✅ Database management with SQLite
✅ API integration (News, AI, Weather)
✅ Secure password handling
✅ Full-stack application architecture
✅ Deployment strategies
✅ Development best practices

### Next Steps:

1. **Experiment**: Try modifying components and see what happens
2. **Build Features**: Add your own features to the dashboard
3. **Read Code**: Explore the source files to understand implementation details
4. **Debug**: Practice finding and fixing errors
5. **Deploy**: Put your version online and share it!

### Resources for Continued Learning:

- **React**: [reactjs.org/docs](https://reactjs.org/docs)
- **Express**: [expressjs.com](https://expressjs.com/)
- **SQLite**: [sqlite.org/docs.html](https://sqlite.org/docs.html)
- **MDN Web Docs**: [developer.mozilla.org](https://developer.mozilla.org/)

---

**Remember**: Every expert was once a beginner. Take your time, experiment, break things (that's how you learn!), and don't be afraid to ask questions.

Happy coding! 🚀

---

*Last updated: January 2024*
*Version: 1.0.0*

