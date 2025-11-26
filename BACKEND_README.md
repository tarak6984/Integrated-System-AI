# Backend Integration Guide

## Overview
This project now includes a complete backend system with user authentication using Node.js, Express, and SQLite database.

## Technologies Used
- **Backend Framework**: Express.js
- **Database**: SQLite (better-sqlite3)
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Frontend**: React with React Router

## Project Structure

```
server/
├── config/
│   └── database.js          # SQLite database configuration
├── controllers/
│   └── authController.js    # Authentication logic
├── middleware/
│   └── auth.js             # JWT verification middleware
├── models/
│   └── User.js             # User model with CRUD operations
├── routes/
│   └── authRoutes.js       # Authentication routes
└── index.js                # Express server entry point
```

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Create Environment File
Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

Edit `.env` and update the values:
```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
DB_PATH=./server/database.sqlite
```

**Important**: Generate a strong JWT secret for production!

### 3. Run the Application

#### Option 1: Run Frontend and Backend Separately
```bash
# Terminal 1 - Run backend server
npm run dev:server

# Terminal 2 - Run frontend
npm run dev
```

#### Option 2: Run Both Simultaneously
```bash
npm run dev:all
```

### 4. Access the Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

## API Endpoints

### Authentication Routes

#### 1. Sign Up
- **URL**: `POST /api/auth/signup`
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Success Response** (201):
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

#### 2. Login
- **URL**: `POST /api/auth/login`
- **Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Success Response** (200):
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

#### 3. Get Current User (Protected)
- **URL**: `GET /api/auth/me`
- **Headers**: Requires authentication cookie
- **Success Response** (200):
  ```json
  {
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
  ```

#### 4. Logout (Protected)
- **URL**: `POST /api/auth/logout`
- **Headers**: Requires authentication cookie
- **Success Response** (200):
  ```json
  {
    "message": "Logout successful"
  }
  ```

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

## Frontend Routes

- `/` - Home page
- `/login` - Login page
- `/signup` - Sign up page
- `/dashboard` - Protected dashboard (requires authentication)

## Authentication Flow

1. **Sign Up**: User creates account → Server hashes password → Stores in database → Returns JWT token in HTTP-only cookie
2. **Login**: User enters credentials → Server verifies password → Returns JWT token in HTTP-only cookie
3. **Protected Routes**: Frontend checks authentication → Redirects to login if not authenticated
4. **API Requests**: Backend verifies JWT token from cookie → Grants or denies access

## Security Features

- ✅ Password hashing with bcrypt (10 rounds)
- ✅ JWT tokens stored in HTTP-only cookies (XSS protection)
- ✅ CORS configured for specific origin
- ✅ SQL injection protection via prepared statements
- ✅ Input validation on both frontend and backend
- ✅ Secure cookies in production (HTTPS only)

## Testing the API

### Using cURL

**Sign Up**:
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123"}' \
  -c cookies.txt
```

**Login**:
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}' \
  -c cookies.txt
```

**Get Current User**:
```bash
curl -X GET http://localhost:5000/api/auth/me \
  -b cookies.txt
```

**Logout**:
```bash
curl -X POST http://localhost:5000/api/auth/logout \
  -b cookies.txt
```

## Troubleshooting

### Database Issues
- If you encounter database errors, delete `server/database.sqlite` and restart the server
- The database will be automatically recreated with the correct schema

### Port Already in Use
- Change the `PORT` in `.env` file
- Update the Vite proxy configuration in `vite.config.js`

### CORS Errors
- Ensure `CLIENT_URL` in `.env` matches your frontend URL
- Verify Vite is running on port 5173

### Authentication Not Working
- Clear browser cookies
- Check that JWT_SECRET is set in `.env`
- Verify the backend server is running

## Development Tips

1. **Database Reset**: Delete `database.sqlite` file to reset all data
2. **View Database**: Use a SQLite viewer like DB Browser for SQLite
3. **Hot Reload**: Backend uses nodemon for automatic restart on file changes
4. **Debugging**: Check console logs in both frontend and backend terminals

## Production Deployment

### Environment Variables
Update `.env` for production:
```env
NODE_ENV=production
JWT_SECRET=<strong-random-secret>
CLIENT_URL=https://yourdomain.com
```

### Build Frontend
```bash
npm run build
```

### Serve Static Files
Update `server/index.js` to serve built frontend:
```javascript
app.use(express.static('dist'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});
```

## Future Enhancements

- [ ] Email verification
- [ ] Password reset functionality
- [ ] OAuth integration (Google, GitHub)
- [ ] Rate limiting
- [ ] Refresh tokens
- [ ] User profile management
- [ ] Role-based access control

## Support

For issues or questions, please check the main README.md or create an issue in the repository.
