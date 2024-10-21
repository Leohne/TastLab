
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom" 
import Header from './components/header/Header'
import Homepage from './pages/homepage/Homepage'
import Recherche from './pages/recherche/Recherche'
import Connexion from './pages/connexion/Connexion'
import Recette from './pages/recette/Recette'
import Error from './pages/Error/Error'
import Footer from './components/footer/Footer'

function App() {


  return (
    <div>
      <BrowserRouter>
      <>
      <Header />
      <Routes>
        <Route index element={<Homepage />}/>
        <Route path="/search" element={<Recherche />}/>
        <Route path="/login" element={<Connexion />}/>
        <Route path="/search/:id" element={<Recette />}/>
        <Route path="/*" element={<Error />}/>
      </Routes>
      <Footer/>
      </>
      </BrowserRouter>
    </div>
  )
}

export default App
