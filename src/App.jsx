import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Feed from './pages/Feed'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </div>
  )
}

export default App