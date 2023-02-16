import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import { Navigation } from './components/Navigation'
import { Home } from './pages/Home'
import { Logs } from './pages/Logs'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" index element={<Home />} />
          <Route path="/logs" index element={<Logs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
