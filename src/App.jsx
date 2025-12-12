import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import PlanetarySystem from './components/animations/PlanetarySystem'
import ScrollProgressBar from './components/ui/ScrollProgressBar'

// Lazy load heavy components for better performance
const AIChatbot = lazy(() => import('./components/features/AIChatbot'))

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary-500/30 border-t-primary-500 rounded-full animate-spin" />
  </div>
)

function App() {
  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />
      
      {/* Global Planetary System Background - Available on all pages */}
      <PlanetarySystem />
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      
      {/* Global AI Chatbot - Lazy loaded for better performance */}
      <Suspense fallback={<LoadingSpinner />}>
        <AIChatbot />
      </Suspense>
    </>
  )
}

export default App
