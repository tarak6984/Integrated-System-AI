import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import AIChatbot from './components/features/AIChatbot'
import PlanetarySystem from './components/animations/PlanetarySystem'
import ScrollProgressBar from './components/ui/ScrollProgressBar'

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
      
      {/* Global AI Chatbot - Available on all pages */}
      <AIChatbot />
    </>
  )
}

export default App
