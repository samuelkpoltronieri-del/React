import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Questoes from './pages/Questoes'
import Conteudos from './pages/Conteudos'
import Simulados from './pages/Simulados'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questoes" element={<Questoes />} />
          <Route path="/conteudos" element={<Conteudos />} />
          <Route path="/simulados" element={<Simulados />} />
        </Routes>
      </main>
    </div>
  )
}

export default App