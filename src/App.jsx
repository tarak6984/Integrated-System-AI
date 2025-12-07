import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import AdminDashboard from './pages/AdminDashboard'
import ProtectedRoute from './components/auth/ProtectedRoute'
import AIChatbot from './components/features/AIChatbot'
import SpaceBackground from './components/layout/SpaceBackground'

function App() {
  return (
    <AuthProvider>
      {/* Global Space Background - Available on all pages */}
      <SpaceBackground />
      
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
        <Route 
          path="/admin" 
          element={<AdminDashboard />} 
        />
      </Routes>
      {/* Global AI Chatbot - Available on all pages */}
      <AIChatbot />
    </AuthProvider>
  )
}

export default App
