
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom" 
import Header from './components/header/Header'
import Homepage from './pages/homepage/Homepage'
import Recherche from './pages/recherche/Recherche'
import Connexion from './pages/connexion/Connexion'
import Recette from './pages/recette/Recette'

function App() {


  return (
    <div>
      <BrowserRouter>
      <>
      <Header />
      <Routes>
        <Route index element={<Homepage />}/>
        <Route path="/recherche" element={<Recherche />}/>
        <Route path="/connexion" element={<Connexion />}/>
        <Route path="/recette/:id" element={<Recette />}/>
      </Routes>
      </>
      </BrowserRouter>
    </div>
  )
}

export default App
