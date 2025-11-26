# Complete Installation Guide

## Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)

## Step-by-Step Installation

### 1. Install All Dependencies
```bash
npm install
```

This will install both frontend and backend dependencies including:
- React ecosystem (react, react-dom, react-router-dom)
- UI libraries (framer-motion, lucide-react, tailwindcss)
- Backend framework (express)
- Database (better-sqlite3)
- Authentication (bcryptjs, jsonwebtoken)
- Development tools (vite, nodemon, concurrently)

### 2. Environment Setup
The `.env` file has been created with default values. You can modify it if needed:
```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
JWT_SECRET=integrated_systems_ai_super_secret_key_2024
DB_PATH=./server/database.sqlite
```

### 3. Start the Application

#### Option A: Run Everything Together (Recommended)
```bash
npm run dev:all
```
This will start both frontend (port 5173) and backend (port 5000) simultaneously.

#### Option B: Run Separately
**Terminal 1 - Backend:**
```bash
npm run dev:server
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

### 4. Access the Application
Open your browser and navigate to:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000/api/health

## Testing the Authentication System

### Test Scenario 1: Sign Up New User
1. Click "Sign Up" in the header
2. Fill in the form:
   - Name: Test User
   - Email: test@example.com
   - Password: password123
   - Confirm Password: password123
3. Click "Create Account"
4. You should be redirected to the Dashboard

### Test Scenario 2: Logout
1. From the Dashboard, click "Logout" button
2. You should be redirected to the home page
3. The header should now show "Login" and "Sign Up" buttons

### Test Scenario 3: Login
1. Click "Login" in the header
2. Enter credentials:
   - Email: test@example.com
   - Password: password123
3. Click "Sign In"
4. You should be redirected to the Dashboard

### Test Scenario 4: Protected Route
1. Logout if you're logged in
2. Try to access http://localhost:5173/dashboard directly
3. You should be automatically redirected to the login page

### Test Scenario 5: Persistent Session
1. Login to your account
2. Refresh the page
3. You should remain logged in (session persists)

## Verification Checklist

- [ ] Frontend loads without errors
- [ ] Backend API responds at /api/health
- [ ] Sign up creates new user
- [ ] Login works with correct credentials
- [ ] Login fails with incorrect credentials
- [ ] Dashboard shows user information
- [ ] Logout clears session
- [ ] Protected routes redirect to login
- [ ] Session persists on page refresh
- [ ] Header shows correct buttons based on auth state

## Troubleshooting

### Port Already in Use
If you get a port error:
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
```

### Database Locked Error
Delete the database file and restart:
```bash
# Windows
del server\database.sqlite

# Mac/Linux
rm server/database.sqlite
```

### Dependencies Installation Failed
Clear npm cache and reinstall:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### CORS Errors
Ensure both servers are running and ports match:
- Frontend: 5173
- Backend: 5000
- Check vite.config.js proxy settings

## Project Structure

```
integrated-systems-ai-website/
├── server/                     # Backend code
│   ├── config/
│   │   └── database.js        # SQLite setup
│   ├── controllers/
│   │   └── authController.js  # Auth logic
│   ├── middleware/
│   │   └── auth.js           # JWT verification
│   ├── models/
│   │   └── User.js           # User model
│   ├── routes/
│   │   └── authRoutes.js     # API routes
│   └── index.js              # Server entry
├── src/                       # Frontend code
│   ├── components/
│   │   ├── auth/
│   │   │   └── ProtectedRoute.jsx
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   └── ui/
│   ├── context/
│   │   └── AuthContext.jsx   # Auth state management
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── Dashboard.jsx
│   ├── services/
│   │   └── authService.js    # API calls
│   └── config/
│       └── api.js            # API configuration
├── .env                       # Environment variables
├── .env.example              # Example env file
└── package.json              # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start frontend only (Vite dev server)
- `npm run server` - Start backend only (production mode)
- `npm run dev:server` - Start backend with hot reload (nodemon)
- `npm run dev:all` - Start both frontend and backend
- `npm run build` - Build frontend for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Next Steps

After successful installation:
1. Customize the JWT_SECRET in .env for production
2. Modify user schema if you need additional fields
3. Add more protected routes as needed
4. Implement additional features (password reset, email verification, etc.)

## Support

For detailed API documentation, see BACKEND_README.md
For issues, check the Troubleshooting section above
